import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolio } from "../../data/portfolio";
import {VscEye} from 'react-icons/vsc'
const Portfolio = () => {
  return (
    <div className="max-w-[1296px] mx-auto">
      <div className="text-center w-full flex justify-center">
        <div className="max-w-4xl flex flex-col justify-center">
          <h5 className="text-[#FF5349] text-2xl font-semibold mt-[115px]">
            Portfolio
          </h5>
          <h2 className="text-center leading-tight text-4xl pt-[10px] md:text-[57px] font-bold mb-2">
            Showcase Our <span className="text-[#FF5349]">Works</span>
          </h2>
          <p className="text-[#444] text-lg md:px-40  text-center mb-8 md:mb-[120px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra at
            eu tortor eget nam scelerisque ut tincidunt.
          </p>
        </div>
      </div>
      <div className="flex gap-y-8 mx-3 md:mx-0 gap-x-4 flex-col md:flex-row mb-10 md:mb-[240px] flex-wrap">
        {portfolio.map(({ id, img, url }) => (
          <div className="md:w-[630px] showcase rounded-md cursor-pointer relative" key={id}>
            
              <Image src={img} width={636} className="rounded-md shadow-md" height={448} alt="image" />
           
            <Link href={url}>
            <div className="overlay absolute top-0 flex justify-center items-center rounded-md w-full h-[98.5%] bg-[#6365e4db]">
              <VscEye size={80} className="border-4 text-white border-white p-4 rounded-full" />
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
