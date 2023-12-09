import Image from "next/image";
import { fetchTmdb } from "../../../utils";
import Icon from "../../../components/Icon";
import HorizontalScroll from "../../../components/HorizontalScroll/inedx";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data } = await fetchTmdb(`/movie/${id}`, {
    append_to_response: "images,credits,recommendations",
    language: "zh-CN",
    include_image_language: "zh,null",
  });

  const logo = data.images?.logos[0];
  let backdrop = data.images?.backdrops[0] || {
    file_path: data.backdrop_path,
    width: 1280,
    height: 720,
  };
  const genres = data.genres.map((genre) => genre.name);

  return (
    <>
      <div className="relative -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
          width={backdrop.width}
          height={backdrop.height}
          alt="Picture of the author"
          className="object-cover object-top w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end"></div>
      </div>
      <div className="mx-container my-12 pt-10 mt-[-30vw]">
        {logo ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${logo.file_path}`}
            alt="Picture of the author"
            className="object-contain object-left w-1/3 h-1/3 min-w-[300px] max-h-[200px] max-w-[400px]"
            width={logo.width || 500}
            height={logo.height || 500}
          />
        ) : (
          <div className="text-white text-3xl font-bold">{data.title}</div>
        )}
        <div className="r-text-xs text-gray-300 flex gap-4 my-4">
          <div className="flex items-center">
            <Icon icon="mdi:star" className="text-yellow-500" />
            <span className="text-yellow-500">{data.vote_average}</span>
            <span className="ml-2">({data.vote_count} votes)</span>
          </div>
          <div>{data.release_date}</div>
          <div>
            {genres.map((genre) => {
              return (
                <span key={genre} className="mr-2">
                  {genre}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-8">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-2xl font-bold">
              <span className="text-gray-300">剧情简介</span>
            </div>
            <div>
              <span className="text-gray-400 line-clamp-4">{data.overview}</span>
            </div>
            <div className="my-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <Link
                href={`https://www.themoviedb.org/movie/${data.id}/watch?locale=zh-CN`}
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                订阅
              </Link>
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                编辑元数据
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div>
              <span className="text-gray-400">视频时长：</span>
              <span>{data.runtime}分钟</span>
            </div>
            <div>
              <span className="text-gray-400">分辨率：</span>
              <span>1080P</span>
            </div>
            <div>
              <span className="text-gray-400">视频编码：</span>
              <span>HEVC</span>
            </div>
            <div>
              <span className="text-gray-400">字幕：</span>
              <span>中文</span>
            </div>
            <div>
              <span className="text-gray-400">分辨率：</span>
              <span>1080P</span>
            </div>
            <div>
              <span className="text-gray-400">原产地片名：</span>
              <span>{data.original_title}</span>
            </div>
          </div>
        </div>
        <div>
          {/* 演员表 */}
          {data.credits.cast.length > 0 && (
            <>
              <div className="text-2xl font-bold mt-10">
                <span className="text-gray-300">演员表</span>
              </div>
              <HorizontalScroll>
                <div className="flex gap-4 mt-4">
                  {data.credits.cast.slice(0, 10).map((item) => (
                    <div key={item.id} className="relative rounded-md w-[100px] overflow-hidden">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt={item.name}
                        width={256}
                        height={384}
                      />
                      <div className="p-2 bg-gray-900 bg-opacity-50 rounded-b-md h-full">
                        <div className="text-xs font-bold text-gray-200">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.character}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </HorizontalScroll>
            </>
          )}
        </div>
        <div>
          {/* 推荐 */}
          {data.recommendations.results.length > 0 && (
            <>
              <div className="text-2xl font-bold mt-10">
                <span className="text-gray-300">推荐</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                {data.recommendations.results.map((item) => (
                  <Link href={`/movie/${item.id}`} key={item.id} className="relative">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={item.title}
                      width={500}
                      height={750}
                      className="rounded-md"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 bg-opacity-50 rounded-b-md">
                      <div className="text-sm font-bold text-gray-200">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.release_date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
