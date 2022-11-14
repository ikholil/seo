import Head from "next/head";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="pt-[60px] lg:pt-[100px] bg-white  relative">
      <Head>
        <title>Portfolio</title>
      </Head>
      <section className="bg-[#1A4DBE]">
        <div className="py-16  lg:py-[138px] z-10 relative max-w-[1296px] mx-3 xl:mx-auto md:bg-[url('/images/error/banner.png')] bg-no-repeat bg-right-bottom bg-contain">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-2 md:mb-4">
            Portfolio
          </h1>
          <p className="text-lg text-white">
            <Link href="/">
              <a>Home </a>
            </Link>{" "}
            → Pages → Portfolio{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
