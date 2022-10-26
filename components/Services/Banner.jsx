import Head from "next/head";
import React from "react";

const Banner = () => {
  return (
    <div className="pt-[100px]">
      <Head>
        <title>Services</title>
      </Head>
      <div className="bg-[url('/images/service/service-bg.png')] md:bg-[length:300px_350px] bg-[#1A4DBE] bg-no-repeat bg-left-top min-h-[435px]">
        <div className="py-[138px] max-w-[1296px] mx-3 md:mx-auto">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-[30px]">
            Our Services
          </h1>
          <p className="text-lg text-white">Home → Service</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
