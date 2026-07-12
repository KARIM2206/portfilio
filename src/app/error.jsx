"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#030412] text-white">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-aqua text-black rounded hover:bg-opacity-80 transition"
      >
        Try again
      </button>
    </div>
  );
}
