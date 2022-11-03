import Image from "next/image";
import seoWorkImg from "../../public/images/seo/seo-work.png";
const SeoWork = () => {
  return (
    <div className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto py-20 md:py-[120px] ">
        <div className="md:grid md:grid-cols-12 items-center ">
          <div className="col-span-12 lg:col-span-6  mx-3 xl:mx-0">
            <Image
              src={seoWorkImg}
              width={515}
              height={440}
              alt="seo work"
            />
          </div>
          <div className="col-span-12 mx-3 xl:mx-0 flex flex-col mt-5 md:mt-0 gap-7 lg:col-span-6">
            <h1 className="text-4xl md:text-[57px] font-extrabold leading-tight text-[#222] my-[30px]">
              Work With The Best SEO
              <span className="text-[#2957BD]"> Agency </span>
            </h1>
            <p className="text-lg  text-[#444]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              diam in commodo platea mi. Nec iaculis eget aliquam tellus
              ullamcorper at. Urna, vitae in eget consequat.
            </p>
            <p className="text-lg mb-[60px] text-[#444]">
              Sit turpis vulputate lobortis facilisis dui. Fermentum pulvinar
              imperdiet ultrices augue et eget. Vestibulum eu feugiat in
              accumsan integer lectus viverra ut tincidunt. consectetur
              adipiscing elit. Imperdiet diam in commodo platea mi. Nec iaculis
              eget aliquam tellus ullamcorper at. Urna,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoWork;
