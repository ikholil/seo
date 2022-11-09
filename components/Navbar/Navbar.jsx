import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 90) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  const handleDropdownClick = () => {
    setDropdown(false);
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
    document.addEventListener("mouseup", function(){
      setDropdown(false)
    })
  }, []);
  return (
    <nav
      className={`w-full fixed z-50 text-[#222] py-2 md:py-0 px-1 md:px-3 xl:px-0 navbar ${
        navColor ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1296px]  relative z-40 mx-auto flex flex-wrap justify-between items-center">
        <Link href="/">
          <a className="flex items-center pl-2 md:pl-0">
            <Image src="/logo.png" height={36} width={122} alt="Logo" />
          </a>
        </Link>

        <div
          className={` w-screen md:block md:w-auto ${
            open
              ? "block absolute -left-1  h-[92vh] bg-white z-50 top-10"
              : "hidden"
          }`}
        >
          <ul className="flex items-start mx-3 text- md:mx-0  md:px-0 md:items-center flex-col mt-4 bg-body rounded-lg md:flex-row lg:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:gap-5">
            {[
              ["/", "HOME"],
              ["/service", "SERVICE"],
              ["/blog", "BLOG"],
              ["/contact", "CONTACT"],
            ].map(([url, title]) => (
              <li className=" lg:py-[35px]" key={title} onClick={() => setOpen(false)}>
                <Link href={url}>
                  <a
                    className="block  text-lg text-x py-2 pr-4 md:pl-3  rounded md:bg-transparent hover:text-primary  md:p-0 "
                    aria-current="page"
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}

            <li className="dropdown-button cursor-pointer py-4 lg:py-[35px]">
              <a
                onClick={() => setDropdown(!dropdown)}
                className=" flex  items-center gap-2 relative text-lg text-x  pr-4 md:pl-3  rounded md:hover:bg-transparent md:border-0 hover:text-primary md:p-0 "
              >
                PAGES <BsChevronDown />{" "}
              </a>
              <div className="relative">
                
                  <div className="absolute bg-white w-40 top-4 md:top-[35px] dropdown  text-lg">
                    {[
                      ["/seo", "SEO"],
                      ["/smm", "SMM"],
                      ["/about", "ABOUT"],
                      ["/portfolio", "PORTFOLIO"],
                    ].map(([url, title]) => (
                      <Link key={title} href={url}>
                        <a
                          onClick={handleDropdownClick}
                          className="py-2 px-4 select-none hover:bg-orange-600 hover:text-white"
                        >
                          {title}
                        </a>
                      </Link>
                    ))}
                  </div>
                
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <a
            className="text-lg font-semibold text-[#222222]"
            href="tel:+1(212)2437969"
          >
            +1 (212) 243-7969
          </a>
          <button className="bg-[#FF5349] p-2 shadow-xl shadow-[#ff52496c] rounded-lg">
            <FiSearch size={30} className=" text-white" />
          </button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="items-center pr-2 md:pr-0 text-sm text-gray-500 rounded-lg md:hidden  "
        >
          <HiMenu className="text-[#FF5349]" size={40} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
