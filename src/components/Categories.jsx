import React from "react";
import fitness from "../assets/fitness.svg";
import heart from "../assets/heart.svg";
import nutrition from "../assets/nutrition.svg";

const Categories = () => {

  

  return (
    <div>
      <div className="w-full min-h-[80vh] bg-[#5E5E5E]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center space-x-12 justify-between py-8 md:py-16">
            <h1 className="font-Bebas text-[#D2F198] text-[1.75rem] mb-4">
              Categories
            </h1>
            <h1 className="text-4xl text-white font-Inter font-[800] md:text-5xl mb-8">
              What We Offer To Empower Others
            </h1>
            <h2 className="text-2xl w-[50%] text-center md:text-[1.5rem] font-semibold mb-8 text-[#e4dede]">
              At Prescription Fitness, we believe in the power of health and
              wellness as a catalyst for change.
            </h2>
            <div className="flex relative pb-[10rem] flex-col mt-16 md:flex-row justify-center space-x-12 w-full">
              <div className="card1 z-[2] -[-2.85deg] bg-white -4 shadow- rounded-xl h-[50vh] scale-90 w-[25%] -black">
                <h1 className="bg-[#D3F199] flex justify-center items-center text-[1.75rem] py-4 font-Bebas -b-black -4 -x-0 -t-0 w-[full] rounded-t-xl">
                  Nutrition
                </h1>
                <div className=" h-[80%] flex items-center justify-center space-y-12 flex-col">
                  <img className="scale-125" src={nutrition} alt="" />
                  <ul className="font-Bebas text-[1.75rem]">
                    <li>➼ Meal Prep</li>
                    <li>➼ Food Assistance</li>
                    <li>➼ Nutrition Education</li>
                  </ul>
                </div>
              </div>
              <div className="card1 z-[2] -[0.5deg] bg-white -4 shadow- rounded-xl h-[50vh] scale-90 w-[25%] -black">
                <h1 className="bg-[#FFBCE4] flex justify-center items-center text-[1.75rem] py-4 font-Bebas -b-black -4 -x-0 -t-0 w-[full] rounded-t-xl">
                  Health
                </h1>
                <div className=" h-[80%] flex items-center justify-center space-y-12 flex-col">
                  <img className="scale-125" src={heart} alt="" />
                  <ul className="font-Bebas text-[1.75rem]">
                    <li>➼ Yoga</li>
                    <li>➼ Meditation</li>
                    <li>➼ Mindfulness</li>
                  </ul>
                </div>
              </div>
              <div className="card1 z-[2] -[3.18deg] bg-white -4 shadow- rounded-xl h-[50vh] scale-90 w-[25%] -black">
                <h1 className="bg-[#E9DBFF] flex justify-center items-center text-[1.75rem] py-4 font-Bebas -b-black border-4 border-x-0 border-t-0 w-[full] rounded-t-xl">
                  Fitness
                </h1>
                <div className=" h-[80%] flex items-center justify-center space-y-12 flex-col">
                  <img className="scale-125" src={fitness} alt="" />
                  <ul className=" font-Bebas text-[1.75rem]">
                    <li>➼ Pilates</li>
                    <li>➼ Tai Chi</li>
                    <li>➼ Chi Gong</li>
                    <li>➼ Motivation</li>
                  </ul>
                </div>
              </div>
              <span
                className="max-w-[30rem] max-h-[30rem] h-full w-full aspect-square rounded-full animation-delay-2s bg-[#D3F199] blur-[50px] opacity-50 absolute
                     animate-blob left-40 bottom-20 z-[1]"
              ></span>
              <span
                className="max-w-[30rem] max-h-[30rem] h-full w-full aspect-square rounded-full animation-delay-4s bg-[#FFBCE4] blur-[50px] opacity-50 absolute 
                       animate-blob2 z-[1]"
              ></span>
              <span
                className="max-w-[30rem] max-h-[30rem] h-full w-full aspect-square rounded-full bg-[#E9DBFF] blur-[50px] opacity-50 absolute
                       right-40 animate-blob3 z-[1]"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
