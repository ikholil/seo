import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedLink from "../../Others/AnimatedLink";
import BannerImg from "../../../public/images/banner/rocket.png";
const Banner = () => {
  return (
    <header className="relative bg-[#FFFDFA] ">
      <div className="xl:bg-[url('/images/banner/bg.png')] bg-no-repeat bg-right-top">
        <div className="max-w-[1296px] mx-auto pt-32 lg:pt-[220px] flex">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-3 xl:mx-0 mb-20"
          >
            <div className="max-w-[694px]">
              <h3 className="text-2xl md:text-[32px] font-semibold text-[#FF5349] mb-4">
                Digital Marketing
              </h3>
              <h1 className="text-5xl lg:text-[55px] mb-1 xl:text-[76px] font-bold leading-tight text-[#222]">
                Grow Your Business With{" "}
                <span className="text-[#FF5349]">Us.</span>{" "}
              </h1>
              <p className="text-lg md:text-2xl text-[#222222] mb-6 md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Convallis mattis dui eget vestibulum id et.
              </p>
            </div>

            <AnimatedLink
              link="/service"
              name="Get Started Now"
              classes="font-semibold"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 100, opacity: 0.5 }}
            animate={{ x: -100, y: -100, opacity: 1 }}
            exit={{ x: 0, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            className="hidden relative -right-44 lg:block md:pt-0"
          >
            <Image height={650} width={600} src={BannerImg} alt="banner img" />
          </motion.div>
        </div>
        <div className="hidden xl:block absolute -bottom-2 left-0">
          <Image
            src="/images/banner/shape.png"
            height={306}
            width={406}
            alt="banner shape"
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
