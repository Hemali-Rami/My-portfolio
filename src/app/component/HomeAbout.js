"use client"; // Enable client-side interactivity
import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaWordpress,
  FaUniversalAccess,
  FaRocket,
  FaRobot,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useMobile from "./common/useMobile";
const HomeAbout = () => {
  const isMobile = useMobile();
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1280;
  const xValue = isTablet ? -10 : -100;
  const [mounted, setMounted] = useState(false);
  const highlights = [
    {
      icon: <FaCode className="text-blue-600 dark:text-white" />,
      title: "Frontend Development",
      desc: "React.js & Next.js",
    },
    {
      icon: <FaWordpress className="text-cyan-600 dark:text-white" />,
      title: "WordPress & Shopify",
      desc: "eCommerce Solutions",
    },
    {
      icon: <FaUniversalAccess className="text-green-600 dark:text-white" />,
      title: "Accessibility",
      desc: "WCAG Focused",
    },
    {
      icon: <FaRocket className="text-orange-500 dark:text-white" />,
      title: "Performance",
      desc: "Core Web Vitals",
    },
    {
      icon: <FaRobot className="text-purple-600 dark:text-white" />,
      title: "AI-Powered",
      desc: "Development Workflow",
    },
    {
      icon: <FaBriefcase className="text-pink-600 dark:text-white" />,
      title: "7+ Years",
      desc: "Industry Experience",
    },
  ];
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="xl:container m-auto px-[15px]">
      <div className="homeaboutpart section_space overflow-x-hidden">
        <div className="homeaboutmain flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse xxs:flex-col-reverse xxxs:flex-col-reverse">
          <motion.div
            className="aboutimagesec flex-1 lg:text-left md:text-left sm:text-center xs:text-center xxs:text-center xxxs:text-center"
            initial={isMobile ? {} : { opacity: 0, x: -100 }}
            whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
            viewport={isMobile ? {} : { once: true, amount: 0.3 }}
            transition={isMobile ? {} : { duration: 0.8, ease: "easeOut" }}
          >
            {/* <div className="aboutimg lg:pl-[40px] lg:pb-[40px] md:pl-[40px] md:pb-[40px] sm:p-[20px] xs:p-[20px] xxs:p-[20px] xxxs:p-[20px] m-auto">
              <Image
                src="/images/updated-my-photo.png"
                alt="About Me"
                width={400}
                height={480}
                className="border-[8px] border-white dark:border-[#111827]"
              />
              
            </div> */}
            <div className="grid grid-cols-2 gap-4 lg:max-w-[500px]">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#1F2937] border border-gray-200 dark:border-gray-700 rounded-2xl md:p-5 p-3 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 md:text-left text-center"
                >
                  <div
                    className="text-5xl mb-4 text-blue-600 dark:text-white md:block flex md:justify-start justify-center">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="aboutcontentpart flex-1"
            initial={isMobile ? {} : { opacity: 0, x: 0 }}
            whileInView={isMobile ? {} : { opacity: 1, x: xValue }}
            viewport={isMobile ? {} : { once: true, amount: 0.3 }}
            transition={isMobile ? {} : { duration: 0.8, ease: "easeOut" }}
          >
            <h5
              className="bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white
             mb-[24px]"
            >
              About me
            </h5>
            <h2 className="lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl xxs:text-2xl xxxs:text-2xl text-gray-900 font-semibold leading-[36px] mb-[24px]">
              Building Digital Experiences Since 2018
            </h2>
            <p>
              Senior Frontend Developer with 7+ years of experience building
              responsive,accessible, and high-performance web applications.
            </p>
            <p>
              Specialized in React.js, Next.js, JavaScript, Tailwind CSS,
              Bootstrap, WordPress, Shopify, and modern UI development.
            </p>
            <p>
              Built and customized responsive websites, landing pages, eCommerce
              storefronts, and user interfaces using WordPress, WooCommerce,
              Shopify, Drupal, Elementor, Spectra, and Avada.
            </p>
            <p>
              Focused on accessibility, performance optimization, SEO best
              practices, and AI-assisted development workflows.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
              <FaStar className="inline mr-2 text-pink-500" /> Quick Facts
            </h3>
            <ul className="grid md:grid-cols-2 gap-3 mt-4">
              <li className="w-full">7+ Years Building Digital Experiences</li>
              <li className="w-full">MCA Graduate & Lifelong Learner </li>
              <li className="w-full">
                React.js, Next.js & Modern Frontend Technologies
              </li>
              <li className="w-full">
                WordPress, Shopify & eCommerce Solutions
              </li>
              <li className="w-full">
                Accessibility & Performance-First Approach
              </li>
              <li className="w-full">AI-Powered Development Workflows</li>
              <li className="w-full">Pixel-Perfect UI Enthusiast</li>
              <li className="w-full">Mentor for Junior Developers</li>
              <li className="w-full">
                Passionate About UI/UX & Design Systems
              </li>
              <li className="w-full">Available for New Opportunities</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
