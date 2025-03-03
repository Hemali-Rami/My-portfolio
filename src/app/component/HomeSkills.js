import Image from 'next/image'
import React from 'react'

export const HomeSkills = () => {
  return (
    <div className='lg:container m-auto px-[15px]'>
        <div className='skillspart section_space'>
            <div className='text-center'>
                <h5 className='bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white'>Skills</h5>
                <p className='text-gray-600 text-xl mt-[16px] block dark:text-[#D1D5DB]'>The skills, tools and technologies I am really good at:</p>
            </div>
            <div className='skillsmain inner_space'>
                <ul className='text-center'>
                    <li>
                        <Image src="/images/skills/html_logo.svg" width={64} height={64} alt='HTML5'/>
                        <span aria-label='HTML5'>HTML5</span>
                    </li>
                    <li>
                        <Image src="/images/skills/css3_logo.svg" width={64} height={64} alt='CSS3'/>
                        <span aria-label='CSS3'>CSS3</span>
                    </li>
                    <li>
                        <Image src="/images/skills/bootstrap_ico.svg" width={64} height={64} alt='Bootstrap'/>
                        <span aria-label='Bootstrap'>Bootstrap</span>
                    </li>
                    <li>
                        <Image src="/images/skills/jquery_ico.svg" width={64} height={64} alt='jQuery'/>
                        <span aria-label='jQuery'>jQuery</span>
                    </li>
                    <li>
                        <Image src="/images/skills/wordpress_ico.svg" width={64} height={64} alt='WordPress'/>
                        <span aria-label='WordPress'>WordPress</span>
                    </li>
                    <li>
                        <Image src="/images/skills/elementor.svg" width={64} height={64} alt='Elementor'/>
                        <span aria-label='Elementor'>Elementor</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-javscript.svg" width={64} height={64} alt='Javascript'/>
                        <span aria-label='Javascript'>Javascript</span>
                    </li>
                    <li>
                        <Image src="/images/skills/angular_ico.svg" width={64} height={64} alt='AngularJS'/>
                        <span aria-label='AngularJS'>AngularJS</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-react.svg" width={64} height={64} alt='ReactJS'/>
                        <span aria-label='ReactJS'>ReactJS</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-nextjs.svg" width={64} height={64} alt='NextJS'/>
                        <span aria-label='NextJS'>NextJS</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-tailwindcss.svg" width={104} height={64} alt='TailwindCSS'/>
                        <span aria-label='TailwindCSS'>TailwindCSS</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-sass.svg" width={64} height={64} alt='Sass'/>
                        <span aria-label='Sass'>Sass</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-figma.svg" width={64} height={64} alt='Figma'/>
                        <span aria-label='Figma'>Figma</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-git.svg" width={64} height={64} alt='Git'/>
                        <span aria-label='Git'>Git</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
