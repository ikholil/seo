import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonials } from "../../../data/testimonials";
import Image from "next/image";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
const Testimonial = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  const [currentTab, setCurrentTab] = useState("3");

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };
  return (
    <div className="bg-[url('/images/testimonial/bg.png')] bg-white bg-left-bottom bg-no-repeat">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[110px] pb-[70px] md:pb-[186px]">
        <div className="flex justify-center mx-2 lg:mx-0">
          <div className="max-w-[640px] text-center">
            <h5 className="text-2xl font-semibold text-[#FF5349]">
              Testimonial
            </h5>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mb-6 mt-[10px]">
              What our <span className="text-[#FF5349]">{"Client's"}</span> Say
            </h2>
            <p className="text-base md:text-lg mb-[55px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col md:flex-row w-1/2 justify-center items-center">
            {testimonials.map((client, i) => (
              <div
                key={i}
                id={client.id}
                className={`cursor-pointer rounded-full border-[#E9EFFE] shadow-xl ${
                  currentTab == client.id
                    ? "border-[12px] mx-4 w-56 h-56"
                    : "w-24 -mx-3 h-24 border-4"
                } z-10`}
                
                onClick={() => handleTabClick(client.id)}
              >
                <Image
                  src={client.img}
                  className={` rounded-full`}
                  height={400}
                  width={400}
                  alt="client image"
                />
                {client.id == currentTab && (
                  <div className="text-center hidden md:block relative mb-[120px] text-[#222]">
                    <h5 className="text-2xl mt-10 font-semibold">
                      {client.name}
                    </h5>
                    <p className="text-base">{client.designation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-5 md:mt-0 md:w-1/2">
            {testimonials.map((item, i) => (
              <div key={i}>
                {currentTab == item.id && (
                  <div className="p-[30px] bg-white shadow-lg rounded-md mx-2 md:mx-0">
                    <div className="flex mb-[25px] gap-1 text-[#FFCA22]">
                      <IoIosStar size={30} />
                      <IoIosStar size={30} />
                      <IoIosStar size={30} />
                      <IoIosStar size={30} />
                      <IoIosStar size={30} />
                    </div>
                    <p className="text-[#222] text-base md:text-lg">
                      {item.review}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
