"use client";
import Image from "next/image";
import data from "./data";
import { Icon } from "@iconify/react";

const mediaList = data.results;

const Index = () => {
  return (
    <div className="mx-auto">
      <div className="mx-auto text-center max-w-4xl space-y-6 mb-6">
        <div className="text-2xl md:text-5xl font-bold flex justify-center items-center gap-2">
          正在热播
        </div>
        <div className="text-md md:text-lg line-clamp-2 text-gray-500">
          获取按受欢迎程度排序的电影列表，包括正在上映的电影和即将上映的电影。
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-10 gap-4 sm:gap-6 lg:gap-8">
        {mediaList.map((media) => (
          <div key={media.id} className="shadow-md space-y-2">
            <Image
              src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
              width={500}
              height={720}
              className="rounded-2xl"
              layout="responsive"
              alt={media.title}
            />
            <div className="text-md md:text-xl line-clamp-1">{media.title}</div>
            <div>
              <div className="text-xs md:text-sm text-gray-500 line-clamp-2">{media.overview}</div>
            </div>
            <div>
              <div className="items-center hidden md:flex">
                <Icon icon="mdi:star" className="text-yellow-500 text-md" />
                <span className="text-yellow-500 text-xs md:text-md">{media.vote_average}</span>
                <span className="text-gray-500 text-xs ml-2">({media.vote_count} votes)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
