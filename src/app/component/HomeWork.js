"use client"; // Enable client-side interactivity
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTheme } from './common/ThemeProvider';
const companydes=[
    {
        name:"Concept Infoway",
        desc:"Developed a fully responsive business website using WordPress. implemented HTML,custom CSS and jQuery and their plugins to make for interactive elements.",
        techno:["HTML5","CSS","jQuery","Bootstrap","Wordpress"],
        wimg:"CIPL_website",
        wLink:"https://www.conceptinfoway.net/"
    },
    {
        name:"Moontechnolabs",
        desc:"Developed a fully responsive company website with a custom design. The website showcases various services and products, built using the latest technologies to ensure performance, accessibility, and cross-browser compatibility.",
        techno:["HTML5","CSS","jQuery","Bootstrap"],
        wimg:"moontechnolabs",
        wLink:"https://www.moontechnolabs.com/"
    },
    {
        name:"Mooninvoice",
        desc:"Developed a fully responsive company product website showcasing various business operations, including invoices, estimates, purchase orders, sales receipts, time tracking, reports, and project management. The website was built with fully custom modules to meet specific business needs.",
        techno:["HTML5","CSS","Javascript","Bootstrap"],
        wimg:"moon_invoice",
        wLink:"https://www.mooninvoice.com/"
    },
    {
        name:"allDayDR",
        desc:"Developed a fully responsive company website for the healthcare industry, facilitating online consultations between doctors, pharmacists, and patients. The website was built using WordPress to ensure flexibility and ease of content management.",
        techno:["HTML5","CSS","Javascript","Bootstrap","Wordpress"],
        wimg:"alldayDR",
        wLink:"https://www.alldaydr.com/home"
    },
    {
        name:"Applocum",
        desc:"Developed a fully responsive company website for recruiting doctors and medical staff. The website highlights vacancies, services, and industry news. AppLocum streamlines the locum staffing process by leveraging technology, combining the expertise of seasoned consultants and experienced clinicians to support the healthcare industry’s staffing needs.",
        techno:["HTML5","CSS","Javascript","Bootstrap","Wordpress"],
        wimg:"applocum",
        wLink:"https://www.applocum.com/"
    },
    {
        name:"ADDVantage Technologies",
        desc:"Developed a fully responsive company website to showcase product information, team details, and digital healthcare solutions. The platform delivers bespoke, secure, and intuitive technology solutions tailored to the healthcare industry.",
        techno:["HTML5","CSS","Javascript","Bootstrap","NextJS"],
        wimg:"adddvsolution",
        wLink:"https://addvantage-technologies.co.uk/"
    },
    {
        name:"healthya",
        desc:"Developed a fully responsive website using Elementor to showcase health management solutions. The platform features a user-friendly self-service kiosk for quick well-being monitoring, the Healthya app for online consultations and self-assessment tools, and data-driven insights for targeted interventions, care coordination, and public health strategy improvements.",
        techno:["HTML5","CSS","Javascript","Bootstrap","WordPress","Elementor"],
        wimg:"healthya",
        wLink:"https://www.healthya.co.uk/"
    },
]
const HomeWork = () => {
    const { darkMode } = useTheme(); 
  return (
    <div className='lg:container m-auto px-[15px]'>
        <div className="workpart section_space pb-0">
             <div className='text-center'>
                <h5 className='bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white'>Work</h5>
                <p className='text-gray-600 text-[20px] mt-[16px] block dark:text-[#D1D5DB]'>Some of the noteworthy projects I have built:</p>
            </div>
            <div className='workmain inner_space'>
                {
                    companydes.map((co,index)=>{
                        const parentClass = index % 2 !== 0 ? "lg:flex lg:flex-row-reverse md:flex" : "flex";
                        return(
                            <div className={`workbox lg:flex lg:flex-row md:flex md:flex-col sm:flex-col xs:flex-col xxs:flex-col xxxs:flex-col shadow-md rounded-md lg:mb-[48px] md:mb-[30px] sm:mb-[24px] xs:mb-[24px] xxs:mb-[24px] xxxs:mb-[24px] overflow-hidden ${parentClass}`} key={index}>
                                <div className='projectimg flex-1 bg-gray-50 dark:bg-[#374151] lg:p-[48px] md:p-[42px] sm:p-[32px] xs:p-[32px] xxs:p-[32px] xxxs:p-[32px] flex items-center'>
                                    <Image src={`/images/website/${co.wimg}.png`} alt={co.name} width={480} height={384} className='rounded-md w-full lg:h-full md:h-auto sm:h-auto xs:h-auto xxs:h-auto xxxs:h-auto'/>
                                </div>
                                <div className='companydetails flex-1 lg:p-[48px] md:p-[42px] sm:p-[32px] xs:p-[32px] xxs:p-[32px] xxxs:p-[32px] dark:bg-[#1F2937]'>
                                    <h4 className='text-gray-900 text-md font-semibold mb-[24px]  dark:text-white'>{co.name}</h4>
                                    <p className='text-gray-600 text-base mb-[24px] dark:text-white'>{co.desc}</p>
                                    <ul className='flex mb-[24px] flex-wrap'>
                                    {
                                        co.techno?.map((tec, index) => {
                                            return (
                                                <li key={index} className='bg-gray-200 px-[20px] py-[4px] text-gray-600 text-base font-medium rounded-full mr-[8px] mb-[8px] dark:bg-[#374151] dark:text-white'>{tec}</li>
                                            );
                                        })
                                    }
                                    </ul>
                                    {
                                        darkMode?(
                                            <Link href={co.wLink} target='_blank'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 3H21V9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10 14L21 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Link>
                                        ):(
                                            <Link href={co.wLink} target='_blank'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M15 3H21V9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M10 14L21 3" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </Link>
                                        )
                                    }
                                   
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default HomeWork