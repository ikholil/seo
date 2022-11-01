import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px] mx-auto py-20 md:py-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[640px]  text-center mx-3 lg:mx-0">
            <h3 className="text-[32px] font-bold text-[#FF5349]">
              Digital Marketing
            </h3>
            <h1 className="text-4xl md:text-[57px] font-extrabold leading-tight text-[#222] my-[30px]">
              Service We Provide
            </h1>
            <p className="text-lg mb-[60px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              mattis dui eget vestibulum id et. It’s about ranking
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-10 items-center ">
          <div className="col-span-2 mx-3 xl:mx-0 lg:col-span-1">
            <h3 className="text-[32px] font-semibold mb-[30px] text-[#222]">
              Search Engine <br /> Optimization (SEO)
            </h3>
            <p className="text-lg text-[#222] mb-10">
              At Session Media we build technically sound and creative SEO
              strategies which lift your brand to dominate the organic search
              results for the most relevant and profitable terms.For you, that
              means more visibility and qualified leads at the lowest possible
              cost.
            </p>
            <button className="text-white text-lg px-6 shadow-lg shadow-[#ff524987] py-3 rounded-lg bg-gradient-to-r from-[#FF9300] to-[#FF5349]">
              Read More
            </button>
          </div>
          <div className="col-span-2 lg:col-span-1 2xl:-mr-36 mx-3 xl:mx-0">
            <Image
              src="/images/service/seo.png"
              width={1000}
              height={650}
              alt="solution bg image"
            />
          </div>
          {/* Service no 2 */}
          <div className="col-span-2 lg:col-span-1 mx-3 order-1 lg:order-[0] lg:or xl:mx-0">
            <Image
              src="/images/service/smm.png"
              width={700}
              height={650}
              alt="solution bg image"
            />
          </div>
          <div className="col-span-2 mx-3 xl:mx-0 lg:col-span-1 ">
            <h3 className="text-[32px] font-semibold mb-[30px] text-[#222]">
              Social Media <br /> Marketing (SMM)
            </h3>
            <p className="text-lg text-[#222] mb-10">
              Passionate about data and acquisition, we offer campaigns on
              social networks. May i the most take When we start a project, we
              set up the tracking of your ads in order to give you all the KPIs
              essential to your objectives, without loss of information and with
              reliable monitoring.
            </p>
            <button className="text-white text-lg px-6 shadow-lg shadow-[#ff524987] py-3 rounded-lg bg-gradient-to-r from-[#FF9300] to-[#FF5349]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
