// Add infinite moving cards component

"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import MagicButton from "./MagicButton";
import { FaEye, FaLink } from "react-icons/fa6";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    descr: string;
    name: string;
    title: string;
    link: string;
    logo: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-xl border border-neutral-800/70 flex-shrink-0 p-6 md:p-12 md:w-[60vw] bg-gradient-to-br from-[#0e0e2e] to-[#12152f] shadow-[0_0_30px_rgba(128,0,255,0.15)]"
            // style={{
            //   backgroundImage: `url(${item.logo})`,
            //   backgroundBlendMode: "overlay",
            //   background: "rgb(4,7,29)",
            //   backgroundColor:
            //      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // }}
            key={idx}
          >
            {/* Background logo, now a child element for better control */}
            <div
              className="absolute inset-0 z-0 bg-center bg-no-repeat bg-contain bg-gradient-to-b opacity-50 from-[#0a0a23] via-transparent to-[#0a0a23]"
              style={{
                backgroundImage: `url(${item.logo})`,
                backgroundBlendMode: "overlay",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
              }}
            />
            <blockquote className="backdrop-blur-sm saturate-180 bg-opacity-90 shadow-md p-8">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-2xl leading-[1.6] text-white font-bold drop-shadow">
                {item.name}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                    <span className="mt-2 text-xl leading-[1.6] text-neutral-300 font-normal drop-shadow">
                      {item.descr}
                    </span>
                    <span className="text-lg leading-[1.6] text-purple font-medium drop-shadow mt-1">
                      {item.title}
                    </span>
                  </div>
                  {/* Add button*/}
                  <div className="me-3">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <MagicButton
                        title="Show Credential"
                        icon={<FaLink />}
                        position="right"
                      />
                    </a>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
