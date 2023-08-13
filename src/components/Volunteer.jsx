import React from "react";
import volunteer from "../assets/volunteer.svg";

const Volunteer = () => {
  return (
    <>
      <div className="w-full  min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center  py-8 md:py-16">
            <div className="md:w-[50%] text-left ">
              <h1 className="font-Bebas text-[#6b6eab] text-[1.75rem] mb-4">
                Volunteer
              </h1>
              <h1 className="text-3xl md:leading-[105%] font-Inter font-[800] w-[80%]  md:text-[2.75rem] mb-8">
                We Are Helping People In Need Around Us
              </h1>
              <h2 className="text-[1rem] md:text-[1.25rem] text-[#636161] w-[80%] font-semibold mb-12">
                At Prescription Fitness, we believe in the power of health and
                wellness as a catalyst for change. Our mission is to provide
                accessible fitness and health resources to marginalized
                communities.
              </h2>
              <button className="text-[1.5rem] h-[4rem] hover:shadow-cool active:shadow-cool2 border-2 border-[#7779A4]  transition-all duration-300 bg-[#7779A4] rounded-[.625rem]   w-[25%] flex items-center justify-center font-Bebas text-white">
                Volunteer Now
              </button>
            </div>
            <div className="md:w-[40%] ">
              <img
                src={volunteer}
                draggable="false"
                alt="description_of_the_image"
                className="translate-y-[10%] w-full h-auto scale-[.85]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
