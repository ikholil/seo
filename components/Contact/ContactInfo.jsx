import { GrPhone } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

const ContactInfo = () => {
  return (
    <section className="flex flex-col -my-1 lg:flex-row bg-[#F9F9F9] justify-between ">
      <div className="lg:w-1/2 mx-2 lg:mx-0">
       
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10319.5537104041!2d90.38981590889263!3d23.87141389010812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1667886498978!5m2!1sen!2sbd"
          className="w-full lg:w-[90%] h-full min-h-[300px]"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="text-[#222] max-h-[469px] mx-3 md:mx-0 flex flex-col border-[#444444] md:border-l-[1px] md:w-1/2 my-5 md:my-[60px] sm:pl-5 xl:pl-[120px] xl:py-[60px] gap-3 md:gap-6 lg:gap-[30px] pb-[50px] lg:pb-[250px] xl:pb-[350px]">
        <div className="flex lg:gap-8 gap-3 items-center ">
          <HiOutlineMail className="shrink-0" size={35} />
          <a
            href="mailto:contact.pio@gmail.com"
            className="text-lg lg:text-[32px] font-semibold"
          >
            contact.pio@gmail.com
          </a>
        </div>
        <div className="flex lg:gap-8 gap-3">
          <GrPhone className="shrink-0" size={35} />
          <a
            href="tel:+1658361253"
            className="text-lg   lg:text-[32px] font-semibold"
          >
            +1 658 361 253
          </a>
        </div>
        <address className="flex lg:gap-8 gap-3 not-italic">
          <SlLocationPin className="shrink-0" size={35} />
          <p className="text-2xl -md:text-2xl ">
            Ms Alice Smith Apartment 1c 213 <br /> Derrick Street Boston, MA
            02130 USA
          </p>
        </address>
      </div>
    </section>
  );
};

export default ContactInfo;
