import Image from "next/image";
import { aboutFeatures } from "../../data/about_feature";

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex px-3 md:mx-0 flex-col md:flex-row pt-[120px]">
          <div className="md:w-1/2 ">
            <Image
              src="/images/about/illustration.png"
              height={479}
              width={503}
              alt="about image"
            />
          </div>
          <div className="md:w-1/2 text-[#222] ">
            <h2 className="leading-tight font-bold text-3xl md:text-[57px] mb-2">
              We Provide Best <span className="text-[#FF5349] ">Digital </span>{" "}
              Marketing Service{" "}
            </h2>
            <p className="text-lg">
              Passionate about data and acquisition, we offer campaigns on
              social networks.
            </p>{" "}
            <br />
            <p className="text-lg">
              When we start a project, we set up the tracking of your ads in
              order to give you all the KPIs essential to your objectives,
              without loss of information and with reliable monitoring.
              Passionate about data and acquisition, we offer campaigns on
              social networks.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-[25px] md:flex-row flex-wrap mx-3 md:mx-0 gap-5">
          {aboutFeatures.map(({ id, title, icon, desc }) => (
            <div
              className="md:w-[390px] text-[#222] p-[30px] bg-white shadow-lg rounded"
              key={id}
            >
              <div
                className={`${id == 1 && "bg-[#FFD4D1]"} ${
                  id == 2 && "bg-[#D7E3FF]"
                } ${
                  id == 3 && "bg-[#FFE1B8]"
                } p-[30px] w-[120px] h-[120px] rounded-md cursor-pointer hover:shadow-xl duration-300`}
              >
                <Image src={icon} height={70} width={70} alt="icon" />
              </div>
              <h3 className="mt-[30px] mb-5 font-semibold text-[32px]">{title}</h3>
              <p className="text-lg mb-[86px]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
