import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px] mx-auto pt-[70px] pb-12 md:pt-[110px]">
        <div className="flex justify-center">
          <div className="max-w-[640px]  text-center mx-3 lg:mx-0">
            <h5 className="text-2xl font-semibold text-[#FF5349]">
              Digital Marketing
            </h5>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mt-[18px] mb-2">
              Service We Provide
            </h2>
            <p className="text-lg mb-6 md:mb-[55px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              mattis dui eget vestibulum id et. It’s about ranking
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:gap-10 items-center ">
          <div className="flex-1  mx-3 xl:mx-0 ">
            <h4 className="text-2xl max-w-md leading-tight md:text-[32px] font-semibold mb-4 md:mb-[20px] text-[#222]">
              Search Engine Optimization (SEO)
            </h4>
            <p className="text-base md:text-lg text-[#222] mb-9">
              At Session Media we build technically sound and creative SEO
              strategies which lift your brand to dominate the organic search
              results for the most relevant and profitable terms.For you, that
              means more visibility and qualified leads at the lowest possible
              cost.
            </p>
            <Link href="/seo">
              <a className="text-white text-base  px-6 shadow-lg shadow-[#ff524987] py-3 rounded-md bg-gradient-to-r from-[#FF6E2C] to-[#FF5646]">
                Read More
              </a>
            </Link>
          </div>
          <div className="flex-1 2xl:-mr-36 mx-3 xl:mx-0">
            <Image
              src="/images/service/seo.png"
              width={1000}
              height={650}
              alt="solution bg image"
            />
          </div>
        </div>
        {/* Service no 2 */}
        <div className="flex flex-col-reverse lg:flex-row md:gap-10 items-center ">
          <div className="flex-1 mx-3 lg:or xl:mx-0">
            <Image
              src="/images/service/smm.png"
              width={512}
              height={474}
              alt="solution bg image"
            />
          </div>
          <div className="flex-1 mx-3 xl:mx-0  ">
            <h4 className="text-2xl md:text-[32px] font-semibold mb-[20px] text-[#222]">
              Social Media <br /> Marketing (SMM)
            </h4>
            <p className="text-base md:text-lg text-[#222] mb-9">
              Passionate about data and acquisition, we offer campaigns on
              social networks. May i the most take When we start a project, we
              set up the tracking of your ads in order to give you all the KPIs
              essential to your objectives, without loss of information and with
              reliable monitoring.
            </p>
            <Link href="/smm">
              <a className="text-white text-base px-6 shadow-lg shadow-[#ff524987] py-3 rounded-md bg-gradient-to-r from-[#FF6E2C] to-[#FF5646]">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
