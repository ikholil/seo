import { marketingProcess } from "../../data/marketingProcess";

const MarketingProcess = () => {
  return (
    <div className="bg-[#F9F9F9] bg-[url('/images/smm/process-bg.png')] bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pb-[70px] md:pb-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] pt-14 md:pt-[106px] text-center mx-3 mb-10 md:mb-[57px] lg:mx-0">
            <h3 className="text-2xl mb-2 font-semibold text-[#FF5349]">
              Process
            </h3>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mb-5">
              Marketing Process
            </h2>
            <p className="text-base md:text-lg  text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed
              mattis pulvinar gravida parturient nunc.
            </p>
          </div>
        </div>
        <div className="flex mx-3 gap-5 md:gap-10 flex-wrap ml-8 md:ml-0  md:justify-center">
          {marketingProcess.map(({ id, title, color }) => (
            <div className="flex gap-3 md:gap-5 items-center " key={id}>
              <span
                className={`w-6 h-6 md:h-10 md:w-10 rounded-full bg-[${color}] ${
                  id == 4 && "bg-[#7879F1]"
                } ${id == 5 && "bg-[#F178B6]"}`}
              ></span>
              <h4 className="text-lg md:text-2xl text-[#222]">{title}</h4>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-[60px] flex justify-center">
          <button
            className={`px-8 py-3 border rounded-md font-semibold  bg-[#FF5A42] text-white border-[#FF5A42] shadow-lg shadow-[#ff5b425e]`}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingProcess;
