import React from "react";
import Image from "next/image";
import { fetchTmdb } from "../../../utils";
import HorizontalScroll from "../HorizontalScroll/inedx";

const Index = async () => {
  const { data } = await fetchTmdb("/movie/157336", {
    append_to_response: "images,credits",
    language: "zh-CN",
    include_image_language: "zh,null",
  });

  const backdrop = data.images?.backdrops[0];
  const logo = data.images?.logos[0];
  const overview = data.overview;
  const director = data.credits.crew.find((crew) => crew.job === "Director")?.name;
  const cast = data.credits.cast.slice(0, 5);

  return (
    <div className="w-full h-[100vh] relative">
      <Image
        src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
        width={backdrop.width}
        height={backdrop.height}
        alt="Picture of the author"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent">
        <div className="absolute mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-32 left-0 right-0 bottom-0 py-10 md:py-40">
          <Image
            src={`https://image.tmdb.org/t/p/w500${logo.file_path}`}
            alt="Picture of the author"
            className="object-cover w-1/3 h-1/3 min-w-[200px]"
            width={logo.width}
            height={logo.height}
          />
          <div className="text-white text-lg mt-4 md:mt-10 line-clamp-3 md:line-clamp-none">
            {overview}
          </div>
          {/* <div className="text-gray-400 text-lg mt-2 md:mt-8">导演：{director}</div> */}
          <div className="flex gap-3 md:gap-6 mt-2 md:mt-8">
            {cast.map((cast) => {
              return (
                <div key={cast.id} className="flex w-14 gap-2 flex-col justify-center items-center">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                    alt="Picture of the author"
                    className="object-cover w-14 h-14 rounded-full"
                    width={500}
                    height={500}
                  />
                  <div className="text-gray-400 text-center text-xs line-clamp-2">{cast.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
