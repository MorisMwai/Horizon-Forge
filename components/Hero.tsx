import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Boxes } from "./ui/background-boxes";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Add Aceternity Spotlight component */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        {/* <Spotlight className="top-28 left-1/2 transform -translate-x-1/2 h-[80vh] w-[50vw]" fill="white" /> */}
        {/* <Spotlight className="top-28 right-0 h-[80vh] w-[50vw]" fill="green" /> */}

      </div>

      {/* Add Aceternity Grid and Dot Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> 
      </div>

      {/* Background Boxes */}
      {/* <div className="h-screen absolute w-full overflow-hidden dark:bg-black-100 bg-white flex items-center justify-center rounded-lg top-0 left-0">
        <div className="absolute inset-0 w-full h-screen dark:bg-black-100 bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none flex items-center justify-center" />

        <Boxes />
      </div> */}

      {/* Heading wrapper */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Automating the Future of Business
          </h2>

          {/* Add Text Generate Effect component */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Crafting Intelligent and Scalable Automation Solutions"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Moris, an RPA Developer based in Kenya.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
