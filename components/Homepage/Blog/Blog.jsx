import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../../data/blog";

const Blog = () => {
  return (
    <div className="bg-[#F9F9F9] bg-[url('/images/blog/bg.png')] bg-contain bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[115px] pb-16 md:pb-[277px]">
        <div className="flex justify-center">
          <div className="max-w-[640px] text-center">
            <h5 className="text-2xl font-semibold text-[#FF5349]">Blog</h5>
            <h2 className="text-4xl md:text-[57px] font-bold leading-tight text-[#222] mt-4 md:mt-[20px] mb-2">
              Our Latest <span className="text-[#FF5349]">Articles</span>
            </h2>
            <p className="text-lg mb-10 md:mb-[60px] text-[#222]">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="flex mx-2 flex-col gap-5 justify-center xl:justify-between flex-wrap md:flex-row">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white px-4 pt-4 pb-2 md:w-[410px] rounded-md shadow-lg"
            >
              <Image
                src={blog.images[0]}
                width={385}
                height={253}
                alt="blog img"
                className="zoom"
              />
              <div className="p-[15px]">
                <p className="text-[#222] mt-1 gap-1 flex items-center">
                  {blog.author} •{blog.date}
                </p>
                <h5 className="font-semibold text-[#222] text-2xl mt-1 mb-[22px]">
                  {blog.title}
                </h5>
                <p className="text-[#222] text-lg mb-[20px]">
                  {blog.text.substring(0, 100)}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <a className="text-[#1A4DBE] text-lg">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
