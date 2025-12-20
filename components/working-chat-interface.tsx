"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  type: "user" | "bot";
  text: string;
  timestamp: Date;
};

export function WorkingChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Halo! Saya asisten virtual Meow Labs. Ada yang bisa saya bantu?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFetchingRef = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("meow-chat-history");
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const validMessages = parsed.map((m: any) => {
            if (m && typeof m === 'object' && m.id && m.type && m.text && m.timestamp) {
              return {
                id: String(m.id),
                type: m.type as 'user' | 'bot',
                text: String(m.text),
                timestamp: new Date(m.timestamp)
              };
            }
            return null;
          }).filter((m): m is Message => m !== null);
          
          if (validMessages.length > 0) {
            setMessages(validMessages);
          }
        }
      }
    } catch (e) {
      // Clear corrupted localStorage data
      try {
        localStorage.removeItem("meow-chat-history");
      } catch {
        // Ignore localStorage errors
      }
    }
  }, []);

  useEffect(() => {
    if (Array.isArray(messages) && messages.length > 1) {
      localStorage.setItem("meow-chat-history", JSON.stringify(messages));
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: trimmedInput,
      timestamp: new Date(),
    };

    setMessages((prev) => {
      const currentMessages = Array.isArray(prev) ? prev : [];
      return [...currentMessages, userMessage];
    });
    setInputValue("");
    setIsLoading(true);

    try {
      // Prevent concurrent fetch requests
      if (isFetchingRef.current) return;
      
      isFetchingRef.current = true;
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmedInput }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: data.message || "Maaf, saya tidak dapat memproses permintaan Anda.",
        timestamp: new Date(),
      };

      setMessages((prev) => {
        const currentMessages = Array.isArray(prev) ? prev : [];
        return [...currentMessages, botMessage];
      });
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: "Maaf, terjadi kesalahan. Silakan coba lagi.",
        timestamp: new Date(),
      };

      setMessages((prev) => {
        const currentMessages = Array.isArray(prev) ? prev : [];
        return [...currentMessages, errorMessage];
      });
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
      inputRef.current?.focus();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <h3 className="font-semibold">Meow Labs Assistant</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {Array.isArray(messages) && messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-lg px-4 py-2 ${
                message.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.type === "user" ? "text-blue-100" : "text-gray-500"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg px-4 py-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ketik pesan Anda..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 bg-white text-gray-900 placeholder-gray-400"
            disabled={isLoading}
            autoFocus
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              !inputValue.trim() || isLoading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}