import React from "react";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="container mx-auto px-4  sm:px-6 lg:px-8">
          <div className="font-Bebas  flex items-center justify-between py-4">
            <div
              onClick={() => navigate("/")}
              className="group cursor-pointer relative"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">Prescription Fitness</h1>
              <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] bottom-1 w-full border-b-2 border-black height-[10px] z-50"></span>
            </div>
            <div className="flex w-full sm:w-1/2 lg:w-[35%] justify-between">
              <li className="text-[1.5rem] py-2 group relative">
                <a className="" href="/">
                  Home
                </a>
                <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] bottom-1 w-full border-b-2 border-black height-[10px] z-50"></span>
              </li>
              <li className="text-[1.5rem] group relative py-2">
                <a className="" href="/home">
                  Contact
                </a>
                <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] bottom-1 w-full border-b-2 border-black height-[10px] z-50"></span>
              </li>
              <li className="text-[1.5rem] group relative py-2 scroll-smooth">
                <a className="scroll-smooth" href="#AboutUs">
                  About Us
                </a>
                <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] bottom-1 w-full border-b-2 border-black height-[10px] z-50"></span>
              </li>
              <li className="text-[1.5rem] group relative py-2">
                <a className="" href="/home">
                  Our Team
                </a>
                <span className="absolute opacity-0 group-hover:opacity-100 -left-6 group-hover:left-0 transition-all duration-[300ms] bottom-1 w-full border-b-2 border-black height-[10px] z-50"></span>
              </li>
              <li className="">
                <button className="text-[1.5rem]  hover:shadow-cool active:shadow-cool2 transition-all duration-300 bg-[#7779A4] rounded-[.625rem] px-4 py-2 flex items-center justify-center text-white">
                  Get Involved
                </button>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
