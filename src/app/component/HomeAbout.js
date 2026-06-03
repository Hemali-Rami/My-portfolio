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
                    <p>I'm a passionate and self-driven <strong>Senior Frontend Developer</strong> with <strong>7+ years</strong> of experience creating responsive, accessible, and high-performance websites and web applications.</p>
                    <p>My journey in frontend development started in 2018, and over the years, I have honed my skills in UI/UX design, design systems, and modern frontend technologies including <strong>React.js, Next.js, Angular, HTML5, CSS3, SCSS, JavaScript, Tailwind CSS, and Bootstrap</strong>. I focus on building pixel-perfect user interfaces that deliver exceptional user experiences across all devices and browsers.</p>
                    <p>Beyond web application development, I have extensive experience creating Email Templates, Email Signatures, Newsletters, PDF layouts, and designing websites for <strong>WordPress, WooCommerce, Shopify, Drupal, and custom PHP platforms using Elementor, Spectra, and Avada</strong>. I also ensure <strong>web accessibility, performance optimization, SEO best practices, and cross-browser compatibility</strong> in every project.</p>
                    <p>To enhance productivity and streamline development workflows, I leverage <strong>AI-powered tools</strong> such as <strong>ChatGPT, GitHub Copilot, Claude, and Gemini</strong> for code generation, debugging, documentation, and UI implementation.</p>
                    <p>When I'm not building digital experiences, I enjoy exploring emerging technologies, AI-assisted development, accessibility standards, and the latest frontend trends.</p>
                    <p>Quick Facts About Me</p>
                    <ul>
                        <li>7+ Years Building Digital Experiences</li>
                        <li>MCA Graduate & Lifelong Learner </li>
                        <li>React.js, Next.js & Modern Frontend Technologies</li>
                        <li>WordPress, Shopify & eCommerce Solutions</li>
                        <li>Accessibility & Performance-First Approach</li>
                        <li>AI-Powered Development Workflows</li>
                        <li>Pixel-Perfect UI Enthusiast</li>
                        <li>Mentor for Junior Developers</li>
                        <li>Passionate About UI/UX & Design Systems</li>
                        <li>Available for New Opportunities</li>
                    </ul>
                    <p>I'm always open to exciting opportunities, so feel free to <strong>Reach out</strong> if you need a skilled web designer for your next project. Let's create something amazing together! 😊</p>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout