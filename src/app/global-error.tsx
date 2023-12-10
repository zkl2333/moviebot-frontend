"use client";
import Image from "next/image";

export default function GlobalError({ error, reset }) {
  return (
    <html className="h-full">
      <body className="h-full">
        <main className="relative isolate min-h-full">
          <Image
            width={3050}
            height={2000}
            src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              页面寄了
            </h1>
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
      </body>
    </html>
  );
}
