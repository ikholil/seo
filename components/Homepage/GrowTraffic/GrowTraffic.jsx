import CountUp from "react-countup";
import React, { useState } from "react";
import { bannerStates } from "../../../data/bannerstate";
import Image from "next/image";
import { features } from "../../../data/featurs";

const GrowTraffic = () => {

  return (

    <div className=" -z-10 bg-white relative">
      <div className="z-20   md:-translate-y-1/2  max-w-[1077px] mx-auto">
        <div className="flex gap-5 mx-2 xl:mx-0 md:gap-0 flex-col md:flex-row flex-wrap  bg-white justify-around my-5 md:my-0 rounded-none md:rounded-lg shadow-lg pt-[26px] pb-10 z-10 ">
          {bannerStates.map((item, index) => (
            <div className="flex flex-col items-center" key={item.title}>
              <h2 className="text-[#FF5349]  font-semibold text-[43px]">
                <CountUp end={item.number} />
                {index == 0 && <span className="text-[#FF5349]">+</span>}
              </h2>
              <p className="text-2xl text-[#222] ">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    
      <div className="max-w-[1296px] mx-3 lg:mx-auto flex flex-col md:flex-row mt-[30px] pb-[60px]">
        <div className="max-w-[640px]">
          <h3 className="text-[32px] font-bold text-[#FF5349]">
            Organic Traffic
          </h3>
          <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mt-3 mb-2">
            Grow Your Organic <span className="text-[#FF5349]">Website </span>
            Traffic{" "}
          </h2>
          <p className="text-lg text-[#222]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
            mattis dui eget vestibulum id et. It’s about ranking
          </p>
        </div>
        <div className="flex md:justify-end md:items-end w-full mt-5 md:mt-0">
          <button className="text-white text-lg px-8 shadow-lg shadow-[#ff524987] py-3 rounded-lg bg-gradient-to-r from-[#FF9300] to-[#FF5349]">
            Browse More
          </button>
        </div>
      </div>
      <div  className="max-w-[1296px] mx-3 flex flex-col md:flex-row flex-wrap gap-6 justify-center lg:mx-auto pb-[120px]">
            {
                features.map((feature) => (
                    <div className={`md:w-[414px] text-[#222] pt-[30px] px-[30px] pb-[26px] cursor-pointer shadow-lg feature-box -z-20 relative rounded-lg ${feature.id == 1 && 'bg-[#FFEEED]'} ${feature.id == 2 && 'bg-[#E9EEF9]'} ${feature.id == 3 && 'bg-[#FFF5E6]'} `} key={feature.id}>
                        <Image src={feature.icon} height={88} width={88} alt="icon" />
                        <h4 className="text-[#222] font-bold text-[32px] mt-[14px] mb-[10px]">{feature.title}</h4>
                        <p className="text-[#222] text-lg">{feature.desc}</p>
                        <div className="absolute -bottom-2 right-0 -z-10">
                            <Image src={feature.bg} height={110} width={140} alt="bg icon"/>
                        </div>
                    </div>
                ))
            }
      </div>
      <div className="absolute top-44 right-0">
        <Image
          src="/images/grow/circle.png"
          height={306}
          width={150}
          alt="banner shape"
        />
      </div>
    </div>
  );
};

export default GrowTraffic;
