import Image from "next/image";
import React from "react";
import { workflow } from "../../../data/workflow";

const Workflow = () => {
  return (
    <div className="bg-[url('/images/workflow/bg.png')] bg-white">
      <div className="max-w-[1296px] mx-auto pt-[60px] md:pt-[110px] pb-[70px] md:pb-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] text-center">
            <h3 className="text-2xl font-semibold text-[#FF5349]">Workflow</h3>
            <h2 className="text-5xl md:text-[57px] font-bold leading-tight text-[#222] mb-2 md:mb-[24px] mt-[10px]">
              Our Working <span className="text-[#FF5349]">Process</span>
            </h2>
            <p className="text-lg mb-10 md:mb-[57px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-2 lg:mx-0 md:flex-row items-center justify-center flex-wrap gap-6">
          {workflow.map(({ id, title, img }) => (
            <div
              key={id}
              className="hover:bg-white hover:shadow-lg cursor-pointer items-center w-[306px] p-6 md:py-14 flex flex-col md:px-20 rounded-md"
            >
              <Image src={img} width={135} height={135} alt="workflow icon" />
              <h5 className="text-2xl font-semibold text-[#222] mt-7">
                {title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
