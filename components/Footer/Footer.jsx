import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Social from "../others/Social";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer/bg-shape.png')] relative bg-no-repeat bg-right-bottom bg-[#07112D]">
      <div className="max-w-[1296px] mx-auto pt-[30px] lg:pt-0">
        <div className="bg-[#1A4DBE] rounded-[10px] py-6 px-3 mx-2 xl:mx-0  mt-[40px] lg:mt-0 lg:-translate-y-1/2 md:p-[30px] lg:p-[60px] md:bg-[url('/images/footer/bg.png')] bg-no-repeat bg-right">
          <h3 className="text-white heading-3 mb-4 lg:mb-6">
            Start Growing Your Business{" "}
          </h3>
          <p className="figure-caption text-white mb-4 lg:mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
            eleifend malesuada quisque lectus.
          </p>
          <form className="flex md:gap-8 md:px-4 px-3 py-2 justify-between bg-white max-w-xs rounded-full">
            <input
              className="bg-white focus:outline-none text-black"
              type="email"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="p-1 text-white md:p-2 rounded-full bg-[#FD5A3A] duration-300 hover:shadow-lg hover:shadow-[#ff52497a]">
              <HiArrowNarrowRight size={30} />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-12 mx-5 xl:mx-0 gap-5 pt-[70px] md:pt-[85px] mt-0 lg:-mt-[124px] lg:-pt-0 pb-[66px] md:pb-[120px] border-b-2 border-[#636363] text-white">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4">
            <div>
              <Image
                src="/logo-white.png"
                height={36}
                width={129}
                alt="logo "
              />
            </div>
            <div className="flex gap-3 md:gap-5">
              <HiOutlineMail className="shrink-0 text-2xl md:text-4xl" />
              <a href="mailto:contact.pio@gmail.com" className="paragraph-default text-white">
                contact.pio@gmail.com
              </a>
            </div>
            <div className="flex gap-3 md:gap-5">
              <FiPhone className="shrink-0 text-2xl md:text-4xl" />
              <a href="tel:+1658361253" className="paragraph-default text-white">
                +1 658 361 253
              </a>
            </div>
            <address className="flex gap-3 md:gap-5 not-italic">
              <SlLocationPin className="shrink-0 text-2xl md:text-4xl" />
              <p className="paragraph-default text-white max-w-[264px]">
                Ms Alice Smith Apartment 1c 213 Derrick Street Boston, MA 02130
                USA
              </p>
            </address>
          </div>
          <div className="col-span-12 flex flex-col paragraph-default gap-4 md:col-span-6 lg:col-span-3">
            <h5 className="heading-5 text-white mt-2 md:mt-0">Overview</h5>
            <div className="flex gap-1 text-[#C0C0C0] flex-col">
              {["Pricing", "Portfolio", "Blog", "Link Building", "Contact"].map(
                (item) => (
                  <Link href={`/${item}`} key={item}>
                    <a className="hover:pl-1 duration-200">{item}</a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-span-12 flex flex-col paragraph-default gap-4 md:col-span-6 lg:col-span-3">
            <h5 className="heading-5 text-white mt-2 md:mt-0">Services</h5>
            <div className=" inline-flex gap-1 text-[#C0C0C0] flex-col">
              {[
                "About",
                "Social Media Marketing",
                "SEO",
                "Link Building",
                "On-Page SEO",
                "Off-Page SEO",
              ].map((item) => (
                <Link href={`/${item}`} key={item}>
                  <a className="hover:pl-1 duration-200">{item}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-col paragraph-default gap-4 md:col-span-6 lg:col-span-2">
            <h5 className="heading-5 text-white mt-2 md:mt-0">Policy</h5>
            <div className="flex gap-1 text-[#C0C0C0] flex-col">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Code of Conduct",
                "Medical Advice",
                "Cancellation",
                "Refferral Policy",
              ].map((item) => (
                <Link href={`/${item}`} key={item}>
                  <a className="hover:pl-1 duration-200">{item}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5 mx-3">
          <p className="text-[#B4B4B4] figure-caption">
            © 2022 Veltio Inc. All Rights Reserved.
          </p>
          <div>
            <Social classes="text-white" size={35} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
