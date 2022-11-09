import Head from "next/head";
const Banner = () => {
  return (
    <div className="pt-[60px] bg-white md:pt-[100px]">
      <Head>
        <title>Services</title>
      </Head>
      <div className="bg-[url('/images/service/service-bg.png')] md:bg-[length:300px_350px] bg-[#1A4DBE] bg-no-repeat bg-left-top">
        <div className="py-16 md:py-[130px] max-w-[1296px] mx-3 md:mx-auto">
          <h1 className="text-white font-bold text-5xl md:text-[76px] mb-3">
            Our Services
          </h1>
          <p className="text-lg text-white">Home → Service</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
