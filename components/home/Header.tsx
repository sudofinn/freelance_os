import React from "react";
import { useState } from "react";
import Router from "next/router";

import {Link} from "react-scroll"


import PrimarySecond from "../../assets/freelance_os_premier_pic_3.png"
import PrimarySecondVersion from "../../assets/freelance_os_premier_pic_new_version_1.png"

import Image from "next/image";


{/*

<button
           id="badge-dismiss-default"
           className="px-10 py-3  select-none rounded-md text-white 
             hover:border-gray-500 border-2  border-white  bg-black
             hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 font-extrabold  mt-8 shadow-xl shadow-black
             
               "
         >
           Get Freelancer OS
         </button>
*/
}

const Header = () => {

  function toPricing() {
    Router.push
  }

  return (
    <div className=" min-h-screen      ">
      <div className="  ">
        <div className="text-center font-extrabold  ">
          <h1
            className=" text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl
             mx-8  md:mx-[150px] lg:mx-[300px]  2xl:mx-[500px]
            mb-4 mt-8 sm:mt-12  "
          >
            Work{" "}
            <span className="font-extrabold text-pk ">efficiently </span>{" "}
            and enjoy more{" "}
            <span className="font-extrabold text-bl"> free time</span> 
          </h1>
          <h1
            className="text-xl md:text-2xl mt-4 font-semibold
            mx-6 sm:mx-[75px] md:mx-[150px] lg:mx-[300px] mb-8 xl:mx-[500px] 2xl:mx-[600px]"
          >
            {" "}
            With a system that makes organizing fun , work effortless and free
            time plentiful.
          </h1>

<Link to="Pricing" smooth duration={1000}>


      <button   className="relative inline-block px-6  lg:px-10 py-2 lg:py-4 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2  border-black group-hover:bg-black"></span>
      <span className="relative text-xl lg:text-2xl text-black  font-extrabold group-hover:text-pk">Get Freelancer OS</span>
      </button>
</Link>

          <Image
            src={PrimarySecondVersion}
            alt="The Header"
            priority={true}
            className="mt-12   mx-auto mb-64 w-5/6 lg:w-2/3
            hover:scale-[1.01] duration-500   "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
