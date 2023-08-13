import React, { useEffect } from "react";
import herogirl from "../assets/herogirl.svg";
import underline from "../assets/underline.svg";
import arrow from "../assets/arrow.svg";
import { useState } from "react";

const HeroSection = () => {
  const words = ["Health", "Nutrition", "Fitness"];
  const [wordIndex, setWordIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((wordIndex + 1) % words.length);
      setKey((prevKey => prevKey + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <>
      <div className=" mt-12 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-8 md:py-16">
          <div className="md:w-[55%] text-left">
            <span className="group relative">
              <h1 className="text-4xl md:leading-[4rem] font-Inter font-[800] w-[full]  md:text-5xl mb-12">
                Promoting{" "}
                
                <span id="word" className="relative inline-block ">
                  <span key={key} id="animatedWord" className="animate-slideup inline-block">{words[wordIndex]}</span>
                  <img
                    className="absolute left-0 bottom-[-.7rem] z-[2]"
                    src={underline}
                    alt=""
                  />
                </span>
                {" "}In Marginalized Communities
              </h1>
            </span>
            <h2 className="text-2xl w-full md:text-[1.5rem] text-[#636161] font-semibold mb-16">
              At Prescription Fitness, we believe in the power of health and
              wellness as a catalyst for change. Our mission is to provide
              accessible fitness and health resources to marginalized
              communities.
            </h2>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
              <button className="text-[1.5rem] hover:shadow-cool active:shadow-cool2 border-2 border-[#7779A4]  transition-all duration-300 bg-[#7779A4] rounded-[.625rem]   w-[25%] flex items-center justify-center font-Bebas text-white">
                Get Involved
              </button>
              <button className="text-[1.5rem] hover:shadow-cool active:shadow-cool2 hover:bg-[#7779A4]  hover:text-white transition-all duration-300 rounded-[.625rem] text-[#7779A4] border-[#7779A4] border-2 h-[4rem] w-[25%] flex items-center justify-center font-Bebas">
                Events
              </button>
              <span className="translate-y-[-20%] scale-110 transition-all duration-300">
                <img className="" src={arrow} alt="" />
              </span>
            </div>
          </div>
          <div className="md:w-1/2 max-h-[40vh] animate-bounce duration-2 ease-in-out ">
            <img
              src={herogirl}
              draggable="false"
              alt="description_of_the_image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
