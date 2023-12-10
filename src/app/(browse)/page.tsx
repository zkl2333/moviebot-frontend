import BigPoster from "../../components/BigBackdrop";
import GridMediaList from "../../components/Popular";
import BannerMediaList from "../../components/NowPlaying";
import MediaLibraryList from "../../components/MediaLibraryList";
import { fetchTmdb } from "../../utils";
import FullScreen from "../../components/FullScreen";

export default async function Page() {
  // 今年最热门的高分电影
  const { data } = await fetchTmdb(`/discover/movie`, {
    sort_by: "popularity.desc",
    include_adult: "false",
    include_video: "false",
    page: "1",
    vote_count_gte: "500",
    vote_average_gte: "8",
    primary_release_year: "2023",
    with_genres: "878,28,12",
    language: "zh",
  });

  return (
    <>
      <FullScreen>
        <BigPoster movieId={data.results.length && data.results[0].id} />
      </FullScreen>
      <div className="my-12 space-y-12 md:space-y-24 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-32">
        <BannerMediaList />
        <MediaLibraryList mediaLibraryList={data.results} />
        <GridMediaList />
      </div>
    </>
  );
}
