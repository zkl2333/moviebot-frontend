import Image from "next/image";
import { fetchTmdb } from "../../utils";
import Icon from "../Icon";
import Link from "next/link";

export default async function Index() {
  // 获取五页
  let mediaList = [];
  for (let i = 1; i <= 5; i++) {
    const {
      data: { results },
    } = await fetchTmdb("/movie/popular", { language: "zh-CN", page: i.toString() });
    mediaList = mediaList.concat(results);
  }

  // 去重 id
  const idSet = new Set();
  mediaList = mediaList.filter((media) => {
    if (idSet.has(media.id)) {
      return false;
    }
    idSet.add(media.id);
    return true;
  });

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
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
        {mediaList.map((media) => (
          <Link href={`/movie/${media.id}`} key={media.id} className="shadow-md space-y-2">
            <Image
              src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
              width={500}
              height={720}
              className="rounded-2xl"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
