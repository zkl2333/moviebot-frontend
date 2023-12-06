import BigPoster from "../component/BigPoster";
import GridMediaList from "../component/GridMediaList";
import BannerMediaList from "../component/BannerMediaList";

export default function Home() {
  return (
    <div className="">
      <BigPoster />
      <div className="my-12 space-y-12 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-32">
        <BannerMediaList />
        <GridMediaList />
      </div>
    </div>
  );
}
