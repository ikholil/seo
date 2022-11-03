import Image from "next/image";
import SeoImg from "../../public/images/seo/seo.png";
const Seo = () => {
  return (
    <div className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto py-20 md:py-[120px] ">
        <div className="md:grid md:grid-cols-12 items-center md:gap-10">
          <div className="col-span-12 mx-3 xl:mx-0 flex flex-col mt-5 md:mt-0 gap-7 lg:col-span-5">
            <h1 className="text-4xl md:text-[57px] font-extrabold leading-tight text-[#222] my-[30px]">
              Search Engine 
              <span className="text-[#FF5349]"> Optimization</span>
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
          <div className="col-span-12 lg:col-span-7 2xl:-mr-48 mx-3 xl:mx-0">
            <Image
              src={SeoImg}
              width={800}
              height={650}
              alt="solution bg image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seo;
