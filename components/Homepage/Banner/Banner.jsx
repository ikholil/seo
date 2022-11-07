import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <header className='relative bg-[#FFFDFA] -z-10 '>
            <div className="bg-[url('/images/banner/bg.png')]  bg-no-repeat  bg-right">
                <div className='max-w-[1296px] grid grid-cols-12 mx-auto pt-[120px] md:pt-[207px] pb-20 md:pb-[200px] '>
                    <div className='col-span-12 md:col-span-7 mx-2 xl:mx-0'>
                        <h3 className='text-[32px] font-semibold text-[#FF5349] mb-[6px]'>Digital Marketing</h3>
                        <h1 className='text-5xl mb-1 md:text-[76px] font-bold leading-tight text-[#222]'>Grow Your Business With <span className='text-[#FF5349]'>Us.</span> </h1>
                        <p className='text-2xl text-[#222222] mb-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis mattis dui eget vestibulum id et.
                        </p>
                        <button className='text-white text-lg px-6 shadow-lg shadow-[#ff524987] py-3 rounded-lg bg-gradient-to-r from-[#FF9300] to-[#FF5349]'>Get Started Now</button>
                    </div>
                </div>
                <div className='absolute -bottom-2 left-0'>
                    <Image src='/images/banner/shape.png' height={306} width={406} alt="banner shape" />
                </div>
            </div>
        </header>
    );
};

export default Banner;