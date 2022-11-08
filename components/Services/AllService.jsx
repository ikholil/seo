import Image from "next/image";
import { services } from "../../data/service";

const AllService = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px]  mx-auto pt-[70px] md:pt-[120px] pb-[70px] md:pb-[297px] flex flex-col md:flex-row flex-wrap gap-6">
        {services.map(({ id, title, desc, img }) => (
          <div
            className="md:w-[413px] mx-3 md:mx-0 text-[#222] shadow-lg rounded-md"
            key={id}
          >
            <Image
              className="rounded-t-md"
              src={img}
              height={263}
              width={414}
              alt="service img"
            />
            <div className="px-5 md:px-[30px] pt-4 pb-8">
              <h2 className="text-2xl font-semibold mb-4 md:mb-[23px]">{title}</h2>
              <p className="mb-6 md:mb-8">{desc}</p>
              <button className="hover:text-white border-black border-[1px] hover:border-[#FF5349] text-lg px-5 hover:shadow-lg hover:shadow-[#ff524987] py-2 rounded hover:bg-[#FF5744]">
                Checkout
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllService;
