import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/Group 12 (1).png";

const HeroSection = () => {
  return (
    <div className="hero lg:max-w-[1320px]  lg:mx-auto lg:px-5 lg:py-20 lg:flex md:flex sm:block block lg:justify-center lg:items-center md:justify-center md:items-center md:px-5 md:py-20 ">
      <div className="left lg:text-start md:text-start sm:text-center text-center lg:w-1/2 md:1/2 sm:w-full w-full ">
        <h2 className="lg:text-start md:text-start sm:text-center text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl lg:font-bold md:font-bold sm:font-bold font-bold lg:pt-0 md:pt-0 sm:pt-10 pt-10 text-[#1C2B35]">
          New Collection For Fall
        </h2>
        <p className="text-[#2A414F] lg:pt-3 md:pt-3 sm:pt-3 pt-3 text-base">
          Discover all the new arrivals of ready-to-wear collection.
        </p>
        <Link to={"/products"}>
          <button className="bg-[#1C2B35] text-white px-5 py-2  lg:mt-16 md:mt-16 sm:mt-10 mt-10 lg:mb-0 md:mb-0 sm:mb-10 mb-10 rounded-md">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="right lg:w-1/2 md:1/2 sm:w-full w-full">
        <div className="Img lg:pl-20 md:pl-20 flex lg:justify-start md:justify-start sm:justify-center justify-center">
          <picture>
            <img src={img} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
