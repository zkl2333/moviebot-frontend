import Image from "next/image";
import PrimarySrc from "../../tempImg/primary.jpg";

const mediaLibraryList = [
  {
    name: "电影",
    description: "热门 & 经典",
    bg: PrimarySrc,
  },
  {
    name: "剧集",
    description: "过去 & 当前季",
    bg: PrimarySrc,
  },
  {
    name: "动漫",
    description: "热血 & 治愈",
    bg: PrimarySrc,
  },
  ,
  {
    name: "动漫电影",
    description: "宫崎骏 & 新海诚",
    bg: PrimarySrc,
  },
];

const Index = () => {
  return (
    <div className="mx-auto text-center">
      <div className="mx-auto space-y-2 md:space-y-6 mb-6 max-w-4xl">
        <div className="text-xs font-bold text-green-400">INCLUDED IN ALL PLANS</div>
        <div className="text-2xl md:text-5xl font-bold">All The TV You Love</div>
        <div className="text-xs md:text-lg text-gray-500">
          Watch full seasons of exclusive streaming series, current-season episodes, hit movies,
          Hulu Originals, kids shows, and more.
        </div>
      </div>
      <div className="mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 max-w-7xl">
        {mediaLibraryList.map((item, index) => {
          return (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden hover:outline outline-gray-700 outline-offset-4 outline-4 transition-all"
            >
              <Image src={item.bg} alt="Picture of the author" />
              <div
                className="absolute inset-0 space-y-1 md:space-y-2 text-start p-3 md:p-4
                    bg-gradient-to-t from-10% from-black/50 via-transparent to-90% to-black/50 
                    hover:from-black/80 hover:via-black/30 hover:to-black/80 hover:outline-white"
              >
                <div className="text-sm md:text-xl font-semibold text-white">
                  {item.description}
                </div>
                <div className="text-xl md:text-3xl font-bold text-white">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
