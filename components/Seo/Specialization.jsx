import React from "react";
import { specialization } from "../../data/specilization";

const Specialization = () => {
  return (
    <div className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto py-20 md:pt-[125px] md:pb-[120px]">
        <div className="flex justify-center">
          <div className="text-center max-w">
            <h2 className="font-bold text-3xl md:text-[57px] text-[#222] mb-[40px]">
              Areas of Specialization
            </h2>
            <p className="max-w-[590px] text-lg text-[#222] mb-10 md:mb-[53px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              in commodo a mi sed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {specialization.map(({ id, title, desc, icon }) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 hover:bg-[#FF5349] cursor-pointer hover:text-white  lg:col-span-3 text-[#222] bg-white transition-colors duration-300 rounded-[10px] shadow-[0px_4px_23px_rgba(184,184,184,0.25)] hover:shadow-[0px_7px_23px_rgba(255,83,73,0.35)] p-4 md:p-[30px] specialization"
              key={id}
            >
              <span
                className={`text-white hover:text-[#FF5349] flex justify-center items-center p-5 w-16 md:w-24 h-16 md:h-24 rounded-full  text-3xl ${
                  id == 3 && "bg-[#FF9300]"
                } ${id == 4 && "bg-[#1A4DBE]"} ${id == 1 && "bg-[#FF5349] "} ${
                  id == 2 && "bg-[#FF5349] "
                } icon-span`}
              >
                {icon}
              </span>
              <h3 className="text-2xl font-semibold mt-6 mb-2">{title}</h3>
              <p className="text-base md:text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialization;
