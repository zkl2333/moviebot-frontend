"use client";
import Image from "next/image";
import PrimarySrc from "../../tempImg/primary.jpg";
import "./style.css";
import { useEffect, useRef, useState } from "react";

const mediaList = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: "奥本海默",
  summary:
    "当我们为权力金钱焦虑、兴奋与愤怒时，却根本想象不到“他们”在谈论着怎样更重要的事情。 随着战争阴云笼罩世界上空，各国紧锣密鼓抓紧军事竞赛。为了抢占先机，美国陆军中将莱斯利·格罗夫斯（马特·达蒙 Matt Damon 饰）找到量子力学与核物理学领域的扛鼎人物罗伯特·奥本海默（基里安·墨菲 Cillian Murphy 饰），力荐其担任曼哈顿计划的首席科学家以及洛斯阿拉莫斯国家实验室的总负责人。经过两年争分夺秒的研发，硕大的蘑菇云终于在荒原的上空腾起，也宣告着绞肉机一般的二战即将落下帷幕。奥本海默有如将火种带到人间的普罗米修斯，可是对人性的参悟和对未来的担忧迫使他走向与政府相悖的道路。更可悲的是，凡人钟情的物欲也将一世天才裹挟至炼狱之中，永世燃烧……",
  primarySrc: PrimarySrc,
}));

const Index = () => {
  // 横向滚动
  const scrollRef = useRef<HTMLDivElement>(null);

  const [leftHasMore, setLeftHasMore] = useState(false);
  const [rightHasMore, setRightHasMore] = useState(true);

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", () => {
      const scrollLeft = scrollRef.current?.scrollLeft || 0;
      const scrollWidth = scrollRef.current?.scrollWidth || 0;
      const clientWidth = scrollRef.current?.clientWidth || 0;
      setLeftHasMore(scrollLeft > 0);
      setRightHasMore(scrollWidth - (scrollLeft + clientWidth) > 10);
    });
  }, []);

  return (
    <div className="mx-auto">
      <div className="mx-auto text-center max-w-4xl space-y-6 mb-6">
        <div className="text-5xl font-bold">通栏横向滚动布局</div>
        <div className="text-lg line-clamp-2 text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem doloremque nam quo
          necessitatibus officiis. Nihil esse sapiente optio iure quasi velit quisquam odio?
          Perferendis tenetur nam nihil vel excepturi tempora?
        </div>
      </div>
      {/* 横向滚动 */}
      <div className="relative group">
        {/* 翻页 */}
        {leftHasMore && (
          <div
            className="absolute left-0 top-0 h-full w-20 group-hover:bg-gradient-to-l from-transparent to-gray-950"
            onClick={() => {
              scrollRef.current?.scrollBy({
                left: -scrollRef.current.clientWidth,
                behavior: "smooth",
              });
            }}
          ></div>
        )}
        {rightHasMore && (
          <div
            className="absolute right-0 top-0 h-full w-20 group-hover:bg-gradient-to-r from-transparent to-gray-950"
            onClick={() => {
              scrollRef.current?.scrollBy({
                left: scrollRef.current.clientWidth,
                behavior: "smooth",
              });
            }}
          ></div>
        )}
        <div
          className="flex gap-3 md:gap-8 overflow-x-scroll h-full hide-scroll-bar"
          ref={scrollRef}
        >
          {mediaList.map((media) => (
            <div key={media.id} className="shadow-md space-y-2 w-24 md:w-36 lg:w-48 flex-shrink-0">
              <Image
                src={media.primarySrc}
                alt="Picture of the author"
                className="object-contain rounded-2xl"
              />
              <div className="text-md md:text-lg">{media.title}</div>
              <div className="text-xs md:text-sm text-gray-500 overflow-hidden line-clamp-2">
                {media.summary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
