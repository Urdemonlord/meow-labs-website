"use client";

import { useEffect, useState } from "react";

export default function KnowledgeImporter() {
  const [status, setStatus] = useState<string>("idle");
  const [result, setResult] = useState<any>(null);

  const importKnowledge = async () => {
    try {
      setStatus("loading");
      const response = await fetch("/api/knowledge", {
        method: "POST",
      });
      const data = await response.json();
      setResult(data);
      setStatus(data.success ? "success" : "error");
    } catch (error) {
      setStatus("error");
      setResult({ message: "An error occurred" });
    }
  };

  const checkStatus = async () => {
    try {
      const response = await fetch("/api/knowledge");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      // Silently handle error
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Knowledge Base Importer</h2>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={importKnowledge}
          disabled={status === "loading"}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {status === "loading" ? "Importing..." : "Import Knowledge Base"}
        </button>
        
        <button
          onClick={checkStatus}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Check Status
        </button>
      </div>

      {result && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="font-semibold text-lg mb-2">Result:</h3>
          <pre className="bg-gray-100 p-3 rounded overflow-auto max-h-60">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {status === "success" && (
        <div className="mt-4 p-3 bg-green-100 border border-green-200 rounded text-green-700">
          Knowledge base was successfully imported into ChromaDB!
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded text-red-700">
          There was an error importing the knowledge base.
        </div>
      )}
    </div>
  );
}