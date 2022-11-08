import Head from "next/head";
const Banner = () => {
  return (
    <div className="pt-[60px] md:pt-[100px] bg-white  relative">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="bg-[#1A4DBE]">
        <div className="py-16  md:py-[138px] z-10 relative max-w-[1296px] mx-3 md:mx-auto md:bg-[url('/images/error/banner.png')] bg-no-repeat bg-right-bottom bg-contain">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-2 md:mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-white">Home → Pages → Portfolio </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
