"use client";

import { useState } from "react";

export default function ImportKnowledgeJSON() {
  const [status, setStatus] = useState<string>("idle");
  const [result, setResult] = useState<any>(null);

  const importFromJSONFile = async () => {
    try {
      setStatus("loading");
      
      // Fetch the JSON file from public directory
      const response = await fetch("/knowledge-data.json");
      const data = await response.json();
      
      // Send the data to our API endpoint
      const apiResponse = await fetch("/api/add-knowledge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await apiResponse.json();
      setResult(result);
      setStatus(result.success ? "success" : "error");
    } catch (error) {
      setStatus("error");
      setResult({ message: "An error occurred" });
    }
  };

  const addTestData = async () => {
    try {
      setStatus("loading");
      
      // Simple test data
      const testData = {
        ids: ["test1", "test2"],
        documents: ["This is a test document for ChromaDB", "Another test document with different content"],
        metadatas: [{ category: "test" }, { category: "example" }]
      };
      
      // Send the data to our API endpoint
      const apiResponse = await fetch("/api/add-knowledge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });
      
      const result = await apiResponse.json();
      setResult(result);
      setStatus(result.success ? "success" : "error");
    } catch (error) {
      setStatus("error");
      setResult({ message: "An error occurred" });
    }
  };

  const checkStatus = async () => {
    try {
      const response = await fetch("/api/add-knowledge");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      // Silently handle error
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Knowledge Base Importer (JSON)</h2>
      
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={importFromJSONFile}
          disabled={status === "loading"}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {status === "loading" ? "Importing..." : "Import from JSON File"}
        </button>
        
        <button
          onClick={addTestData}
          disabled={status === "loading"}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300"
        >
          {status === "loading" ? "Adding..." : "Add Test Data"}
        </button>
        
        <button
          onClick={checkStatus}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Check Status
        </button>
      </div>

      <div className="mt-6 mb-4">
        <h3 className="text-lg font-semibold">Test with cURL:</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mt-2 text-sm">
          {`curl -X POST http://localhost:3000/api/add-knowledge \\
  -H "Content-Type: application/json" \\
  -d '{
    "ids": ["curl1", "curl2"],
    "documents": ["Hello Chroma from curl!", "Second doc with different metadata"],
    "metadatas": [{ "category": "technology" }, { "category": "example" }]
  }'`}
        </pre>
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
          Data was successfully imported into ChromaDB!
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 p-3 bg-red-100 border border-red-200 rounded text-red-700">
          There was an error importing the data.
        </div>
      )}
    </div>
  );
}