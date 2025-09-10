"use client"; // Enable client-side interactivity
import Image from 'next/image';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import { useTheme } from './ThemeProvider';
import { Link as ScrollLink,scroller } from "react-scroll";


const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme(); 
  const[ismenuOpen,setmenuOpen]=useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu=()=>{
    setmenuOpen(!ismenuOpen);

    //menutoggle code for body tag
    if(document.body.classList.contains("menu_open")){
        document.body.classList.remove("menu_open");
    }else{
        document.body.classList.add("menu_open");
    }
}
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 
  return (
    <header className={`headerwrap ${
      isScrolled ? "shadow-md bg-white dark:bg-[#111827] fixed top-0 left-0 w-full z-10 transition-all duration-300" : "shadow-none"
    }`}>
      <div className='lg:container m-auto px-[15px]'>
        <div className='headerpart flex justify-between items-center py-4'>
          <div className='logo lg:w-full md:w-full sm:w-[120px] xs:w-[120px] xxs:w-[120px] xxxs:w-[120px]'>
            <Link href="#">
              {darkMode ? (
                <Image src="/images/light_main_logo.svg" width={200} height={20} alt="Hemali Rami" className='max-w-full' />
              ):(
                <Image src="/images/Hemali_logo.svg" width={200} height={20} alt="Hemali Rami" className='max-w-full' />
              )
            }
            </Link>
          </div>
          <div className='menutoggle lg:hidden md:hidden sm:block xs:block xxs:block xxxs:block'>
                    {darkMode ? (
                      <button onClick={toggleMenu} className={`${ismenuOpen ? "hidden":""}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12H20" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 6H20" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 18H20" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    ):(
                      <button onClick={toggleMenu} className={`${ismenuOpen ? "hidden":""}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 12H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 6H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M4 18H20" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      )
                    }
                    
                  </div>
          
              <div className={`lg:flex md:flex sm:block items-center lg:left-0 md:left-0 mobilemenu justify-end ${ ismenuOpen ? "md:left-0 sm:left-0 xs:left-0 xxs:left-0 xxxs:left-0 transition-all duration-300" : "sm:left-[-100%] xs:left-[-100%] xxs:left-[-100%] xxxs:left-[-100%] sm:transition-all sm:duration-300 xs:transition-all xs:duration-300 xxs:transition-all xxs:duration-300 xxxs:transition-all xxxs:duration-300 "}`}>
                <div className='mobileheader lg:hidden md:hidden sm:flex xs:flex xxs:flex xxxs:flex sm:justify-between xs:justify-between xxs:justify-between xxxs:sm:justify-between pt-[16px] pb-[20px]'>
                  <div className='logo lg:w-full md:w-full sm:w-[120px] xs:w-[120px] xxs:w-[120px] xxxs:w-[120px]'>
                    {darkMode ? (
                      <Image src="/images/light_main_logo.svg" width={200} height={20} alt="Hemali Rami" className='max-w-full'/>
                    ):(
                      <Image src="/images/Hemali_logo.svg" width={200} height={20} alt="Hemali Rami" className='max-w-full'/>
                    )
                  }
                </div>
                <div className='menutoggle'>
                {darkMode ? (
                  <button onClick={toggleMenu} className={`${ismenuOpen ? "":"hidden"}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ):(
                  <button onClick={toggleMenu} className={`${ismenuOpen ? "":"hidden"}`}>                   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 6L18 18" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )
                }
              </div>
                </div>
              <div className='mainmenupart'>
                <nav role='navigation' aria-label="Main menu">
                  <ul className='lg:flex md:flex sm:block'>
                    <li className='xl:px-[24px] md:px-[10px] sm:px-[5px]'>
                    {/* <Link href="#" className='menulinks'>About</Link> */}
                      <ScrollLink
                        to="about"
                        smooth="easeInOutQuad"
                        duration={800}
                        offset={-96}
                        activeClass="active" // This adds the 'active' class when the section is in view
                        spy={true}
                        role="link"
                        tabIndex={0}
                        onClick={() => {
                          setmenuOpen(false); 
                          document.body.classList.remove("menu_open"); 
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            scroller.scrollTo('about', {
                              smooth: 'easeInOutQuad',
                              duration: 800,
                              offset: -96,
                            });
                          }
                        }}
                        className="menulinks cursor-pointer">
                          About
                      </ScrollLink>
                    </li>
                    <li className='xl:px-[24px] md:px-[10px] sm:px-[5px]'>
                      {/* <Link href="#" className='menulinks'>Skills</Link> */}
                      <ScrollLink
                        to="skills"
                        smooth="easeInOutQuad"
                        duration={800}
                        offset={-96}
                        activeClass="active" // This adds the 'active' class when the section is in view
                        spy={true}
                        role="link"
                        tabIndex={0}
                         onClick={() => {
                          setmenuOpen(false); 
                          document.body.classList.remove("menu_open"); 
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            scroller.scrollTo('skills', {
                              smooth: 'easeInOutQuad',
                              duration: 800,
                              offset: -96,
                            });
                          }
                        }}
                        className="menulinks cursor-pointer">
                          Skills
                      </ScrollLink>
                      </li>
                      <li className='xl:px-[24px] md:px-[10px] sm:px-[5px]'>
                      {/* <Link href="#" className='menulinks'>Experience</Link> */}
                        <ScrollLink
                          to="experince"
                          smooth="easeInOutQuad"
                          duration={800}
                          offset={-96}
                          activeClass="active" // This adds the 'active' class when the section is in view
                          spy={true}
                          role="link"
                          tabIndex={0}
                           onClick={() => {
                          setmenuOpen(false); 
                          document.body.classList.remove("menu_open"); 
                        }}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              scroller.scrollTo('experince', {
                                smooth: 'easeInOutQuad',
                                duration: 800,
                                offset: -96,
                              });
                            }
                          }}
                          className="menulinks cursor-pointer">
                            Experience
                        </ScrollLink>
                    </li>
                    <li className='xl:px-[24px] md:px-[10px] sm:px-[5px]'>
                      {/* <Link href="#" className='menulinks'>Work</Link> */}
                      <ScrollLink
                        to="work"
                        smooth="easeInOutQuad"
                        duration={800}
                        offset={-96}
                        activeClass="active" // This adds the 'active' class when the section is in view
                        spy={true}
                         onClick={() => {
                          setmenuOpen(false); 
                          document.body.classList.remove("menu_open"); 
                        }}
                        role="link"
                          tabIndex={0}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              scroller.scrollTo('work', {
                                smooth: 'easeInOutQuad',
                                duration: 800,
                                offset: -96,
                              });
                            }
                          }}
                        className="menulinks cursor-pointer">
                          Work
                      </ScrollLink>
                    </li>
                   
                    <li className='xl:px-[24px] md:px-[10px] sm:px-[5px]'>
                      {/* <Link href="#" className='menulinks'>Contact</Link> */}
                      <ScrollLink
                        to="contact"
                        smooth="easeInOutQuad"
                        duration={800}
                        offset={0}
                        activeClass="active"
                        spy={true}
                        role="link"
                        tabIndex={0}
                         onClick={() => {
                          setmenuOpen(false); 
                          document.body.classList.remove("menu_open"); 
                        }}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            scroller.scrollTo('contact', {
                              smooth: 'easeInOutQuad',
                              duration: 800,
                              offset: 0,
                            });
                          }
                        }}
                        className="menulinks cursor-pointer">
                          Contact
                      </ScrollLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className='headerbtn lg:flex md:flex items-center gap-3 lg:ml-[48px] md:ml-[20px] sm:ml-[10px] '>
                <div className='labelbtn flex items-center justify-between lg:mb-0 md:mb-0 sm:mb-[22px] xs:mb-[22px] xxs:mb-[22px] xxxs:mb-[22px]'>
                  <label className='text-[16px] text-gray-600 lg:hidden md:hidden sm:block dark:text-white'>Switch Theme</label>
                <button onClick={toggleDarkMode}>
                  {darkMode ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 3V7" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 5H17" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    ):(
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V4" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 20V22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4.92993 4.92999L6.33993 6.33999" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.6599 17.66L19.0699 19.07" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H4" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M20 12H22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6.33993 17.66L4.92993 19.07" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.0699 4.92999L17.6599 6.33999" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>)}
                  </button>
                </div>
                <Link className='btn btn_primary lg:ml-[16px] md:ml-[10px] text-sm lg:w-auto md:w-auto sm:w-full xs:w-full xxs:w-full xxxs:w-full min-w-[146px] text-center inline-block' href="https://drive.google.com/file/d/1xRWG6xuK8yYY6KhKxSsQqaeFcBCGEnOy/view?usp=sharing" target='_blank'>Download CV</Link>
              </div>
              </div>
        </div>
      </div>
    </header>
  )
}

export default Header