import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import useMobile from "./common/useMobile";
export const HomeSkills = () => {
  const isMobile = useMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const iconVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="lg:container m-auto px-[15px]">
      <motion.div
        className="skillspart section_space"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="text-center">
          <h5 className="bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white">
            Skills
          </h5>
          <h2 className="text-4xl font-bold mb-4 mt-4">
            Skills & Technologies
          </h2>

          <p className="text-gray-600 text-xl mt-[16px] block dark:text-[#D1D5DB]">
            Frontend technologies, CMS platforms, design tools, and AI-powered
            workflows I use to build modern, accessible, and high-performance
            web experiences.
          </p>
        </div>
        <div className="skillsmain inner_space">
          <ul className="text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* <li>
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
                        <Image src="/images/skills/icon-figma.svg" width={64} height={64} alt='Figma' className='max-w-[64px]'/>
                        <span aria-label='Figma'>Figma</span>
                    </li>
                    <li>
                        <Image src="/images/skills/icon-git.svg" width={64} height={64} alt='Git'/>
                        <span aria-label='Git'>Git</span>
                    </li> */}
            {[
              {
                src: "/images/skills/icon-react.svg",
                label: "ReactJS",
                width: 64,
              },
              {
                src: "/images/skills/icon-nextjs.svg",
                label: "NextJS",
                width: 64,
              },
              {
                src: "/images/skills/icon-tailwindcss.svg",
                label: "TailwindCSS",
                width: 104,
              },
              {
                src: "/images/skills/icon-javscript.svg",
                label: "Javascript",
                width: 64,
              },
              {
                src: "/images/skills/html_logo.svg",
                label: "HTML5",
                width: 64,
              },
              { src: "/images/skills/css3_logo.svg", label: "CSS3", width: 64 },
              {
                src: "/images/skills/bootstrap_ico.svg",
                label: "Bootstrap",
                width: 64,
              },
              { src: "/images/skills/icon-sass.svg", label: "Sass", width: 64 },
              {
                src: "/images/skills/jquery_ico.svg",
                label: "jQuery",
                width: 64,
              },
              {
                src: "/images/skills/angular_ico.svg",
                label: "AngularJS",
                width: 64,
              },
              {
                src: "/images/skills/wordpress_ico.svg",
                label: "WordPress",
                width: 64,
              },
              {
                src: "/images/skills/woo_icon.svg",
                label: "WooCommerce",
                width: 64,
              },
               {
                src: "/images/skills/shopify-logo.svg",
                label: "Shopify",
                width: 64,
              },
               {
                src: "/images/skills/drupal-icon.svg",
                label: "Drupal",
                width: 64,
              },
              {
                src: "/images/skills/elementor.svg",
                label: "Elementor",
                width: 64,
              },
               {
                src: "/images/skills/gutenberg-icon.svg",
                label: "Gutenberg",
                width: 64,
              },
              {
                src: "/images/skills/avada-icon.svg",
                label: "Avada",
                width: 64,
              },
              {
                src: "/images/skills/icon-figma.svg",
                label: "Figma",
                width: 64,
              },
              { src: "/images/skills/icon-git.svg", label: "Git", width: 64 },
              {
                src: "/images/skills/chatgpt-icon.svg",
                label: "OpenAI",
                width: 64,
              },
              {
                src: "/images/skills/claude-ai-icon.svg",
                label: "Claude",
                width: 64,
              },
              {
                src: "/images/skills/githubcopilot.svg",
                label: "GitHub Copilot",
                width: 64,
              },
            ].map((skill, index) => (
              <motion.li
                key={index}
                className="m-[10px] text-center"
                variants={!isMobile ? iconVariants : {}}
                transition={
                  !isMobile
                    ? { duration: 0.6, ease: "easeOut", delay: index * 0.1 }
                    : undefined
                }
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                     skill.label === "GitHub Copilot" || skill.label === "Gutenberg"
                      ? "bg-gradient-to-br bg-white  px-3 py-3"
                      : ""
                  }`}
                >
                  <Image
                    src={skill.src}
                    width={skill.width}
                    height={64}
                    alt={skill.label}
                  />
                </div>
                <span aria-label={skill.label} className="text-center">{skill.label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
