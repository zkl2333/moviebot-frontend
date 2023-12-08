"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] p-4 gap-3">
      <h2 className="text-7xl -mr-12 font-bold">寄！</h2>
      <p className="text-2xl text-gray-500 text-center">{error.message}</p>
      <p className="text-md text-gray-500 text-center">
        追踪码：
        {error.digest}
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => reset()}
      >
        再试试
      </button>
    </div>
  );
}
