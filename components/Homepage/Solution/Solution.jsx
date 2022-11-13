import Image from "next/image";
import { solution } from "../../../data/solution";
const Solution = () => {
  return (
    <section className="bg-[#FFFDFA]">
      <div className="max-w-[1296px] mx-auto pt-[60px] pb-[70px] md:pt-[112px] md:pb-[120px] ">
        <div className="flex justify-center mx-2 lg:mx-0 mb-10 md:mb-[60px]">
          <div className="max-w-3xl text-center">
            <h5 className="text-2xl font-semibold text-[#FF5349]">
              Marketing Solution
            </h5>
            <h2 className="text-4xl mx-2 lg:mx-0 md:text-[57px] font-bold leading-tight text-[#222] mt-[13px] mb-2 md:mb-[20px]">
              We Solve Better{" "}
              <span className="text-[#FF5349]">Digital Marketing </span>Solution
            </h2>
            <p className="text-lg  text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis{" "}
              <br />
              mattis dui eget vestibulum id et. It’s about ranking
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-6 2xl:-ml-36 mx-3 xl:mx-0">
            <Image
              src="/images/solution/bg.png"
              width={1000}
              height={650}
              alt="solution bg image"
            />
          </div>
          <div className="col-span-12 mx-3 xl:mx-0 flex flex-col mt-5 md:mt-0 gap-6 lg:col-span-6">
            {solution.map(({ id, desc, icon, title }) => (
              <div
                className={`p-4 md:px-[30px] md:pt-[30px] md:pb-[25px] flex flex-col md:flex-row gap-4 md:gap-[30px] rounded-lg ${
                  id == 1 && "bg-[#EDEFF5]"
                } ${id == 2 && "bg-[#FFF0EC]"} ${id == 3 && "bg-[#FFF5E6]"}`}
                key={id}
              >
                <div
                  className={`${id == 1 && "bg-[#1A4DBE]"} ${
                    id == 2 && "bg-[#FF5349]"
                  } ${
                    id == 3 && "bg-[#FF9300]"
                  } p-4 md:p-[20px]  rounded w-20 h-[72px]`}
                >
                  <Image src={icon} width={80} height={80} alt="icon" />
                </div>
                <div className="text-[#222]">
                  <h3 className="text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-lg">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
