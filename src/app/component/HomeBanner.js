"use client"; // Enable client-side interactivity
import Image from 'next/image'
import React from 'react'
import { useTheme } from './common/ThemeProvider';

const HomeBanner = () => {
    const { darkMode } = useTheme(); 
  return (
    <div className='lg:container m-auto px-[15px]'>
        <div className='bannerpart flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse xxxs:flex-col-reverse flex-wrap section_space'>
            <div className='bannerleft lg:w-[60%] md:w-[60%] sm:w-full xs:w-full xxs:w-full xxxs:w-full lg:pr-[48px] md:pr-[48px] sm-pr-0 xs:pr-0 xxs:pr-0 xxxs:pr-0 lg:mt-0 md:mt-0 sm:mt-[28px] xs:mt-[28px] xxs:mt-[28px] xxxs:mt-[28px]'>
                <h1 className='lg:text-[60px] md:text-[45px] sm:text-[36px] xs:text-[36px] xxs:text-[36px] xxxs:text-[36px] font-bold text-gray-900 dark:text-[#F9FAFB]'>Hi, I’m Hemali👋</h1>
                <p className='text-gray-600 text-md mt-1 leading-[28px] dark:text-[#D1D5DB]'>A passionate web designer with expertise in React.js, Next.js, WordPress (Elementor & Avada), Angular, and web accessibility. I specialize in HTML, CSS, SCSS, Bootstrap, and Tailwind CSS, ensuring that every website, email template, newsletter, and signature I create is visually compelling, responsive, and accessible to all users.</p>
                <div className='location flex items-center mt-[48px]'>
                    {darkMode ? (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>):(
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    )}
                    
                    <span aria-label="Location" className='ml-[8px] block'>Ahmedabad, India</span>
                </div>
                <span className='projectline text-gray-600 mt-[8px] block relative pl-[32px] dark:text-[#D1D5DB]'>Available for new projects</span>
            </div>
            <div className='bannerright lg:w-[40%] md:w-[40%] sm:w-full xs:w-full xxs:w-full xxxs:w-full flex lg:justify-end md:justify-end sm:justify-center xs:justify-center xxs:justify-center xxxs:justify-center'>
                <div>
                    <div className='bannerimg lg:pr-[40px] lg:pb-[40px] md:pr-[40px] md:pb-[40px] sm:p-[20px] xs:p-[20px] xxs:p-[20px] xxxs:p-[20px]'>
                        <Image src="/images/my_photo_blur.png" alt="Portrait of Hemali Rami" width={280} height={320} className='border-[8px] border-white dark:border-[#030712]' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner