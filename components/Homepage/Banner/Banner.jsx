import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "../../Others/AnimatedLink";

const Banner = () => {
  return (
    <header className="relative bg-[#FFFDFA] ">
      <div className="lg:bg-[url('/images/banner/bg.png')]  bg-no-repeat  bg-right">
        <div className="max-w-[1296px] grid grid-cols-12 mx-auto pt-[120px] md:pt-[207px] pb-[70px] md:pb-[200px] ">
          <div className="col-span-12 lg:col-span-7 mx-2 xl:mx-0">
            <h3 className="text-2xl md:text-[32px] font-semibold text-[#FF5349] mb-[6px]">
              Digital Marketing
            </h3>
            <h1 className="text-5xl mb-1 md:text-[76px] font-bold leading-tight text-[#222]">
              Grow Your Business With{" "}
              <span className="text-[#FF5349]">Us.</span>{" "}
            </h1>
            <p className="text-lg md:text-2xl text-[#222222] mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              mattis dui eget vestibulum id et.
            </p>
            
              <AnimatedLink link="/service" name="Get Started Now" classes="font-semibold" />
            
           
          </div>
        </div>
        <div className="hidden md:block absolute -bottom-2 left-0">
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
