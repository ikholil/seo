import Image from "next/image";
import FbImg from "../../public/images/smm/fb-marketing.png";
const FbMarketing = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px] mx-auto py-[70px] md:py-[120px] ">
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-10">
          <div className="flex-1 mx-3 ">
            <h2 className="text-4xl md:text-[57px] mt-8 lg:mb-0 max-w-sm font-bold leading-tight text-[#222] mb-6">
              <span className="text-[#2957BD]"> Facebook </span>
              Marketing
            </h2>

            <p className="text-base md:text-lg md:mb-[60px] text-[#444]">
              When we start a project, we set up the tracking of your ads in
              order to give you all the KPIs essential to your objectives,
              without loss of information and with reliable monitoring.
              Passionate about data and acquisition, we offer campaigns on
              social networks.
            </p>
          </div>
          <div className="flex-1  2xl:-ml-16 mx-3 xl:mx-0">
            <Image
              src={FbImg}
              width={794}
              height={542}
              alt="fb marketing image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FbMarketing;
