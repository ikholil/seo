import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1296px] mx-auto text-center">
        <Image
          src="/images/error/404.png"
          width={1296}
          height={600}
          alt="404 image"
        />
        <div className=" text-center text-[#222]  pb-[70px] md:pb-[300px] pt-[60px]">
          <h2 className="text-3xl md:text-[57px] font-bold leading-tight mb-2">
            OOOPS! <br /> SORRY PAGE NOT FOUND
          </h2>
          <p className="text-base md:text-lg mb-7 md:mb-[48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <Link href="/">
            <button className="text-white text-base px-6 py-3 md:text-lg md:px-10 shadow-lg shadow-[#ff524987] md:py-4 rounded-md bg-gradient-to-r from-[#FF9300] to-[#FF5349]">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
