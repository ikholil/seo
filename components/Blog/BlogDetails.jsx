import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { blogs } from "../../data/blog";
import {HiOutlineChevronRight} from 'react-icons/hi'
const BlogDetails = () => {
  const { query } = useRouter();
  const blog = blogs.find((item) => item.id == query.id);

  return (
    <div className="max-w-[1296px] mx-auto grid grid-cols-12">
      <div className="mt-[30px] md:mt-[120px] md:mb-[251px] mx-3 lg:mx-0 col-span-12 md:col-span-9">
        <Image
          src={blog?.images[0]}
          className="rounded-md "
          height={551}
          width={896}
          alt="blog img"
        />
        <p className="mt-[20px] mb-[30px]">
          {blog?.author} • {blog?.date}
        </p>
        <h1 className="text-#242424 leading-tight mb-[30px] text-4xl md:text-[57px] font-bold">
          {blog?.title}
        </h1>
        <div className="md:w-10/12 text-[#444] text-lg text-justify">
          <p className="mb-[40px]">{blog?.text.split('.').slice(0,2).join('')}</p>
          <div className="border-l-2 mb-[40px] border-[#F75D54]">
            <p className="text-2xl font-semibold text-[#222] px-[25px]">
                {blog?.quote?.text}
            </p>
          </div>
          <p className="mb-[40px]">{blog?.text.split('.').slice(2,4).join('')}</p>
          <Image
          src={blog?.images[1]}
          className="rounded-md "
          height={501}
          width={896}
          alt="blog img"
        />
        <p className="mb-[40px] mt-[30px]">{blog?.text.split('.').slice(4,).join('')}</p>
        </div>
      </div>
      <div className="col-span-12 mx-3 lg:mx-0  md:col-span-3 mt-[30px] md:mt-[120px]">
        <div className="flex justify-between mb-[60px] w-[306px] bg-[#F5F5F5] px-5 py-3 rounded-md">
            <input className="focus:outline-none bg-[#F5F5F5]" type="text" placeholder="Search..." />
            <div className="bg-[#FF5349] p-2 shadow-lg shadow-[#ff52496c] rounded-lg">
            <FiSearch size={30} className=" text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-5 mb-5">
            <h2 className="text-2xl mb-[10px] text-[#242424] font-semibold">Recent Post</h2>
            {
              blogs.slice(3,).map((blog) => (
                <div className="flex gap-6" key={blog?.id}>
                    <div className="w-52 h-32 ">

                    <Image className="rounded shadow-lg" width={150} height={150} src={blog?.images[0]} alt="image" />
                    </div>
                    <h1 className="text-lg text-[#222]">{blog?.title}</h1>
                </div>
              ))  
            }
            <h2 className="text-2xl mt-5 mb-[10px] text-[#242424] font-semibold">Post Category</h2>
            <ul>

            {
                ['Marketing', 'SEO', 'SMM', 'Business'].map((category)=>(
                    <li className="flex gap-2 items-center text-lg mb-1" key={category}>
                        <HiOutlineChevronRight color="#FF5349" /> {category}
                    </li>
                    ))
                }
                </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
