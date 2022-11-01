import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const ContactInfo = () => {
  return (
    <div className="flex flex-col -my-1 md:flex-row bg-[#F9F9F9] justify-between">
      <div className="md:w-1/2">
        <Image
          src="/images/contact/map.png"
          width={858}
          height={765}
          alt="map"
        />
      </div>
      <div className="text-[#222] max-h-[469px] mx-3 md:mx-0 flex flex-col border-[#444444] border-l-[1px] md:w-1/2 my-10 md:my-[60px] pl-5 md:pl-[120px] md:py-[60px] gap-10">
        <div className="flex gap-8 items-center ">
          <HiOutlineMail size={35} />
          <a
            href="mailto:contact.pio@gmail.com"
            className="md:text-[32px] font-semibold"
          >
            contact.pio@gmail.com
          </a>
        </div>
        <div className="flex gap-8">
          <BsTelephone size={35} />
          <a href="tel:+1 658 361 253" className="text-lg md:text-[32px] font-semibold">
            +1 658 361 253
          </a>
        </div>
        <address className="flex gap-8 not-italic">
          <SlLocationPin size={35} />
          <p className="text-2xl ">
            Ms Alice Smith Apartment 1c 213 <br /> Derrick Street Boston, MA 02130 USA
          </p>
        </address>
      </div>
    </div>
  );
};

export default ContactInfo;
