import React from "react";

export default function FourOFour() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mb-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link to="/" className="text-blue-500 underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
