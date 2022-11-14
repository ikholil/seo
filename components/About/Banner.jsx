import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white lg:pt-[100px]  relative">
      <Head>
        <title>About</title>
      </Head>
      <section className="bg-[#1A4DBE] md:min-h-[435px]">
        <div className="md:bg-[url('/images/about/banner-bg.png')] bg-[length:300px_200px] md:bg-[length:800px_400px] md:block xl:right-40 absolute  w-full  bg-no-repeat bg-right-bottom min-h-[435px]"></div>
        <div className="py-14 lg:py-[138px] z-10 relative max-w-[1296px] mx-3 xl:mx-auto">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-2 md:mb-4">
            About us
          </h1>
          <p className="text-lg text-white"><Link href="/"><a>Home</a></Link> → Pages → About us</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;