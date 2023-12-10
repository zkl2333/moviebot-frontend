import React from "react";

const loading = () => {
  return (
    <main className="h-full mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          Loading...
        </h1>
        <p className="mt-4 text-base text-gray-300 sm:mt-6">Please wait a moment.</p>
        <div className="mt-10">
          <a href="/" className="text-sm font-semibold leading-7 text-indigo-500">
            <span aria-hidden="true">&larr;</span> Back to home
          </a>
        </div>{" "}
      </div>
    </main>
  );
};

export default loading;
