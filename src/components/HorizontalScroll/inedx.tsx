"use client";
import React, { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import "./style.css";

const HorizontalScroll: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [leftHasMore, setLeftHasMore] = useState(false);
  const [rightHasMore, setRightHasMore] = useState(true);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current?.scrollLeft || 0;
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const clientWidth = scrollRef.current?.clientWidth || 0;

    setLeftHasMore(scrollLeft > 0);
    setRightHasMore(scrollWidth - (scrollLeft + clientWidth) > 0);
  };

  useEffect(() => {
    handleScroll(); // 初始化检查
    scrollRef.current?.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative group`}>
      {leftHasMore && (
        <button
          className="absolute z-10 left-0 top-0 h-full w-20 group-hover:opacity-100 opacity-10 bg-gradient-to-l from-transparent from-10% to-gray-950 flex justify-start items-center text-3xl transition-all"
          onClick={() =>
            scrollRef.current?.scrollBy({
              left: -scrollRef.current.clientWidth,
              behavior: "smooth",
            })
          }
        >
          <Icon icon="mingcute:left-fill" />
        </button>
      )}
      {rightHasMore && (
        <button
          className="absolute z-10 right-0 top-0 h-full w-20 group-hover:opacity-100 opacity-10 bg-gradient-to-r from-transparent to-90% to-gray-950 flex justify-end items-center text-3xl transition-all"
          onClick={() =>
            scrollRef.current?.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" })
          }
        >
          <Icon icon="mingcute:right-fill" />
        </button>
      )}
      <div ref={scrollRef} className="flex gap-3 overflow-x-scroll hide-scroll-bar">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
