import Head from "next/head";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white md:pt-[100px]  relative">
      <Head>
        <title>SEO</title>
      </Head>
      <div className="bg-[#1A4DBE]">
        <div className="bg-[url('/images/seo/banner-bg.png')] bg-[length:300px_200px] md:bg-[length:650px_400px] md:block xl:right-80 absolute  w-full  bg-no-repeat bg-right-bottom"></div>
        <div className="py-16 md:py-[138px] z-10 relative max-w-[1296px] mx-3 md:mx-auto">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-2 md:mb-4">
            SEO
          </h1>
          <p className="text-lg text-white">Home → Service → SEO </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
