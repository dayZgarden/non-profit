import React from "react";
import logo from "../assets/logo.svg";
import herogirl from "../assets/herogirl.svg";
import lottie from "lottie-web";
import help from "../assets/help.json";
import { useRef, useEffect } from "react";

const AboutUs = () => {

  const helpRef = useRef(null);


  useEffect(() => {
    lottie.loadAnimation({
      container: helpRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: help,
    });
  }, []);

  

  return (
    <>
      <div id="AboutUs" className="w-full min-h-[80vh] scroll-smooth">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center space-x-12 justify-between py-8 md:py-16">
            <div className="md:w-[50%] text-left font-Inter">
              <h1 className="font-Bebas text-[#1C9EA6] text-[1.75rem]  mb-4">
                About Us
              </h1>
              <h1 className="text-3xl font-[800] md:leading-[105%] md:text-[2.75rem] w-[80%] mb-8">
                We Are Helping People In Need Around Us
              </h1>
              <h2 className="text-[1rem] md:text-[1.25rem] text-[#636161] w-[80%] font-semibold mb-12">
                At Prescription Fitness, we believe in the power of health and
                wellness as a catalyst for change. Our mission is to provide
                accessible fitness and health resources to marginalized
                communities.
              </h2>
              <div className="space-y-4 text-[1.15rem] ">
                <div className="flex items-center space-x-4">
                  <li className="rounded-[999px] bg-[#6B6EAB] w-[1.5rem] h-[1.5rem]"></li>
                  <p>10,000+ People helped through our program.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <li className="rounded-[999px] bg-[#221E55]  w-[1.5rem] h-[1.5rem]"></li>
                  <p>50+ volunteers helping out across Ohio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
