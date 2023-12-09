"use client";
import classNames from "classnames";
import React, { useEffect } from "react";

const FullScreen: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = (props) => {
  const [screenHeight, setScreenHeight] = React.useState(0);

  useEffect(() => {
    if (window) {
      // Fuck WeChat
      const isWeChat = /MicroMessenger/i.test(window.navigator.userAgent);
      if (isWeChat) {
        setScreenHeight(window.innerHeight);
      }
    }
  }, []);

  return (
    <div
      className={classNames("relative w-full h-full", props?.className)}
      style={{
        height: screenHeight || "100vh",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default FullScreen;
