import Image from "next/image";
import { services } from "../../data/service";

const AllService = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px]  mx-auto pt-[120px] pb-10 md:pb-[280px] flex flex-col md:flex-row flex-wrap gap-6">
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
            <div className="p-[30px]">
              <h1 className="text-2xl font-semibold mb-[30px]">{title}</h1>
              <p className="mb-[40px]">{desc}</p>
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
