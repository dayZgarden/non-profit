import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import question from "../assets/question.svg";
import home from "../assets/home.svg";
import arrow2 from "../assets/arrow2.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import google from "../assets/google.svg";
import hero from "../assets/hero.svg";
import mini from "../assets/mini.svg";

const Landing = () => {
  const navigate = useNavigate();
  const words = ["Health", "Nutrition", "Fitness"];
  const [wordIndex, setWordIndex] = useState(0);
  const [key, setKey] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((wordIndex + 1) % words.length);
      setKey((prevKey => prevKey + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [wordIndex]);
  

  const [click, setClick] = useState(1);


  useEffect(() => {
    console.log(click)
  }
  , [click])


  return (
    <>
      <div className="w-full overflow-x-hidden min-h-[100vh] md:overflow-y-hidden z-[0] relative font-Playfair bg-[#F3E3D1] text-white">
        <div className="absolute hidden md:inline bottom-0 left-[50%] translate-x-[-50%] bg-[#F3E3D1] w-[50vw] h-[5%] z-[1000]"></div>
        <img
          className="absolute  h-[20%] md:h-[50%] lg:h-[80%] animate-appear transition-all duration-300 bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] md:translate-y-[0] md:-bottom-6 z-[6] md:left-[50%] md:translate-x-[-50%]"
          src={hero}
          alt=""
          draggable={false}
        />

        <div className="flex md:flex-row flex-col min-h-[100vh] md:px-16 md:py-12 ">
          <div className="w-[100vw] md:w-[50%] h-[100vh] md:h-auto animate-slideleft transition-all duration-75 bg-[#52694e] md:rounded-l-[1rem] z-[2] relative ">
            <nav className="px-8 md:px-16 flex relative justify-between items-center h-[10vh] md:w-[90vw]">
              <span className="bottom-1 hidden md:inline border-b-2 w-[95%] absolute rounded-lg"></span>
              <div className="hidden md:inline right-6 -bottom-8 absolute">
                Starting now is better that starting tomorrow
              </div>
              <div className="hidden md:flex left text-[1rem] justify-between w-[30%]">
                <a className="" href="/">
                  <img draggable={false} src={home} alt="" />
                </a>
                <div className="group relative">
                  <a href="">Contact</a>
                  <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] ease bottom-1 w-full border-b-2  height-[10px] z-50"></span>
                </div>
                <div className="group relative">
                  <a href="">About Us</a>
                  <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] ease bottom-1 w-full border-b-2  height-[10px] z-50"></span>
                </div>
                <div className="group relative">
                  <a href="">Our Team</a>
                  <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] ease bottom-1 w-full border-b-2  height-[10px] z-50"></span>
                </div>
              </div>
              <div className="uppercase cursor-pointer md:w-full flex-1 md:text-center font-medium md:text-[1.5rem]">
                PrescriptionFitness
              </div>
              <div className="right text-[1rem] hidden md:flex justify-between w-[30%]">
                <div className="group relative">
                  <a href="">Events</a>
                  <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] -bottom-1 w-full border-b-2  height-[10px] z-50"></span>
                </div>
                <div className="group relative">
                  <a href="">Our Work</a>
                  <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] -bottom-1 w-full border-b-2  height-[10px] z-50"></span>
                </div>
                <div className="group">
                  <a className="flex" href="">
                    Learn More{" "}
                    <img
                      className="ml-4 group-hover:scale-x-[170%] transition-all duration-300"
                      src={arrow2}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </nav>
            <div className="flex items-center h-[full]">
              <div className="flex flex-col p-8 md:p-16 ">
                <h1 className=" text-[1.75rem] md:text-[3rem] w-[90%] md:w-[69%] leading-[112%]">
                  Promoting <span id="word" className="relative inline-block "><span key={key} id="animatedWord" className="animate-slideup inline-block font-bold text-[#E5D5FF]">{words[wordIndex]}</span></span> in our Marginalized Communities
                </h1>
                <p className="md:w-[55%] w-[90%] text-[.875rem] mt-4">
                  We believe in the <span className="font-bold"> power of health and wellness</span> as a catalyst
                  for change. Our mission is to provide accessible <span className="font-bold">fitness</span> and {" "}
                  <span className="font-bold">health</span> resources to marginalized communities.
                </p>
                <div className="md:w-[22%] w-[50%] relative mt-12 transition-all duration-300 md:hover:w-[27%] group">
                  <button className="w-[100%]   relative z-10 rounded-[4px] font-bold py-4 bg-[#E5D5FF] text-[#444246] uppercase px-2">
                    Get Involved
                  </button>
                  <div className="absolute group-active:bg-white transition-all duration-300 z-0 border-2 py-4 border-white rounded-[4px] w-[100%] -right-[.45rem] -bottom-[.45rem] uppercase text-transparent">
                    {" "}
                    Get involved
                  </div>
                </div>
                <div className="flex w-[90%] md:w-[40%] absolute bottom-[2.5rem] left-[2.5rem]">
                  <img draggable={false} src={question} alt="" />
                  <div className="flex-col ml-4">
                    <p className="text-[.875rem] font-semibold">
                      Find out if RX Fitness is for you
                    </p>
                    <p className="text-[.875rem]">
                      It's never too late to start
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] md:w-[50%] h-[100vh] overflow-y-hidden md:h-auto bg-[#a38262] animate-slideright transition-all duration75 relative z-[1] md:rounded-r-[1rem]">
            <div className="w-[15rem] h-[19.3rem] rounded-l-[4px] bg-[#fffaef] absolute right-0 top-[50%] translate-y-[-45%]">
              <div className="flex absolute space-x-2 items-end left-0 -top-16">
                <button onClick={() => setClick(Math.abs(Math.min(1,(click - 1) % 6)))} className="border-2 hover:bg-[white] transition-all duration-300 text-[#444246] cursor-pointer py-1 px-3 rounded-full ">{`<`}</button>
                <button onClick={() => setClick((click + 1) % 6)} className="bg-[#E5D5FF] hover:bg-white transition-all duration-300 hover:border-white py-1 px-3 border-2 border-[#E5D5FF] rounded-full max-h-[10%] text-[#444246]">{`>`}</button>
                <h1 className="flex leading-none  items-end">
                  <span className="text-[3rem] ml-4">0{click}</span>
                  <span className="text-[1.125rem]">/05</span>
                </h1>
              </div>
              <img
                draggable={false}
                className="w-[100%] hover:object-cover animate-blob transition-all duration-300"
                src={mini}
                alt=""
              />
              <div className="flex-col mt-2">
                <p className="text-[.875rem] font-semibold">
                  Everyone deserves to be healthy
                </p>
                <p className="text-[.875rem]">01/23/2023</p>
              </div>
            </div>

            <div className="flex w-[90%] md:w-[40%] absolute bottom-[2.5rem] right-1/2 translate-x-[50%] md:translate-x-[0%] md:right-[0rem]">
              <div className="flex items-center space-x-6 mr-4">
                <p className="text-[.875rem] hidden md:inline">Share what we are doing</p>
                <img
                  className="cursor-pointer hover:scale-110 transition-all duration-300"
                  src={facebook}
                  alt=""
                />
                <img
                  className="cursor-pointer hover:scale-110 transition-all duration-300"
                  src={instagram}
                  alt=""
                />
                <img
                  className="cursor-pointer hover:scale-110 transition-all duration-300"
                  src={google}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img className="max-w-[30vw] " src={footer} alt="" /> */}
      {/* <footer className="w-full  min-h-[80vh] bg-gradient-to-r mt-8 from-[#FFF8E3] via-[#FFF8E3] to-[#F1F9D9]">
        <div className="">
          <div className="container z-2 bg-transparent mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center space-x-12 justify-between py-8 md:py-16"></div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Landing;
