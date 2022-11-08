import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolio } from "../../data/portfolio";
import { VscEye } from "react-icons/vsc";
const Portfolio = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px] mx-auto">
        <div className="text-center w-full flex justify-center">
          <div className="max-w-4xl flex flex-col justify-center">
            <h5 className="text-[#FF5349]  text-2xl font-semibold pt-[67px] md:pt-[115px]">
              Portfolio
            </h5>
            <h2 className="text-center text-[#222] leading-tight text-4xl pt-[10px] md:text-[57px] font-bold mb-2">
              Showcase Our <span className="text-[#FF5349]">Works</span>
            </h2>
            <p className="text-[#444] mx-2 md:mx-0 text-base md:text-lg md:px-40  text-center mb-8 md:mb-[120px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>
        <div className="flex gap-y-4 md:gap-y-8 mx-2 xl:mx-0 justify-center gap-x-4  pb-16 md:pb-[288px] flex-wrap">
          {portfolio.map(({ id, img, url }) => (
            <div
              className="w-[300px] md:w-[630px] showcase rounded-md cursor-pointer relative"
              key={id}
            >
              <Image
                src={img}
                width={636}
                className="rounded-md shadow-md"
                height={448}
                alt="image"
              />

              <Link href={url}>
                <div className="overlay absolute top-0 flex justify-center items-center rounded-md w-full h-[98.5%] bg-[#6365e4db]">
                  <VscEye
                    size={80}
                    className="border-4 text-white border-white p-4 rounded-full"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
