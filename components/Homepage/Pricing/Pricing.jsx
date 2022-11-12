import { priceplan } from "../../../data/priceplan";
import { CgCheckO } from "react-icons/cg";
import Image from "next/image";
priceplan;
const Pricing = () => {
  return (
    <div className="bg-[url('/images/pricing/map-bg.png')] bg-white bg-bottom bg-no-repeat h-full">
      <div className="max-w-[1296px] mx-auto pt-16 md:pt-[115px] pb-[70px] md:pb-[120px]">
        <div className="flex justify-center mx-2 xl:mx-0">
          <div className="max-w-[640px] text-center">
            <h5 className="text-2xl font-semibold text-[#FF5349]">Price</h5>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] my-2">
              <span className="text-[#FF5349]">Choose</span> Your Plan
            </h2>
            <p className="text-lg mb-10 md:first-letter:mb-[57px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col flex-wrap md:flex-row gap-6">
          {priceplan.map(({ id, title, price, bg, features }) => (
            <div
              className="max-w-[416px] sm:w-[416px] mx-3 sm:mx-auto lg:mx-0 shadow-lg rounded-b-lg relative"
              key={id}
            >
              <div className="absolute w-20 md:w-32 top-0 right-0">
                <Image src={bg} width={140} height={120} alt="bg" />
              </div>
              <div
                className={` px-[30px] pt-[23px]  pb-4 rounded-t-lg ${
                  id == 1 && "bg-[#1A4DBE]"
                } ${id == 2 && "bg-[#FF5349]"} ${id == 3 && "bg-[#1A4DBE]"} `}
              >
                <h5 className="text-white text-2xl -mb-[6px]  font-semibold">
                  {title}
                </h5>
                <h2
                  className={`${id == 1 && "text-[#FF9300]"} ${
                    id == 3 && "text-[#FF9300]"
                  } text-[43px] font-bold ${id == 2 && "text-white"}`}
                >
                  ${price}{" "}
                  <span className="text-white text-base font-normal">
                    /month
                  </span>
                </h2>
              </div>
              <div className="pt-[30px] pb-[32px] px-[30px] rounded-b-lg bg-white">
                <ul>
                  {features.map((item, i) => (
                    <li
                      className="flex gap-5 border-b text-lg text-[#222] py-2 md:py-4 items-center"
                      key={i}
                    >
                      <CgCheckO color="#FF9300" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center pt-[40px] pb-2">
                <button
                    className={`px-8 py-3 border text-[#222] rounded-md border-black hover:bg-[#FF5A42] hover:text-white hover:border-[#FF5A42] hover:shadow-lg hover:shadow-[#ff5b425e] duration-300`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
