import Image from "next/image";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import Social from "../Others/Social";
const Footer = () => {
  return (
    <footer className="bg-[url('/images/footer/bg-shape.png')] relative bg-no-repeat bg-right-bottom bg-[#07112D] min-h-[795px]">
      <div className="max-w-[1296px] mx-auto">
        <div className="bg-[#1A4DBE] md:w-[1296px] mt-5 rounded-lg mx-2 absolute md:mx-0 md:-mt-44 p-5 md:p-[60px] bg-[url('/images/footer/bg.png')] bg-no-repeat bg-right mb-20">
          <div className="text-white ">
            <h1 className="text-3xl md:text-[43px] font-bold mb-[42px]">
              Start Growing Your Business{" "}
            </h1>
            <p className="mb-[52px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh
              eleifend malesuada quisque lectus.{" "}
            </p>
            <div className="flex justify-between pl-2 md:pl-5 pr-1 md:pr-3 py-1 md:py-2 rounded-full bg-white md:w-[357px]">
              <input
                className=" rounded-full focus:outline-none text-black"
                type="text"
                placeholder="Email Address..."
              />
              <div className="p-3 rounded-full bg-[#FD5A3A]">
                <HiArrowNarrowRight size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mx-5 md:mx-0 gap-5 pt-[400px] md:pt-[300px] pb-[120px] border-b-2 border-[#636363] text-white">
          <div className="col-span-12 flex flex-col gap-7 md:col-span-4">
            <div>
              <Image
                src="/logo-white.png"
                height={36}
                width={129}
                alt="logo "
              />
            </div>
            <div className="flex gap-8">
              <HiOutlineMail size={30} />
              <a href="mailto:contact.pio@gmail.com" className="text-lg">contact.pio@gmail.com</a>
            </div>
            <div className="flex gap-8">
              <BsTelephone size={30} />
              <a href="tel:+1 658 361 253" className="text-lg">+1 658 361 253</a>
            </div>
            <address className="flex gap-8 not-italic">
              <SlLocationPin size={30} />
              <p className="text-lg max-w-[264px]">
                Ms Alice Smith Apartment 1c 213 Derrick Street Boston, MA 02130
                USA
              </p>
            </address>
          </div>
          <div className="col-span-12 flex flex-col text-lg gap-8 md:col-span-3">
            <h2 className="text-2xl text-white font-semibold">Overview</h2>
            <div className="flex gap-5 text-[#C0C0C0] flex-col">
            <a href="#">Pricing</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Link Building</a>
            <a href="#">Contact</a>
            </div>
          </div>
          <div className="col-span-12 flex flex-col text-lg gap-8 md:col-span-3">
            <h2 className="text-2xl text-white font-semibold">Services</h2>
            <div className="flex gap-5 text-[#C0C0C0] flex-col">
            <a href="#">About</a>
            <a href="#">Social Media Marketing</a>
            <a href="#">SEO</a>
            <a href="#">Link Building</a>
            <a href="#">On-Page SEO</a>
            <a href="#">Off-Page SEO</a>
            </div>
          </div>
          <div className="col-span-12 flex flex-col text-lg gap-8 md:col-span-2">
            <h2 className="text-2xl text-white font-semibold">Policy</h2>
            <div className="flex gap-5 text-[#C0C0C0] flex-col">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Code of Conduct</a>
            <a href="#">Medical Advice</a>
            <a href="#">Cancellation</a>
            <a href="#">Referral Policy</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center py-5">
          <p className="text-[#B4B4B4]">© 2022 Veltio Inc. All Rights Reserved.</p>
          <div>
            <Social class="text-white" size={35} />
          </div>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
