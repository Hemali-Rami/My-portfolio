"use client"; // Enable client-side interactivity
import ScrolltoTop from './ScrolltoTop';
import { useTheme } from './ThemeProvider';
const Footer = () => {
  const { darkMode } = useTheme(); 
  return (
    <footer className='bg-gray-50 dark:bg-[#111827]'>
    <div className='lg:container m-auto px-[15px]'>
      <div className='footerpart py-[26px] leading-[36px]'>
        <p className='flex items-center justify-center flex-wrap text-gray-600 text-base dark:text-white'>
          <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
            <g clipPath="url(#clip0_327_412)">
            <path d="M8.49992 14.6668C12.1818 14.6668 15.1666 11.6821 15.1666 8.00016C15.1666 4.31826 12.1818 1.3335 8.49992 1.3335C4.81802 1.3335 1.83325 4.31826 1.83325 8.00016C1.83325 11.6821 4.81802 14.6668 8.49992 14.6668Z" stroke={darkMode?"#ffff":"#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.5 6.23616C10.1417 5.82996 9.66823 5.5425 9.14254 5.41203C8.61685 5.28155 8.0639 5.31424 7.55725 5.50576C7.0506 5.69728 6.61429 6.03854 6.30636 6.48414C5.99843 6.92973 5.8335 7.45853 5.8335 8.00016C5.8335 8.5418 5.99843 9.0706 6.30636 9.51619C6.61429 9.96178 7.0506 10.303 7.55725 10.4946C8.0639 10.6861 8.61685 10.7188 9.14254 10.5883C9.66823 10.4578 10.1417 10.1704 10.5 9.76416" stroke={darkMode?"#ffff":"#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_327_412">
            <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
          </svg>
          2025 | <span className='underline underline-offset-8 mx-2'>Designed</span> and <span className='underline underline-offset-8 mx-2'>coded</span> with ❤️️ by Hemali Rami</p>
      </div>
    </div>
    <div className='scrolltotopdiv'>
      <ScrolltoTop/>
    </div>
    </footer>
  )
}

export default Footer