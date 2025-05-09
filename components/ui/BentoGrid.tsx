// Add Bento Grid component
'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { GlareCard } from "./glare-card";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Create a state
  const [copied, setCopied] = useState(false);

  // Function to manage the copying of the email
  const handleCopy = () => {
    navigator.clipboard.writeText('mwaimoris@gmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        //   add linear gradient
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      {/* Template string. If id = 6 then apply styles */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Inner div styling. If an image exists then render img tag -> proper and easy  deployment later on */}
        <div className="w-full h-full absolute">
          {/* If an image exists */}
          {img && (
            <img
              src={img}
              alt={img}
              // class names we're passing from props
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )}
        </div>

        {/* Secondary image */}
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"

            />
          )}
        </div>

        {/* Only if on the item 6 */}
        {id === 6 && (
          // add background animation
          <BackgroundGradientAnimation>
            
          </BackgroundGradientAnimation>

          // <GlareCard>

          // </GlareCard>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {/* Dynamic content if id is 2 - Github Globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack list div id is 4 */}
          {id === 4 && (
            // render a div which will act as the container
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* render the tech stack list */}
              <div className="flex flex-col gap-3 lg:gap-5">
                {/* render left list first */}
                {[
                  "Power Automate",
                  "UiPath",
                  "C#",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {[
                  "TypeScript",
                  ".NET",
                  "Angular",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic content if id is 6 */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>

                {/* Render a lottie animation */}
                <Lottie options={{
                  // Object of loop only when copied so we need to have access to the state of copied
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} />
              </div>

              {/* Button to trigger animation */}
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
