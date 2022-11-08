import Head from "next/head";
import Image from "next/image";
import FbMarketing from '../../public/images/smm/banner-bg.png'
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white md:pt-[100px]  relative">
      <Head>
        <title>SMM</title>
      </Head>
      <div className="bg-[#1A4DBE]  bg-[url('/images/smm/bg-shape.png')] bg-no-repeat bg-left-top md:bg-[length:450px_400px]">
        <div className=" z-10 relative max-w-[1296px] mx-3 md:mx-auto flex justify-between">
         <div className="py-16 md:py-[138px]">
         <h1 className="text-white font-bold text-5xl md:text-[76px] mb-2 md:mb-4">
            SMM
          </h1>
          <p className="text-lg text-white">Home → Service → SMM </p>
         </div>
         <div className="hidden md:block">
            <Image src={FbMarketing} alt="banner img" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
