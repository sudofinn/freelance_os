import React from "react";
import Head from "next/head";
import Image from "next/image";
import CTAPic from "../assets/secondcalltoaction_cropped.png" 

import Link from "next/link";

import SecondCallToActionEx from "@/components/home/SecondCallToActionforEx";
import Footer from "@/components/home/Footer";
import { FaMoon, FaSun } from "react-icons/fa";


const Custom404 = () => {
  return (
    <div className="w-full min-h-screen font-extrabold text-white bg-black    ">
      <Head>
        <title>404</title>
        <meta name="description" content="404 page for the Freelance OS" />
      </Head>

      <div className="p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8  ">
          <p
            data-aos="fade-up"
            className="text-5xl lg:text-6xl font-extrabold text-center  mb-4 mt-16 "
          >
           This page does not seem to exist.
          </p>
         
        </div>



      </div>

        
        <SecondCallToActionEx />
     
      <Footer />
    </div>
  );
};

export default Custom404
