import Image from "next/image";
import PrimarySrc from "../../tempImg/primary.jpg";

const mediaList = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: "奥本海默",
  summary:
    "当我们为权力金钱焦虑、兴奋与愤怒时，却根本想象不到“他们”在谈论着怎样更重要的事情。 随着战争阴云笼罩世界上空，各国紧锣密鼓抓紧军事竞赛。为了抢占先机，美国陆军中将莱斯利·格罗夫斯（马特·达蒙 Matt Damon 饰）找到量子力学与核物理学领域的扛鼎人物罗伯特·奥本海默（基里安·墨菲 Cillian Murphy 饰），力荐其担任曼哈顿计划的首席科学家以及洛斯阿拉莫斯国家实验室的总负责人。经过两年争分夺秒的研发，硕大的蘑菇云终于在荒原的上空腾起，也宣告着绞肉机一般的二战即将落下帷幕。奥本海默有如将火种带到人间的普罗米修斯，可是对人性的参悟和对未来的担忧迫使他走向与政府相悖的道路。更可悲的是，凡人钟情的物欲也将一世天才裹挟至炼狱之中，永世燃烧……",
  primarySrc: PrimarySrc,
}));

const Index = () => {
  return (
    <div className="mx-auto">
      <div className="text-2xl font-bold mb-6">网格布局</div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-8">
        {mediaList.map((media) => (
          <div key={media.id} className="shadow-md space-y-2">
            <Image
              src={media.primarySrc}
              alt="Picture of the author"
              className="object-cover rounded-2xl"
            />
            <div className="text-md md:text-lg">{media.title}</div>
            <div className="text-xs md:text-sm text-gray-500 overflow-hidden line-clamp-2">
              {media.summary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
