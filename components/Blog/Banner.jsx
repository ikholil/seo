import Head from "next/head";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white md:pt-[100px]  relative">
      <Head>
        <title>Blog</title>
      </Head>
      <div className="bg-[#1A4DBE]">
        <div className="py-16 md:py-[138px] z-10 relative max-w-[1296px] mx-3 md:mx-auto md:bg-[url('/images/blog/banner-bg.png')] bg-[length:300px_200px] md:bg-[length:800px_400px]  md:block   w-full  bg-no-repeat bg-right-bottom">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-4 md:mb-8 ">
            Blog
          </h1>
          <p className="text-lg text-white">Home → Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
