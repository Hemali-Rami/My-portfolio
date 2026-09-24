"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMobile from "./common/useMobile"; // ✅ import hook

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const experience = [
  {
    title: "Sr. Frontend Developer",
    company: "WPWeb Infotech",
    fromto: "Dec 2025 - Jul 2026",
    cimg: "wpweb-logo",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress"],
    summary: "Build accessible, high-performance websites and web applications while collaborating with designers, clients, and junior developers.",
    desc: [
      "Designed and developed responsive, mobile-first websites and web applications using HTML5, CSS3, JavaScript, jQuery, Tailwind CSS, React, and Next.js.",
      "Converted Figma and Photoshop designs into clean, pixel-perfect, accessible, and cross-browser compatible user interfaces.",
      "Built, customized, and maintained websites using WordPress page builders including Elementor, Spectra, and Avada, ensuring scalable and user-friendly solutions.",
      "Designed and customized Shopify themes and WooCommerce-based eCommerce websites, enhancing user experience and storefront performance.",
      "Utilized AI-powered tools such as ChatGPT and Codex to assist with code generation, debugging, documentation, UI implementation, and development workflow optimization.",
      "Ensured compliance with WCAG accessibility guidelines, SEO best practices, Core Web Vitals, cross-browser compatibility, and Google PageSpeed optimization.",
      "Collaborated with designers, project managers, and clients to deliver high-quality frontend solutions while mentoring and supporting junior developers."
    ],
  },
  {
    title: "Frontend Developer – Independent Projects",
    company: "Independent Projects",
    fromto: "Jun 2024 - Dec 2025",
    cimg: "Hemali_logo",
    technologies: ["React", "Next.js", "Tailwind CSS", "WordPress"],
    summary: "Built and deployed responsive portfolio and demo websites while strengthening modern frontend, accessibility, and WordPress skills.",
    desc: [
      "Built personal projects using React, Next.js, and Tailwind CSS.",
      "Practiced accessibility-first design and responsive layouts.",
      "Completed courses in modern front-end frameworks and WordPress customization.",
      "Designed and deployed portfolio and demo websites to strengthen skills.",
    ],
  },
  {
    title: "Frontend Designer",
    company: "ADDVantage Technologies",
    fromto: "Dec 2022 - Jun 2024",
    cimg: "ADDV_healthcare_solutions",
    technologies: ["React", "Next.js", "HTML5", "SCSS", "WordPress"],
    summary: "Delivered responsive healthcare websites, CMS pages, templates, and accessible interfaces across React, Next.js, and WordPress projects.",
    desc: [
      "Worked on live projects using React.js and Next.js.",
      "Experienced in HTML5, CSS,Bootstrap 4-5,JavaScript, SCSS, and developing responsive, cross-browser compatible websites with web accessibility features.",
      "Expertise in creating PDF templates, email templates, and email signatures.",
      "Worked on WordPress projects, including developing CMS pages and SEO-friendly pages using both WordPress core and Elementor.",
    ],
  },
  {
    title: "Frontend Designer",
    company: "Moon Technolabs",
    fromto: "June 2021 - Aug 2022",
    cimg: "moon_new_logo",
    technologies: ["AngularJS", "HTML5", "CSS3", "jQuery", "WooCommerce"],
    summary: "Developed responsive landing pages and supported AngularJS and WooCommerce products while maintaining legacy projects across browsers.",
    desc: [
      "Worked on AngularJS projects for in-house products.",
      "Developed simple landing pages using HTML5, CSS, and jQuery.",
      "Worked on and assisted in developing WooCommerce websites.",
      "Maintained legacy projects, ensuring cross-browser compatibility and responsiveness on various devices.",
    ],
  },
  {
    title: "Jr. XHTML Developer",
    company: "Concept Infoway",
    fromto: "Oct 2018 - Mar 2021",
    cimg: "cipl_Logo",
    technologies: ["HTML5", "CSS3", "jQuery", "WordPress", "WooCommerce"],
    summary: "Created client landing pages and email templates, and assisted with WordPress, WooCommerce, and PHP projects.",
    desc: [
      "Worked with and gained experience in HTML5, CSS, and jQuery technologies.",
      "Assisted in designing WordPress, WooCommerce, and PHP projects.",
      "Designed various types of email templates.",
      "Created simple landing pages based on client requirements.",
    ],
  },
];

const HomeExperience = () => {
  const isMobile = useMobile();
  const [mounted, setMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="lg:container m-auto px-[15px]">
      <div className="experincepart section_space">
        <div className="text-center">
          <h5 className="bg-gray-200 text-gray-600 font-medium py-[4px] px-[20px] rounded-full inline-block text-sm dark:bg-[#374151] dark:text-white">
            Experience
          </h5>
          <p className="text-gray-600 text-[20px] mt-[16px] block dark:text-[#D1D5DB]">
            7+ years of building responsive, accessible and high-performance web experiences.
          </p>
        </div>
        <div className="exprincemain inner_space grid grid-cols-1 md:grid-cols-2 gap-[24px] lg:gap-[48px]">
          {experience.slice(0, showAll ? experience.length : 4).map((exp, index) => (
            <motion.div
              key={index}
              className="experincebox flex flex-col shadow-md rounded-md p-[32px] dark:bg-[#1F2937]"
              variants={!isMobile ? fadeUp : {}} // ✅ disable animation on mobile
              initial={!isMobile ? "hidden" : undefined}
              whileInView={!isMobile ? "visible" : undefined}
              viewport={!isMobile ? { once: true, amount: 0.2 } : undefined}
              custom={index}
            >
              <div className="companylogo w-full mb-[24px]">
                <div className="bg-white p-3 rounded-lg inline-block">
                  <Image
                    src={`/images/company/${exp.cimg}.svg`}
                    alt={`${exp.company} logo`}
                    width={200}
                    height={45}
                  />
                </div>
              </div>
              <div className="companydec w-full">
                <div className="contenthead flex justify-between mb-3 flex-wrap">
                  <div>
                    <h3 className="text-xl text-gray-900 font-semibold dark:text-white">{exp.title}</h3>
                    <p className="text-base text-gray-600 dark:text-[#D1D5DB] mt-2">{exp.company}</p>
                  </div>
                  <span className="fromto text-base text-gray-600 dark:text-white block mt-2">
                    {exp.fromto}
                  </span>
                </div>
                <div className="expdescription w-full">
                  <p className="text-base text-gray-600 leading-[28px] mb-4 dark:text-[#D1D5DB]">{exp.technologies.join(" / ")}</p>
                  <p className="text-base text-gray-600 leading-[28px] dark:text-[#D1D5DB]">{exp.summary}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-[32px]">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="text-gray-600 font-medium border-b-2 border-[#ffcbc1] pb-1 transition-all duration-300 hover:text-gray-900 dark:text-[#D1D5DB] dark:hover:text-white"
          >
            {showAll ? "Show Less" : "View More Experience"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeExperience;
