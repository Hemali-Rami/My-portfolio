import Image from 'next/image';
import React from 'react'
const experience = [
  {
    title: "Front End Designer",
    fromto: "Dec 2022 - Jun 2024",
    cimg:"ADDV_healthcare_solutions",
    desc: [
      "Worked on live projects using React.js and Next.js.",
      "Experienced in HTML5, CSS,Bootstrap 4-5,JavaScript, SCSS, and developing responsive, cross-browser compatible websites with web accessibility features.",
      "Expertise in creating PDF templates, email templates, and email signatures.",
      "Worked on WordPress projects, including developing CMS pages and SEO-friendly pages using both WordPress core and Elementor."
    ],
  },
  {
    title:"Frontend Web Designer",
    fromto:"June 2021 - Aug 2022",
    cimg:"moon_new_logo",
    desc:[
      "Worked on AngularJS projects for in-house products.",
      "Developed simple landing pages using HTML5, CSS, and jQuery.",
      "Worked on and assisted in developing WooCommerce websites.",
      "Maintained legacy projects, ensuring cross-browser compatibility and responsiveness on various devices.",
    ],
  },
  {
    title:"Jr. XHTML Developer",
    fromto:"Oct 2018 - Mar 2021",
    cimg:"cipl_Logo",
    desc:[
      "Worked with and gained experience in HTML5, CSS, and jQuery technologies.",
      "Assisted in designing WordPress, WooCommerce, and PHP projects.",
      "Designed various types of email templates.",
      "Created simple landing pages based on client requirements.",
    ]
  }
];

const HomeExperience = () => {
  return (
    <div className='lg:container m-auto px-[15px]'>
        <div className='experincepart section_space'>
            <div className='text-center'>
                <h5 className='bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white'>Experience</h5>
                <p className='text-gray-600 text-[20px] mt-[16px] block dark:text-[#D1D5DB]'>Here is a quick summary of my most recent experiences:</p>
            </div>
            <div className='exprincemain inner_space'>
              {
                experience.map((exp,index)=>{
                  return(
                    <div className='experincebox lg:flex md:flex sm:flex lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col xxxs:flex-col shadow-md rounded-md p-[32px] lg:mb-[48px] md:mb-[30px] sm:mb-[24px] xs:mb-[24px] xxs:mb-[24px] xxxs:mb-[24px] dark:bg-[#1F2937]' key={index}>
                      <div className='companylogo lg:w-[40%] md:w-[40%] sm:w-[40%] xs:w-full xxs:w-full xxxs:w-full'>
                        <div className='bg-white p-3 rounded-lg inline-block'>
                          <Image src={`/images/company/${exp.cimg}.svg`} alt={exp.title} width={200} height={45}></Image>
                        </div>
                      </div>
                      <div className='companydec lg:w-[60%] md:w-[60%] sm:w-[60%] xs:w-full xxs:w-full xxxs:w-full'>
                        <div className='contenthead lg:flex md:flex sm:flex justify-between mb-3'>
                          <h3 className='text-xl text-gray-900 font-semibold dark:text-white lg:mt-0 md:mt-0 sm:mt-0 xs:mt-[16px] xxs:mt-[16px] xxxs:mt-[16px]'>{exp.title}</h3>
                          <span className='fromto text-base text-gray-600 dark:text-white lg:mt-0 md:mt-0 sm:mt-0 xs:mt-[16px] xxs:mt-[16px] xxxs:mt-[16px] block'>{exp.fromto}</span>
                        </div>
                        <div className='expdescription lg:w-[60%] md:w-full sm:w-full'>
                          <ul>
                            {
                              exp.desc?.map((dec,index)=>{
                                return(
                                  <li key={index} className='text-base text-gray-600 leading-[28px] mb-2'>{dec}</li>
                                )
                              })
                            } 
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
        </div>
    </div>
  )
}

export default HomeExperience