import Image from "next/image";
import React from "react";
import { blogs } from "../../../data/blog";

const Blog = () => {
  return (
    <div className="bg-[#F9F9F9] bg-[url('/images/blog/bg.png')] bg-contain bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pt-[82px] pb-16 md:pb-[285px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] text-center">
            <h3 className="text-2xl font-bold text-[#FF5349]">
              Blog
            </h3>
            <h1 className="text-4xl md:text-[57px] font-extrabold leading-tight text-[#222] my-[30px]">
              Our Latest <span className="text-[#FF5349]">Articles</span> 
            </h1>
            <p className="text-lg mb-[60px] text-[#222]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex mx-2 flex-col gap-4 flex-wrap md:flex-row">
            {
                blogs.slice(0,3).map((blog) => (
                    <div key={blog.id} className='bg-white p-4 md:w-[416px] rounded-md shadow-lg'>
                        <Image src={blog.images[0]} width={385} height={253} alt="blog img" />
                       <div className="p-[15px]">
                       <p className="text-[#222] gap-1 flex items-center">
                            {blog.author} • 
                            {blog.date}
                        </p>
                        <h2 className="font-semibold text-[#222] text-2xl mt-4 mb-[30px]">{blog.title}</h2>
                        <p className="text-[#222] text-lg mb-[30px]">{blog.text.substring(0, 100)}</p>
                        <button className="text-[#1A4DBE] text-lg">Read More</button>
                       </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Blog;
