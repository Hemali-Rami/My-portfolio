"use client"; // Enable client-side interactivity
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import useMobile from "./common/useMobile";
const HomeAbout = () => {     
     const isMobile = useMobile();
     const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
     const xValue = isTablet ? -10 : -100;
      const [mounted, setMounted] = useState(false);
            useEffect(() => {
         setMounted(true);
       }, []);
     
       if (!mounted) return null;
  return (
    <div className='xl:container m-auto px-[15px]'>
        <div className='homeaboutpart section_space overflow-x-hidden'>
            <div className='text-center'>
                <h5 className='bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white'>About me</h5>
            </div>
            <div className='homeaboutmain flex inner_space lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col xxxs:flex-col'>
                <motion.div className='aboutimagesec flex-1 lg:text-left md:text-left sm:text-center xs:text-center xxs:text-center xxxs:text-center' initial={ isMobile ? {} : { opacity: 0, x: -100 }}
        whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
        viewport={isMobile ? {} : { once: true, amount: 0.3 }}
        transition={isMobile ? {} : { duration: 0.8, ease: "easeOut" }}>
                    <div className='aboutimg lg:pl-[40px] lg:pb-[40px] md:pl-[40px] md:pb-[40px] sm:p-[20px] xs:p-[20px] xxs:p-[20px] xxxs:p-[20px] m-auto'>
                        <Image src="/images/new_about_one.jpeg" alt='About Me' width={400} height={480} className='border-[8px] border-white dark:border-[#111827]'/>
                    </div>
                </motion.div>
                <motion.div className='aboutcontentpart flex-1' initial={isMobile ? {} : { opacity: 0, x: 0 }}
                    whileInView={isMobile ? {} : { opacity: 1, x: xValue }}
                    viewport={isMobile ? {} : { once: true, amount: 0.3 }}
                    transition={isMobile ? {} : { duration: 0.8, ease: "easeOut" }}>
                    <h2 className='lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl xxs:text-2xl xxxs:text-2xl text-gray-900 font-semibold leading-[36px] mb-[24px]'>Curious about me? Here you have it:</h2>
                    <p>I'm a passionate, self-driven <strong>Web Designer</strong> specializing in crafting beautiful, functional, and user-friendly digital experiences. With expertise in <strong>HTML, CSS, SCSS, Tailwind CSS, and Bootstrap (3, 4, and 5)</strong>, I focus on creating pixel-perfect, responsive, and accessible designs that work across all browsers.</p>
                    <p>My journey in web design started in <strong>2018</strong>, and over the past <strong>5+ years</strong>, I have honed my skills in <b>design systems, UI/UX principles, and front-end styling</b>. I have experience working with various design tools and frameworks, ensuring that every project I work on meets the highest visual and accessibility standards.</p>
                    <p>Beyond traditional web design, I have worked on <strong>Email Templates, Email Signatures, Newsletters, PDF design</strong>, and designing for CMS platforms like <strong>WordPress (Elementor, Avada) and Angular projects</strong>. I also have experience in building and styling <b>React and Next.js applications</b>, ensuring seamless UI implementation.</p>
                    <p>When I'm not designing, I love exploring the latest trends in UI/UX, accessibility, and modern front-end technologies.</p>
                    <p>Quick Facts About Me</p>
                    <ul>
                        <li>Master of Computer Applications</li>
                        <li>Bechlor of Computer Applications </li>
                        <li>Web Design & Front-End Styling</li>
                        <li>UI/UX, Responsive Design, Accessibility</li>
                        <li>Yes, open for projects!</li>
                    </ul>
                    <p>I'm always open to exciting opportunities, so feel free to <strong>Reach out</strong> if you need a skilled web designer for your next project. Let's create something amazing together! 😊</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout