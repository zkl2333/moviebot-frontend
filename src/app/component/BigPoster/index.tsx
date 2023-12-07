import React from "react";
import Image from "next/image";
import BackdropSrc from "../../tempImg/backdrop.jpg";
import LogoSrc from "../../tempImg/logo.png";

const Index = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Image src={BackdropSrc} alt="Picture of the author" className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent">
        <div className="absolute mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-24 2xl:mx-32 left-0 right-0 bottom-0 py-10 md:py-40">
          <Image
            src={LogoSrc}
            alt="Picture of the author"
            className="object-contain w-1/3 h-1/3 min-w-[200px]"
          />
          <div className="text-white text-lg mt-4 md:mt-10 line-clamp-3 md:line-clamp-none">
            当我们为权力金钱焦虑、兴奋与愤怒时，却根本想象不到“他们”在谈论着怎样更重要的事情。
            随着战争阴云笼罩世界上空，各国紧锣密鼓抓紧军事竞赛。为了抢占先机，美国陆军中将莱斯利·格罗夫斯（马特·达蒙
            Matt Damon 饰）找到量子力学与核物理学领域的扛鼎人物罗伯特·奥本海默（基里安·墨菲 Cillian
            Murphy
            饰），力荐其担任曼哈顿计划的首席科学家以及洛斯阿拉莫斯国家实验室的总负责人。经过两年争分夺秒的研发，硕大的蘑菇云终于在荒原的上空腾起，也宣告着绞肉机一般的二战即将落下帷幕。奥本海默有如将火种带到人间的普罗米修斯，可是对人性的参悟和对未来的担忧迫使他走向与政府相悖的道路。更可悲的是，凡人钟情的物欲也将一世天才裹挟至炼狱之中，永世燃烧……
          </div>
          <div className="text-gray-400 text-lg mt-2 md:mt-8">导演：克里斯托弗·诺兰</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
