import Image from "next/image";
import "./style.css";
import HorizontalScroll from "../HorizontalScroll/inedx";
import { fetchTmdb } from "../../../utils";
import Icon from "../Icon";

const Index = async () => {
  const {
    data: { results: mediaList },
  } = await fetchTmdb("/movie/now_playing", {
    language: "zh-CN,null",
    page: "1",
  });

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
      <HorizontalScroll>
        {mediaList.map((media) => {
          return (
            <div key={media.id} className="w-32 md:w-52 space-y-2 flex-shrink-0 overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
                width={500}
                height={720}
                className="rounded-2xl"
                alt={media.title}
              />
              <div className="text-md md:text-xl line-clamp-1">{media.title}</div>
              <div className="text-xs md:text-xs text-gray-500">{media.release_date}I</div>
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
          );
        })}
      </HorizontalScroll>
    </div>
  );
};
export default Index;
