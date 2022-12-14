import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Slider from "react-slick";
import { testimonials } from "../../../data/testimonials";
import {motion} from 'framer-motion'

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
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px] text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">
              Testimonial
            </h5>
            <h2 className="heading-2 mb-5 mt-[14px]">
              What our <span className="text-[var(--color-primary)]">{"Client's"}</span> Say
            </h2>
            <p className="paragraph-default mb-9 md:mb-[55px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              at eu tortor eget nam scelerisque ut tincidunt.
            </p>
          </motion.div>
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

                  <h5 className="heading-5">{item.name}</h5>
                  <p className="paragraph-default mb-2">
                    {item.designation}
                  </p>
                  <p className="paragraph-default">{item.review}</p>
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
