"use client"; // Enable client-side interactivity
import React,{useState} from 'react'
import { useTheme } from './common/ThemeProvider';
import Link from 'next/link'
const HomeContact = () => {
    const { darkMode } = useTheme(); 
    const [copiedField, setCopiedField] = useState(null);
      // Function to copy text
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    // Reset after 2 seconds
    setTimeout(() => setCopiedField(null), 2000);
  };
  return (
    <div className='lg:container m-auto px-[15px]'>
        <div className='getintouch section_space'>
            <div className='text-center'>
                <h5 className='bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white'>Get in touch</h5>
                <p className='text-gray-600 text-[20px] mt-[16px] block dark:text-[#D1D5DB] lg:max-w-[576px] md:max-w-[576px] sm:max-w-full xs:max-w-full xxs:max-w-full xxxs:max-w-full m-auto'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            </div>
            <div className='contactdetails inner_space'>
                <div className='emaildetails flex items-center justify-center gap-4 mb-[18px]'>
                    <Link href="emailto:hemalirami07@gmail.com" className='flex items-center justify-center gap-3'>
                        <div className='eicon'>
                            {darkMode?(
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            ):(
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                        <span className='text-gray-900 lg:text-[36px] md:text-[32px] sm:text-[28px] xs:text-[18px] xxs:text-[18px] xxxs:text-[18px] font-semibold dark:text-white'>hemalirami07@gmail.com</span>
                    </Link>
                    <button className='copy_icon' onClick={() => copyToClipboard("hemalirami07@gmail.com", "email")} >
                        {copiedField === "email" ? ( 
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                            </svg>
                        ):(              
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z" stroke={darkMode ? "#fff" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317" stroke={darkMode ? "#fff" : "#4B5563"}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                </div>
                <div className='contactdetails flex items-center justify-center gap-4 mb-[50px]'>
                    <Link href="tel:8758875669" className='flex items-center justify-center gap-3'>
                        <div className='picon'>
                            {darkMode?(
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            ):(
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3334 22.56V26.56C29.3349 26.9313 29.2589 27.2989 29.1101 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1959 28.7868 27.8728 28.9779 27.5211 29.0969C27.1693 29.2159 26.7966 29.2601 26.4267 29.2266C22.3239 28.7808 18.3827 27.3788 14.9201 25.1333C11.6985 23.0862 8.96719 20.3549 6.92007 17.1333C4.66671 13.6549 3.2644 9.69463 2.82674 5.5733C2.79342 5.20459 2.83724 4.83298 2.95541 4.48213C3.07357 4.13128 3.2635 3.80889 3.51309 3.53546C3.76269 3.26204 4.06648 3.04358 4.40513 2.894C4.74378 2.74441 5.10986 2.66698 5.48007 2.66663H9.48007C10.1271 2.66026 10.7545 2.8894 11.2451 3.31134C11.7357 3.73328 12.0562 4.31923 12.1467 4.95997C12.3156 6.24006 12.6287 7.49694 13.0801 8.70663C13.2595 9.18387 13.2983 9.70252 13.1919 10.2011C13.0856 10.6998 12.8386 11.1574 12.4801 11.52L10.7867 13.2133C12.6848 16.5514 15.4487 19.3152 18.7867 21.2133L20.4801 19.52C20.8426 19.1615 21.3003 18.9144 21.7989 18.8081C22.2975 18.7018 22.8162 18.7406 23.2934 18.92C24.5031 19.3714 25.76 19.6845 27.0401 19.8533C27.6878 19.9447 28.2793 20.2709 28.7021 20.77C29.125 21.269 29.3496 21.9061 29.3334 22.56Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                        <span className='text-gray-900 lg:text-[36px] md:text-[32px] sm:text-[28px] xs:text-[18px] xxs:text-[18px] xxxs:text-[18px] font-semibold dark:text-white'>8758875669</span>
                    </Link>
                    <button className='copy_icon' onClick={() => copyToClipboard("8758875669", "phone")} >
                        {copiedField === "phone" ? ( 
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                            </svg>
                        ):(              
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z" stroke={darkMode ? "#fff" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317" stroke={darkMode ? "#fff" : "#4B5563"}  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                </div>
                <div className='plateforms text-center'>
                    <span>You may also find me on these platforms!</span>
                    <ul className='flex items-center justify-center mt-[14px] gap-5'>
                        <li>
                            <Link href="https://github.com/Hemali-Rami" target='_blank'>
                                {darkMode?(
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            ):(
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            )}
                                
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/hemali-rami-404401a8/" target='_blank'>
                                {darkMode?(
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffff" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            ):(
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            )}   
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.naukri.com/mnjuser/profile?id=&altresid" target='_blank'>
                                {darkMode?(
                                    
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7 24.8C19.3283 24.8 24.7 19.4185 24.7 12.8C24.7 6.18143 19.3283 0.799988 12.7 0.799988C6.07157 0.799988 0.699951 6.18143 0.699951 12.8C0.699951 19.4185 6.09184 24.8 12.7 24.8Z" fill="white"/>
<path d="M16.308 17.2536L16.2877 18.4701L16.2067 21.9752V22.1196C10.2675 16.9856 9.25397 15.7278 9.0918 15.3567V15.3361C9.07153 15.2742 9.07153 15.1917 9.07153 15.1093C9.07153 15.0886 9.07153 15.0474 9.0918 15.0268C9.0918 15.0062 9.11207 14.9856 9.11207 14.9649C9.17288 14.8 9.27424 14.635 9.37559 14.5113C9.45667 14.4082 9.53775 14.3051 9.6391 14.2227C9.8418 14.0165 10.0648 13.8309 10.2877 13.666C10.4094 13.5835 10.531 13.501 10.6526 13.3979C10.8959 13.233 11.1594 13.068 11.4432 12.9031C13.5715 14.8825 16.2877 17.2124 16.308 17.2536Z" fill="url(#paint0_linear_84_33)"/>
<path d="M16.3891 5.70721L16.3688 6.92371L16.3486 7.52164L16.3283 8.73814L16.308 9.3567L16.2877 10.5732C16.2472 10.5938 13.531 11.6454 11.4634 12.8825C11.1796 13.0474 10.9161 13.2124 10.6729 13.3773C10.5513 13.4598 10.4296 13.5423 10.308 13.6454C10.085 13.8103 9.86207 13.9959 9.65937 14.2021C9.55802 14.3051 9.47694 14.3876 9.39586 14.4907C9.21342 14.7381 9.0918 14.9649 9.07153 15.1917L9.0918 14.1814V14.0165V13.9546L9.11207 13.3155L9.15261 12.0371L9.17288 11.4186L9.21342 10.1608C9.6391 8.40824 15.6796 5.99587 16.3891 5.70721Z" fill="black"/>
<path d="M10.8145 7.04737C11.8078 7.04737 12.5983 6.24325 12.5983 5.27417C12.5983 4.28448 11.8078 3.50098 10.8145 3.50098C9.8213 3.50098 9.03076 4.3051 9.03076 5.27417C9.03076 6.26386 9.8213 7.04737 10.8145 7.04737Z" fill="black"/>
<defs>
<linearGradient id="paint0_linear_84_33" x1="15.048" y1="19.1256" x2="8.00817" y2="11.0079" gradientUnits="userSpaceOnUse">
<stop stopColor="black"/>
<stop offset="1"/>
</linearGradient>
</defs>
</svg>

                                ):(
   
<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7 24.8C19.3283 24.8 24.7 19.4185 24.7 12.8C24.7 6.18143 19.3283 0.799988 12.7 0.799988C6.07157 0.799988 0.699951 6.18143 0.699951 12.8C0.699951 19.4185 6.09184 24.8 12.7 24.8Z" fill="black"/>
<path d="M16.308 17.2536L16.2877 18.4701L16.2067 21.9752V22.1196C10.2675 16.9856 9.25397 15.7278 9.0918 15.3567V15.3361C9.07153 15.2742 9.07153 15.1917 9.07153 15.1093C9.07153 15.0886 9.07153 15.0474 9.0918 15.0268C9.0918 15.0062 9.11207 14.9856 9.11207 14.9649C9.17288 14.8 9.27424 14.635 9.37559 14.5113C9.45667 14.4082 9.53775 14.3051 9.6391 14.2227C9.8418 14.0165 10.0648 13.8309 10.2877 13.666C10.4094 13.5835 10.531 13.501 10.6526 13.3979C10.8959 13.233 11.1594 13.068 11.4432 12.9031C13.5715 14.8825 16.2877 17.2124 16.308 17.2536Z" fill="url(#paint0_linear_84_33)"/>
<path d="M16.3891 5.70721L16.3688 6.92371L16.3486 7.52164L16.3283 8.73814L16.308 9.3567L16.2877 10.5732C16.2472 10.5938 13.531 11.6454 11.4634 12.8825C11.1796 13.0474 10.9161 13.2124 10.6729 13.3773C10.5513 13.4598 10.4296 13.5423 10.308 13.6454C10.085 13.8103 9.86207 13.9959 9.65937 14.2021C9.55802 14.3051 9.47694 14.3876 9.39586 14.4907C9.21342 14.7381 9.0918 14.9649 9.07153 15.1917L9.0918 14.1814V14.0165V13.9546L9.11207 13.3155L9.15261 12.0371L9.17288 11.4186L9.21342 10.1608C9.6391 8.40824 15.6796 5.99587 16.3891 5.70721Z" fill="white"/>
<path d="M10.8145 7.04737C11.8078 7.04737 12.5983 6.24325 12.5983 5.27417C12.5983 4.28448 11.8078 3.50098 10.8145 3.50098C9.8213 3.50098 9.03076 4.3051 9.03076 5.27417C9.03076 6.26386 9.8213 7.04737 10.8145 7.04737Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_84_33" x1="15.048" y1="19.1256" x2="8.00817" y2="11.0079" gradientUnits="userSpaceOnUse">
<stop stopColor="white"/>
<stop offset="1"/>
</linearGradient>
</defs>
</svg>

                            )}  
                            </Link>
                        </li>
                        <li>
                            <Link href="https://codepen.io/Hemali-Rami" target='_blank'>
                                {darkMode?(
                                
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4398 9.71953V7.11094L7.05234010.0312L9.01172 11.3391L11.4398 9.71953ZM17.3953 12.9469V11.0766L15.9938 12.0117L17.3953 12.9469ZM12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM18.5156 13.9922C18.5156 14.018 18.5133 14.0414 18.5109 14.0648C18.5109 14.0742 18.5086 14.0812 18.5062 14.0883C18.5029 14.1139 18.4967 14.1391 18.4875 14.1633C18.4828 14.1773 18.4781 14.1914 18.4734 14.2031C18.4688 14.2125 18.4641 14.2219 18.4617 14.2313C18.4547 14.243 18.45 14.257 18.443 14.2687C18.4383 14.2781 18.4336 14.2852 18.4266 14.2945C18.4195 14.3063 18.4102 14.318 18.4031 14.3297C18.3961 14.3391 18.3914 14.3461 18.3844 14.3531C18.375 14.3625 18.3656 14.3742 18.3563 14.3836C18.3492 14.3906 18.3422 14.3977 18.3328 14.4047C18.3234 14.4141 18.3117 14.4234 18.3 14.4305C18.2906 14.4375 18.2836 14.4445 18.2742 14.4492C18.2719 14.4516 18.2672 14.4539 18.2648 14.4562L12.3094 18.4219C12.2156 18.4852 12.1078 18.5156 12 18.5156C11.8898 18.5156 11.782 18.4828 11.6883 18.4219L5.73281 14.4586C5.73047 14.4563 5.72578 14.4539 5.72344 14.4516L5.69766 14.4328C5.68594 14.4234 5.67656 14.4164 5.66719 14.407C5.66016 14.4 5.65313 14.393 5.64375 14.3859C5.63438 14.3766 5.625 14.3672 5.61563 14.3555C5.60867 14.3482 5.6024 14.3404 5.59688 14.332C5.5875 14.3203 5.58047 14.3086 5.57344 14.2969C5.56875 14.2875 5.56172 14.2805 5.55703 14.2711C5.55 14.2594 5.54297 14.2453 5.53828 14.2336C5.53359 14.2242 5.52891 14.2148 5.52656 14.2055C5.52188 14.1914 5.51719 14.1773 5.5125 14.1656C5.51016 14.1563 5.50547 14.1469 5.50313 14.1375C5.49844 14.1211 5.49609 14.107 5.49375 14.0906C5.49141 14.0836 5.49141 14.0742 5.48906 14.0672C5.48672 14.0438 5.48438 14.018 5.48438 13.9945V10.0289C5.48438 10.0055 5.48672 9.97969 5.48906 9.95625C5.49141 9.94922 5.49141 9.93984 5.49375 9.93281C5.49706 9.90717 5.50335 9.882 5.5125 9.85781C5.51719 9.84375 5.52188 9.82969 5.52656 9.81797C5.53125 9.80859 5.53594 9.79922 5.53828 9.78984C5.54297 9.77813 5.55 9.76406 5.55703 9.75234C5.56172 9.74297 5.56641 9.73594 5.57344 9.72656C5.5875 9.70547 5.60156 9.68672 5.61563 9.66797C5.625 9.65859 5.63438 9.64688 5.64375 9.6375C5.65078 9.63047 5.65781 9.62344 5.66719 9.61641C5.67656 9.60703 5.68828 9.59766 5.69766 9.59063C5.70703 9.58359 5.71406 9.57656 5.72344 9.57187C5.72578 9.56953 5.73047 9.56719 5.73281 9.56484L11.6883 5.60156C11.8758 5.47734 12.1219 5.47734 12.3094 5.60156L18.2648 9.56484C18.2672 9.56719 18.2719 9.56953 18.2742 9.57187L18.3 9.59063L18.3328 9.61641C18.3398 9.62344 18.3469 9.63047 18.3563 9.6375C18.3656 9.64688 18.375 9.65625 18.3844 9.66797C18.4008 9.68672 18.4148 9.70547 18.4266 9.72656C18.4313 9.73594 18.4383 9.74297 18.443 9.75234C18.45 9.76406 18.457 9.77578 18.4617 9.78984C18.4664 9.79922 18.4711 9.80859 18.4734 9.81797C18.4781 9.83203 18.4828 9.84609 18.4875 9.85781C18.4898 9.86719 18.4945 9.87656 18.4969 9.88594C18.5016 9.90234 18.5039 9.91641 18.5062 9.93281C18.5086 9.93984 18.5086 9.94922 18.5109 9.95625C18.5133 9.97969 18.5156 10.0055 18.5156 10.0289V13.9922ZM12.5602 14.3039V16.9125L16.9477 13.9922L14.9883 12.6844L12.5602 14.3039ZM6.60469 11.0766V12.9469L8.00625 12.0117L6.60469 11.0766ZM12 10.6898L10.0195 12.0117L12 13.3336L13.9805 12.0117L12 10.6898ZM16.9477 10.0312L12.5602 7.11094V9.71953L14.9883 11.3391L16.9477 10.0312ZM9.01172 12.6844L7.05234 13.9922L11.4398 16.9125V14.3039L9.01172 12.6844Z" fill="white"/>
</svg>

                            ):(
                                
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4398 9.71953V7.11094L7.05234 10.0312L9.01172 11.3391L11.4398 9.71953ZM17.3953 12.9469V11.0766L15.9938 12.0117L17.3953 12.9469ZM12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM18.5156 13.9922C18.5156 14.018 18.5133 14.0414 18.5109 14.0648C18.5109 14.0742 18.5086 14.0812 18.5062 14.0883C18.5029 14.1139 18.4967 14.1391 18.4875 14.1633C18.4828 14.1773 18.4781 14.1914 18.4734 14.2031C18.4688 14.2125 18.4641 14.2219 18.4617 14.2313C18.4547 14.243 18.45 14.257 18.443 14.2687C18.4383 14.2781 18.4336 14.2852 18.4266 14.2945C18.4195 14.3063 18.4102 14.318 18.4031 14.3297C18.3961 14.3391 18.3914 14.3461 18.3844 14.3531C18.375 14.3625 18.3656 14.3742 18.3563 14.3836C18.3492 14.3906 18.3422 14.3977 18.3328 14.4047C18.3234 14.4141 18.3117 14.4234 18.3 14.4305C18.2906 14.4375 18.2836 14.4445 18.2742 14.4492C18.2719 14.4516 18.2672 14.4539 18.2648 14.4562L12.3094 18.4219C12.2156 18.4852 12.1078 18.5156 12 18.5156C11.8898 18.5156 11.782 18.4828 11.6883 18.4219L5.73281 14.4586C5.73047 14.4563 5.72578 14.4539 5.72344 14.4516L5.69766 14.4328C5.68594 14.4234 5.67656 14.4164 5.66719 14.407C5.66016 14.4 5.65313 14.393 5.64375 14.3859C5.63438 14.3766 5.625 14.3672 5.61563 14.3555C5.60867 14.3482 5.6024 14.3404 5.59688 14.332C5.5875 14.3203 5.58047 14.3086 5.57344 14.2969C5.56875 14.2875 5.56172 14.2805 5.55703 14.2711C5.55 14.2594 5.54297 14.2453 5.53828 14.2336C5.53359 14.2242 5.52891 14.2148 5.52656 14.2055C5.52188 14.1914 5.51719 14.1773 5.5125 14.1656C5.51016 14.1563 5.50547 14.1469 5.50313 14.1375C5.49844 14.1211 5.49609 14.107 5.49375 14.0906C5.49141 14.0836 5.49141 14.0742 5.48906 14.0672C5.48672 14.0438 5.48438 14.018 5.48438 13.9945V10.0289C5.48438 10.0055 5.48672 9.97969 5.48906 9.95625C5.49141 9.94922 5.49141 9.93984 5.49375 9.93281C5.49706 9.90717 5.50335 9.882 5.5125 9.85781C5.51719 9.84375 5.52188 9.82969 5.52656 9.81797C5.53125 9.80859 5.53594 9.79922 5.53828 9.78984C5.54297 9.77813 5.55 9.76406 5.55703 9.75234C5.56172 9.74297 5.56641 9.73594 5.57344 9.72656C5.5875 9.70547 5.60156 9.68672 5.61563 9.66797C5.625 9.65859 5.63438 9.64688 5.64375 9.6375C5.65078 9.63047 5.65781 9.62344 5.66719 9.61641C5.67656 9.60703 5.68828 9.59766 5.69766 9.59063C5.70703 9.58359 5.71406 9.57656 5.72344 9.57187C5.72578 9.56953 5.73047 9.56719 5.73281 9.56484L11.6883 5.60156C11.8758 5.47734 12.1219 5.47734 12.3094 5.60156L18.2648 9.56484C18.2672 9.56719 18.2719 9.56953 18.2742 9.57187L18.3 9.59063L18.3328 9.61641C18.3398 9.62344 18.3469 9.63047 18.3563 9.6375C18.3656 9.64688 18.375 9.65625 18.3844 9.66797C18.4008 9.68672 18.4148 9.70547 18.4266 9.72656C18.4313 9.73594 18.4383 9.74297 18.443 9.75234C18.45 9.76406 18.457 9.77578 18.4617 9.78984C18.4664 9.79922 18.4711 9.80859 18.4734 9.81797C18.4781 9.83203 18.4828 9.84609 18.4875 9.85781C18.4898 9.86719 18.4945 9.87656 18.4969 9.88594C18.5016 9.90234 18.5039 9.91641 18.5062 9.93281C18.5086 9.93984 18.5086 9.94922 18.5109 9.95625C18.5133 9.97969 18.5156 10.0055 18.5156 10.0289V13.9922ZM12.5602 14.3039V16.9125L16.9477 13.9922L14.9883 12.6844L12.5602 14.3039ZM6.60469 11.0766V12.9469L8.00625 12.0117L6.60469 11.0766ZM12 10.6898L10.0195 12.0117L12 13.3336L13.9805 12.0117L12 10.6898ZM16.9477 10.0312L12.5602 7.11094V9.71953L14.9883 11.3391L16.9477 10.0312ZM9.01172 12.6844L7.05234 13.9922L11.4398 16.9125V14.3039L9.01172 12.6844Z" fill="black"/>
</svg>

                            )}   
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContact