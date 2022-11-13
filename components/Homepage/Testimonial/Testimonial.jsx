import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import { testimonials } from "../../../data/testimonials";
const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[url('/images/testimonial/bg.png')] bg-white bg-left-bottom bg-no-repeat">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[115px] pb-[70px] md:pb-[120px]">
        <div className="flex justify-center mx-2 lg:mx-0">
          <div className="max-w-[640px] text-center">
            <h5 className="text-2xl font-semibold text-[#FF5349]">
              Testimonial
            </h5>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mb-6 mt-[14px]">
              What our <span className="text-[#FF5349]">{"Client's"}</span> Say
            </h2>
            <p className="text-base md:text-lg mb-9 md:mb-[55px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mx-2 lg:mx-0 w-[290px] bg-white sm:w-[550px] lg:w-[850px] shadow-[0px_4px_24px_rgba(188,188,188,0.25)] rounded-xl">
            <Slider {...settings}>
              {testimonials.map((item) => (
                <div
                  className="py-6 px-4 lg:px-20 lg:py-10 text-center text-[#222] flex justify-center items-center flex-col rounded-[10px]"
                  key={item.id}
                >
                  <div className="flex justify-center mb-5">
                    <Image
                      src={item.img}
                      height={200}
                      width={200}
                      className="rounded-full"
                      alt="Clients img "
                    />
                  </div>

                  <h5 className="text-2xl font-semibold">{item.name}</h5>
                  <p className="text-base md:text-lg mb-2">
                    {item.designation}
                  </p>
                  <p className="text-base md:text-lg ">{item.review}</p>
                  <div className="flex gap-1 justify-center mt-5">
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                    <IoIosStar color="#FFCA22" size={30} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
