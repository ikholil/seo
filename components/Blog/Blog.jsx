import Image from "next/image";
import Link from "next/link";
import React from "react";
import { blogs } from "../../data/blog";

const AllBlog = () => {
  return (
    <div className="bg-white bg-[url('/images/blog/bg.png')] bg-contain bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pt-[75px] md:pb-[285px]">
        <div className="mx-3 md:mx-0">
          <div className="max-w-[640px] ">
            <h1 className="text-4xl md:text-[57px] font-extrabold leading-tight text-[#222] my-[25px]">
              Blog Post
            </h1>
            <p className="text-lg mb-[55px] text-[#222]">
              With our integrated CRM, project management, collaboration and
              invoicing capabilities, you can manage your business in one secure
              platform.
            </p>
          </div>
        </div>
        <div className="flex mx-3 lg:mx-0 flex-col gap-6 flex-wrap md:flex-row">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 md:w-[416px] rounded-md shadow-lg"
            >
              <Link href={`/blog/${blog.id}`}>
                <div className="cursor-pointer">
                  <Image
                    src={blog.images[0]}
                    width={385}
                    height={253}
                    alt="blog img"
                  />
                  <div className="p-[15px]">
                    <p className="text-[#222] gap-1 flex items-center">
                      {blog.author} •{blog.date}
                    </p>
                    <h2 className="font-semibold text-[#222] text-2xl mt-4 mb-[30px]">
                      {blog.title}
                    </h2>
                    <p className="text-[#222] text-lg mb-[30px]">
                      {blog.text.substring(0, 100)}
                    </p>
                    <button className="text-[#FF5349] text-lg">
                      Read More
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-5 mt-[60px]">
          <a
            className="px-3 py-1 hover:bg-[#FF5349] hover:text-white w-8 flex justify-center bg-[#D3D3D3]"
            href="#"
          >
            1
          </a>
          <a
            className="px-3 py-1 hover:bg-[#FF5349] hover:text-white w-8 flex justify-center bg-[#D3D3D3]"
            href="#"
          >
            2
          </a>
          <a
            className="px-3 py-1 hover:bg-[#FF5349] hover:text-white w-8 flex justify-center bg-[#D3D3D3]"
            href="#"
          >
            {">"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
