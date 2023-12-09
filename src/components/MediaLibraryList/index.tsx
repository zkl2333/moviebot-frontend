import Image from "next/image";

const Index = ({ mediaLibraryList }) => {
  const _mediaLibraryList = mediaLibraryList.slice(1, 5);
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
        {_mediaLibraryList.map((item) => {
          return (
            <div
              key={item.id}
              className="relative rounded-2xl overflow-hidden hover:outline outline-gray-700 outline-offset-4 outline-4 transition-all"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                width={500}
                height={750}
                className="rounded-2xl"
                alt={item.title}
              />
              <div
                className="absolute inset-0 space-y-1 md:space-y-2 p-3 md:p-4 flex flex-col justify-center items-center
                    bg-gradient-to-t from-10% from-black/50 via-transparent to-90% to-black/50 
                    hover:from-black/80 hover:via-black/30 hover:to-black/80 hover:outline-white"
              >
                <div
                  className="text-lg md:text-xl font-bold text-white"
                  style={{
                    textShadow: "0 0 4px rgba(0,0,0,1)",
                  }}
                >
                  {item.title}
                </div>
                <div
                  className="text-sm md:text-md font-bold text-white"
                  style={{
                    textShadow: "0 0 4px rgba(0,0,0,1)",
                  }}
                >
                  {item.original_title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
