import Image from "next/image";
import React from "react";
import { team } from "../../data/team";
import Social from "../Others/Social";

const Team = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-[1296px] mx-auto pb-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] pt-[120px] text-center mx-3 mb-[120px] lg:mx-0">
            <h3 className="text-[32px] font-bold text-[#FF5349]">
              Team
            </h3>
            <h1 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] my-[30px]">
            Meet Our Expert <span className="text-[#FF5349]">Team</span> 
            </h1>
            <p className="text-lg  text-[#222]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-3 md:mx-0 flex-wrap md:flex-row gap-x-6 gap-y-28">
            {
                team.map((member) => (
                    <div className="md:w-[306px] shadow-xl cursor-pointer text-[#222] text-center px-14 bg-white rounded-lg" key={member.id}>
                        <div className="-mt-20">

                        <Image className="rounded-full" src={member.img} height={200} width={200} alt="team" />
                        </div>
                        <h2 className="text-2xl font-semibold mb-2 mt-4">{member.name}</h2>
                        <p className="text-lg mb-9">{member.title}</p>
                        <div className="mb-[60px]">

                        <Social class="text-[#3D3D3D]" size="35" />
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Team;
