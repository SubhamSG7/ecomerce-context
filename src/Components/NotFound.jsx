import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="loader mb-4 border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
    </div>
  );
}
