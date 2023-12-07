"use client";
import Image from "next/image";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import data from "./data";

const mediaList = data.results;

const Index = () => {
  // 横向滚动
  const scrollRef = useRef<HTMLDivElement>(null);

  const [leftHasMore, setLeftHasMore] = useState(false);
  const [rightHasMore, setRightHasMore] = useState(true);

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", () => {
      const scrollLeft = scrollRef.current?.scrollLeft || 0;
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const clientWidth = scrollRef.current?.clientWidth || 0;
      setLeftHasMore(scrollLeft > 0);
      setRightHasMore(scrollWidth - (scrollLeft + clientWidth) > 10);
    });
  }, []);

  return (
    <div className="mx-auto">
      <div className="mx-auto text-center max-w-4xl space-y-2 md:space-y-6 mb-6">
        <div className="text-2xl md:text-5xl font-bold flex justify-center items-center gap-2">
          新片上映
          <Icon icon="mdi:television-classic" className="text-3xl md:text-6xl" />
        </div>
        <div className="text-md md:text-lg line-clamp-2 text-gray-500">
          正在热映的电影，包括正在上映的电影和即将上映的电影。
        </div>
      </div>
      {/* 横向滚动 */}
      <div className="relative group">
        {/* 翻页 */}
        {leftHasMore && (
          <div
            className="absolute z-10 left-0 top-0 h-full w-20 group-hover:opacity-100 opacity-10 bg-gradient-to-l from-transparent from-10% to-gray-950 flex justify-start items-center text-3xl transition-all"
            onClick={() => {
              scrollRef.current?.scrollBy({
                left: -scrollRef.current.clientWidth,
                behavior: "smooth",
              });
            }}
          >
            <Icon icon="mingcute:left-fill" />
          </div>
        )}
        {rightHasMore && (
          <div
            className="absolute z-10 right-0 top-0 h-full w-20 group-hover:opacity-100 opacity-10 bg-gradient-to-r from-transparent to-90% to-gray-950 flex justify-end items-center text-3xl transition-all"
            onClick={() => {
              scrollRef.current?.scrollBy({
                left: scrollRef.current.clientWidth,
                behavior: "smooth",
              });
            }}
          >
            <Icon icon="mingcute:right-fill" />
          </div>
        )}
        <div
          className="flex gap-3 md:gap-8 overflow-x-scroll h-full hide-scroll-bar"
          ref={scrollRef}
        >
          {mediaList.map((media) => (
            <div key={media.id} className="w-32 md:w-52 space-y-2 flex-shrink-0 overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                width={500}
                height={720}
                className="rounded-2xl"
                layout="responsive"
                alt={media.title}
              />
              <div className="text-md md:text-xl line-clamp-1">
                {media.title}
                {/* <div className="text-xs md:text-xs text-gray-500">{media.release_date}</div> */}
              </div>
              <div>
                <div className="text-xs md:text-sm text-gray-500 line-clamp-2">
                  {media.overview}
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Icon icon="mdi:star" className="text-yellow-500 text-md" />
                  <span className="text-yellow-500 text-xs md:text-md">{media.vote_average}</span>
                  <span className="text-gray-500 text-xs ml-2">({media.vote_count} votes)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Index;
