import Image from "next/image";
import React from "react";
import MarketingImg from "../../public/images/seo/ms-img.png";
const Marketing = () => {
  return (
    <div className="bg-[#FFFDFA] bg-[url('/images/seo/ms-bg.png')] bg-no-repeat bg-left-top">
        <div className="bg-[url('/images/seo/ms-bg2.png')] bg-no-repeat bg-right-bottom">
        <div className="max-w-[1296px] mx-auto py-20 md:py-[120px] ">
        <div className="md:grid md:grid-cols-12 items-center md:gap-32">
          <div className="col-span-12 mx-3 xl:mx-0 flex flex-col mt-5 md:mt-0 gap-7 lg:col-span-6">
            <h1 className="text-4xl md:text-[57px] font-extrabold leading-tight text-[#222] my-[30px]">
              <span className="text-[#FF5349]">Marketing </span> <br />
              Strategy
            </h1>
            <p className="text-lg  text-[#444]">
              Sit turpis vulputate lobortis facilisis dui. Fermentum pulvinar
              imperdiet ultrices augue et eget. Vestibulum eu feugiat in
              accumsan integer lectus viverra ut tincidunt. consectetur
              adipiscing elit. Imperdiet diam in commodo platea mi. Nec iaculis
              eget aliquam tellus ullamcorper at. Urna,
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 2xl:-mr-48 mx-3 xl:mx-0">
            <Image
              src={MarketingImg}
              width={416}
              height={512}
              alt="solution bg image"
            />
          </div>
        </div>
      </div>
        </div>
     
    </div>
  );
};

export default Marketing;
