"use client";

export default function Error({ error, reset }) {
  return (
    <main className="h-full mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">页面寄了</h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">{error.message}</p>
        <p className="mt-4 text-base text-white/70 sm:mt-6">追踪码： {error.digest}</p>
        <div className="mt-10 flex flex-col gap-4 justify-center items-center">
          <span
            className="text-sm font-semibold leading-7 text-white cursor-pointer"
            onClick={() => reset()}
          >
            再试试
          </span>
          <a href="/" className="text-sm font-semibold leading-7 text-white">
            返回首页
          </a>
        </div>
      </div>
    </main>
  );
}
