import Image from "next/image";

const clients = ['/images/clients/1.png', '/images/clients/2.png','/images/clients/3.png','/images/clients/4.png', ]
const Clients = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-[1296px] mx-auto pt-16 md:pt-[115px] pb-[70px] md:pb-[120px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] text-center">
            <h3 className="text-2xl font-semibold text-[#FF5349]">
              clients’s love
            </h3>
            <h2 className="text-4xl md:text-[43px] font-bold leading-tight text-[#222] mb-2 mt-2 md:mt-[13px]">
              Our Trusted <span className="text-[#FF5349]">{"Client's"}</span>
            </h2>
            <p className="text-lg mb-9 md:mb-[57px] text-[#222]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 mx-2 lg:mx-0  md:flex-row justify-between items-center flex-wrap">
            {
                clients.map((client, index) => (
                    <div className="px-11 rounded-md border  pt-3 cursor-pointer" key={index}>
                        <Image src={client} height={50} width={218} alt="client images" />
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Clients;
