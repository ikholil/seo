import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const ContactInfo = () => {
  return (
    <div className="flex flex-col -my-1 md:flex-row bg-[#F9F9F9] justify-between ">
      <div className="md:w-1/2 mx-2 lg:mx-0">
        {/* <Image
          src="/images/contact/map.png"
          width={858}
          height={765}
          alt="map"
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10319.5537104041!2d90.38981590889263!3d23.87141389010812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1667886498978!5m2!1sen!2sbd"
          className="w-full md:w-[90%] h-full min-h-[400px]"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="text-[#222] max-h-[469px] mx-3 md:mx-0 flex flex-col border-[#444444] md:pb-[378px] md:border-l-[1px] md:w-1/2 my-10 md:my-[60px] pl-5 md:pl-[120px] md:py-[60px] gap-3 md:gap-14">
        <div className="flex md:gap-8 gap-3 items-center ">
          <HiOutlineMail className="shrink-0" size={35} />
          <a
            href="mailto:contact.pio@gmail.com"
            className="text-lg md:text-[32px] font-semibold"
          >
            contact.pio@gmail.com
          </a>
        </div>
        <div className="flex md:gap-8 gap-3">
          <BsTelephone className="shrink-0" size={35} />
          <a
            href="tel:+1658361253"
            className="text-lg   md:text-[32px] font-semibold"
          >
            +1 658 361 253
          </a>
        </div>
        <address className="flex md:gap-8 gap-3 not-italic">
          <SlLocationPin className="shrink-0" size={35} />
          <p className="text-lg -md:text-2xl ">
            Ms Alice Smith Apartment 1c 213 <br /> Derrick Street Boston, MA
            02130 USA
          </p>
        </address>
      </div>
    </div>
  );
};

export default ContactInfo;
