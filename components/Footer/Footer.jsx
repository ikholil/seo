import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import Social from "../Others/Social";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer/bg-shape.png')] relative bg-no-repeat bg-right-bottom bg-[#07112D] min-h-[795px]">
      <div className="max-w-[1296px] mx-auto pt-[30px] lg:pt-0">
        <div className="bg-[#1A4DBE] rounded-[10px] py-6 px-3 mx-2 lg:mx-0  mt-[70px] lg:mt-0 lg:-translate-y-1/2 lg:p-[60px] md:bg-[url('/images/footer/bg.png')] bg-no-repeat bg-right">
          <h3 className="text-white text-3xl font-bold md:text-[43px] mb-4 md:mb-12">
            Start Growing Your Business{" "}
          </h3>
          <p className="text-base text-white mb-4 md:mb-[52px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
            eleifend malesuada quisque lectus.
          </p>
          <div className="flex md:gap-8 md:px-4 px-3 py-2 justify-between bg-white max-w-xs rounded-full">
            <input
              className="bg-white focus:outline-none text-black"
              type="email"
              placeholder="Email Address"
            />
            <button className="p-1 text-white md:p-2 rounded-full bg-[#FD5A3A]">
              <HiArrowNarrowRight size={30} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 mx-5 md:mx-0 gap-5 pt-[70px] mt-0 lg:-mt-[124px] lg:-pt-0 pb-[70px] md:pb-[120px] border-b-2 border-[#636363] text-white">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-4">
            <div>
              <Image
                src="/logo-white.png"
                height={36}
                width={129}
                alt="logo "
              />
            </div>
            <div className="flex gap-3 md:gap-5">
              <HiOutlineMail className="shrink-0" size={30} />
              <a href="mailto:contact.pio@gmail.com" className="text-base md:text-lg">
                contact.pio@gmail.com
              </a>
            </div>
            <div className="flex gap-5">
              <FiPhone className="shrink-0" size={30} />
              <a href="tel:+1658361253" className="text-base md:text-lg">
                +1 658 361 253
              </a>
            </div>
            <address className="flex gap-5 not-italic">
              <SlLocationPin className="shrink-0" size={30} />
              <p className="text-base md:text-lg max-w-[264px]">
                Ms Alice Smith Apartment 1c 213 Derrick Street Boston, MA 02130
                USA
              </p>
            </address>
          </div>
          <div className="col-span-12 flex flex-col text-base md:text-lg gap-4 md:col-span-3">
            <h5 className="text-2xl text-white font-semibold">Overview</h5>
            <div className="flex gap-1 text-[#C0C0C0] flex-col">
              {["Pricing", "Portfolio", "Blog", "Link Building", "Contact"].map(
                (item) => (
                  <Link href={`/${item}`} key={item}>
                    <a>{item}</a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="col-span-12 flex flex-col text-base md:text-lg gap-4 md:col-span-3">
            <h5 className="text-2xl text-white font-semibold">Services</h5>
            <div className="flex gap-1 text-[#C0C0C0] flex-col">
              {[
                "About",
                "Social Media Marketing",
                "SEO",
                "Link Building",
                "On-Page SEO",
                "Off-Page SEO",
              ].map((item) => (
                <Link href={`/${item}`} key={item}>
                  <a>{item}</a>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex flex-col text-base md:text-lg gap-4 md:col-span-2">
            <h5 className="text-2xl text-white font-semibold">Policy</h5>
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
                  <a>{item}</a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5">
          <p className="text-[#B4B4B4]">
            © 2022 Veltio Inc. All Rights Reserved.
          </p>
          <div>
            <Social class="text-white" size={35} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
