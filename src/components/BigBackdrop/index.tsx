import React from "react";
import Image from "next/image";
import { fetchTmdb } from "../../utils";
import Icon from "../Icon";
import Link from "next/link";

const Index = async ({ movieId = "157336", showInfo = true }) => {
  const { data } = await fetchTmdb(`/movie/${movieId}`, {
    append_to_response: showInfo ? "images,credits" : "",
    language: "zh-CN",
    include_image_language: "zh,null",
  });

  const logo = data.images?.logos[0];
  const overview = data.overview;
  const director = data.credits?.crew.find((crew) => crew.job === "Director");
  const cast = data.credits?.cast.slice(0, 5) || [];
  let backdrop = data.images?.backdrops[0] || {
    file_path: data.backdrop_path,
    width: 1280,
    height: 720,
  };
  const genres = data.genres.map((genre) => genre.name);

  if (!backdrop) {
    if (data.backdrop_path) {
      backdrop = {
        file_path: data.backdrop_path,
        width: 1280,
        height: 720,
      };
    } else if (data.belongs_to_collection?.backdrop_path) {
      backdrop = {
        file_path: data.belongs_to_collection.backdrop_path,
        width: 1280,
        height: 720,
      };
    } else {
      backdrop = {
        file_path: "/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
        width: 1280,
        height: 720,
      };
    }
  }

  return (
    <div className="relative h-full w-full">
      {backdrop && (
        <Image
          src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
          width={backdrop.width}
          height={backdrop.height}
          alt="Picture of the author"
          className="object-cover object-top w-full h-full"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end">
        {showInfo && (
          <div className="mx-4 mx-container py-10 md:py-20 space-y-2 lg:space-y-4">
            {logo ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${logo.file_path}`}
                alt="Picture of the author"
                className="object-contain object-left w-1/3 h-1/3 min-w-[200px] max-h-[200px] max-w-[400px]"
                width={logo.width || 500}
                height={logo.height || 500}
              />
            ) : (
              <div className="text-white text-[4.8vw] font-bold">{data.title}</div>
            )}
            <div className="r-text-xs text-gray-300">
              <div className="flex items-center">
                <Icon icon="mdi:star" className="text-yellow-500" />
                <span className="text-yellow-500">{data.vote_average}</span>
                <span className="ml-2">({data.vote_count} votes)</span>
              </div>
              <div>
                {genres.map((genre) => {
                  return (
                    <span key={genre} className="mr-2">
                      {genre}
                    </span>
                  );
                })}
              </div>
              {director && <div>导演：{director.name}</div>}
            </div>
            <div className="text-white r-text-base line-clamp-3">{overview}</div>
            <div className="flex gap-3 md:gap-6 mt-2 md:mt-8">
              {cast.map((cast) => {
                return (
                  <div
                    key={cast.id}
                    className="flex w-14 gap-2 flex-col justify-center items-center"
                  >
                    {cast.profile_path && (
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        alt="Picture of the author"
                        className="object-cover w-14 h-14 rounded-full"
                        width={500}
                        height={500}
                      />
                    )}
                    <div className="text-gray-400 text-center text-xs line-clamp-2">
                      {cast.name}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="my-2 grid grid-cols-2 gap-x-6 gap-y-4 pt-4">
              <Link
                href={`/movie/${data.id}`}
                type="button"
                className="btn btn-sm md:btn-md btn-primary"
              >
                查看详情
              </Link>
              <button type="button" className="btn btn-sm md:btn-md btn-secondary">
                添加订阅
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
