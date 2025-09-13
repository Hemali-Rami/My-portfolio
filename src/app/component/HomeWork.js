"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from './common/ThemeProvider';
import { motion } from 'framer-motion';
import useMobile from "./common/useMobile"; 

const companydes = [
  {
    name: "Concept Infoway",
    desc: "Developed a fully responsive business website using WordPress. implemented HTML,custom CSS and jQuery and their plugins to make for interactive elements.",
    techno: ["HTML5","CSS","jQuery","Bootstrap","Wordpress"],
    wimg: "CIPL_website",
    wLink: "https://www.conceptinfoway.net/"
  },
  {
    name: "Moontechnolabs",
    desc: "Developed a fully responsive company website with a custom design. The website showcases various services and products, built using the latest technologies to ensure performance, accessibility, and cross-browser compatibility.",
    techno: ["HTML5","CSS","jQuery","Bootstrap"],
    wimg: "moontechnolabs",
    wLink: "https://www.moontechnolabs.com/"
  },
  {
    name: "Mooninvoice",
    desc: "Developed a fully responsive company product website showcasing various business operations, including invoices, estimates, purchase orders, sales receipts, time tracking, reports, and project management. The website was built with fully custom modules to meet specific business needs.",
    techno: ["HTML5","CSS","Javascript","Bootstrap"],
    wimg: "moon_invoice",
    wLink: "https://www.mooninvoice.com/"
  },
  {
    name: "allDayDR",
    desc: "Developed a fully responsive company website for the healthcare industry, facilitating online consultations between doctors, pharmacists, and patients. The website was built using WordPress to ensure flexibility and ease of content management.",
    techno: ["HTML5","CSS","Javascript","Bootstrap","Wordpress"],
    wimg: "alldayDR",
    wLink: "https://www.alldaydr.com/home"
  },
  {
    name: "Applocum",
    desc: "Developed a fully responsive company website for recruiting doctors and medical staff. The website highlights vacancies, services, and industry news. AppLocum streamlines the locum staffing process by leveraging technology, combining the expertise of seasoned consultants and experienced clinicians to support the healthcare industry’s staffing needs.",
    techno: ["HTML5","CSS","Javascript","Bootstrap","Wordpress"],
    wimg: "applocum",
    wLink: "https://www.applocum.com/"
  },
  {
    name: "ADDVantage Technologies",
    desc: "Developed a fully responsive company website to showcase product information, team details, and digital healthcare solutions. The platform delivers bespoke, secure, and intuitive technology solutions tailored to the healthcare industry.",
    techno: ["HTML5","CSS","Javascript","Bootstrap","NextJS"],
    wimg: "adddvsolution",
    wLink: "https://addvantage-technologies.co.uk/"
  },
  {
    name: "healthya",
    desc: "Developed a fully responsive website using Elementor to showcase health management solutions. The platform features a user-friendly self-service kiosk for quick well-being monitoring, the Healthya app for online consultations and self-assessment tools, and data-driven insights for targeted interventions, care coordination, and public health strategy improvements.",
    techno: ["HTML5","CSS","Javascript","Bootstrap","WordPress","Elementor"],
    wimg: "healthya",
    wLink: "https://www.healthya.co.uk/"
  },
];

const HomeWork = () => {
  const { darkMode } = useTheme(); 
  const isMobile = useMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='lg:container m-auto px-[15px]'>
      <div className="workpart section_space pb-0 overflow-x-hidden">
        <div className='text-center'>
          <h5 className='bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white'>Work</h5>
          <p className='text-gray-600 text-[20px] mt-[16px] block dark:text-[#D1D5DB]'>Some of the noteworthy projects I have built:</p>
        </div>

        <div className='workmain inner_space'>
          {companydes.map((co, index) => {
            const isEven = index % 2 === 0;

            // Animation direction
            const initialAnim = isMobile
              ? {}
              : { opacity: 0, x: isEven ? -100 : 100 };
            const whileInViewAnim = isMobile
              ? {}
              : { opacity: 1, x: 0 };

            const parentClass = isEven
              ? "lg:flex lg:flex-row md:flex"
              : "lg:flex lg:flex-row-reverse md:flex";

            return (
              <motion.div
                key={index}
                className={`workbox ${parentClass} md:flex md:flex-col sm:flex-col xs:flex-col xxs:flex-col xxxs:flex-col shadow-md rounded-md lg:mb-[48px] md:mb-[30px] sm:mb-[24px] xs:mb-[24px] xxs:mb-[24px] xxxs:mb-[24px] overflow-hidden`}
                initial={initialAnim}
                whileInView={whileInViewAnim}
                viewport={isMobile ? {} : { once: true, amount: 0.3 }}
                transition={isMobile ? {} : { duration: 0.8, ease: "easeOut" }}
              >
                <div className='projectimg flex-1 bg-gray-50 dark:bg-[#374151] lg:p-[48px] md:p-[42px] sm:p-[32px] xs:p-[32px] xxs:p-[32px] xxxs:p-[32px] flex items-center'>
                  <Image src={`/images/website/${co.wimg}.png`} alt={co.name} width={480} height={384} className='rounded-md w-full lg:h-full md:h-auto sm:h-auto xs:h-auto xxs:h-auto xxxs:h-auto'/>
                </div>

                <div className='companydetails flex-1 lg:p-[48px] md:p-[42px] sm:p-[32px] xs:p-[32px] xxs:p-[32px] xxxs:p-[32px] dark:bg-[#1F2937]'>
                  <h4 className='text-gray-900 text-md font-semibold mb-[24px] dark:text-white'>{co.name}</h4>
                  <p className='text-gray-600 text-base mb-[24px] dark:text-white'>{co.desc}</p>
                  <ul className='flex mb-[24px] flex-wrap'>
                    {co.techno.map((tec, i) => (
                      <li key={i} className='bg-gray-200 px-[20px] py-[4px] text-gray-600 text-base font-medium rounded-full mr-[8px] mb-[8px] dark:bg-[#374151] dark:text-white'>{tec}</li>
                    ))}
                  </ul>
                  <Link href={co.wLink} target='_blank'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13V19C18 19.53 17.79 20.04 17.41 20.41C17.04 20.79 16.53 21 16 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V8C3 7.47 3.21 6.96 3.59 6.59C3.96 6.21 4.47 6 5 6H11" stroke={darkMode ? "#fff" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke={darkMode ? "#fff" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke={darkMode ? "#fff" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeWork;
