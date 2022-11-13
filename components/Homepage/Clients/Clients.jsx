import Image from "next/image";
import Slider from "react-slick";
const clients = [
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
  "/images/clients/1.png",
  "/images/clients/2.png",
  "/images/clients/3.png",
  "/images/clients/4.png",
];
const Clients = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    cssEase: "linear",
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-[1296px] mx-auto pt-16 md:pt-[115px] pb-[70px] md:pb-[120px]">
        <div className="flex mx-2 xl:mx-0 justify-center">
          <div className="max-w-[640px] text-center">
            <h5 className="text-2xl font-semibold text-[#FF5349]">
              clients’s love
            </h5>
            <h2 className="text-4xl  md:text-[43px] font-bold leading-tight text-[#222] mb-2 mt-2 md:mt-[13px]">
              Our Trusted <span className="text-[#FF5349]">{"Client's"}</span>
            </h2>
            <p className="text-lg mb-9 md:mb-[57px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div>
          <Slider {...settings}>
            {clients.map((item, index) => (
              <div className="text-center  w-full" key={index}>
                <Image
                  src={item}
                  height={50}
                  width={218}
                  className="block mx-auto border w-48 h-20"
                  alt="client images"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
