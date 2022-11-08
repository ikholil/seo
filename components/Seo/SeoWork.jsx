import Image from "next/image";
import seoWorkImg from "../../public/images/seo/seo-work.png";
const SeoWork = () => {
  return (
    <div className="bg-[#FFF]">
      <div className="max-w-[1296px] mx-auto pt-14 pb-16 md:py-[120px] ">
        <div className="md:grid md:grid-cols-12 items-center ">
          <div className="col-span-12 lg:col-span-6  mx-3 xl:mx-0">
            <Image src={seoWorkImg} width={515} height={440} alt="seo work" />
          </div>
          <div className="col-span-12 mx-3 xl:mx-0  mt-5 md:mt-0 lg:col-span-6">
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] my-[20px]">
              Work With The Best SEO
              <span className="text-[#2957BD]"> Agency </span>
            </h2>
            <p className="text-base md:text-lg  text-[#444]">
              SEO is no longer a method of link-building. Some of the deciding
              factors for a website to rank higher on search engines are
              architecturally sound coding, faster loading speed of the sites,
              website responsiveness across devices, insightful and coherent
              content, and website popularity on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoWork;
