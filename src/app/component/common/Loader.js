"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from './ThemeProvider';
import Image from "next/image";
const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Please wait, profile is loading...");
  const [isComplete, setIsComplete] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const { darkMode } = useTheme();

  
  const bgColor = darkMode ? "bg-gray-900" : "bg-gray-400";
  const textColor = darkMode ? "text-white" : "text-black";
  const progressBarColor = darkMode ?"bg-white":"bg-[#ffcbc1]";

  useEffect(() => {
    let progressValue = 0;
    const interval = setInterval(() => {
      if (progressValue < 100) {
        progressValue += 1; // Slow and smooth increase
        setProgress(progressValue);
      }

      if (progressValue === 100) {
        clearInterval(interval);
        setLoadingText("Complete !!! \u{1F389}"); // 🎉 Unicode

        // Hold "Complete" for 3 seconds before curtain effect
        setTimeout(() => {
          setShowCurtain(true);
        }, 3000);
      }
    }, 50); // Slower and smoother increments

    return () => clearInterval(interval); // Cleanup
  }, []);

  useEffect(() => {
    if (showCurtain) {
      setTimeout(() => {
        setIsComplete(true);
        onComplete(); // Notify parent that loading is done
      }, 1500); // Curtain effect duration
    }
  }, [showCurtain]);

  return (
    <motion.div
      className={`fixed inset-0 ${bgColor} flex flex-col items-center justify-center ${textColor} text-xl font-semibold z-50`}
      initial={{ opacity: 1 }}
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ display: isComplete ? "none" : "flex" }}
    >
        <Image src="/images/loader_logo.svg" width={100} height={100} alt="Hemali"/>
      <p className="mb-2 mt-4">{loadingText}</p>
      <div className="absolute lg:top-0 md:top-0 sm:top-0 xs:top-[25%] xss:top-[25%] xxxs:top-[20%] lg:right-0 lg:left-auto md:right-0 md:left-0 sm:right-0 sm:left-0 xs:right-0 xs:left-0 xxs:right-0 xxs:left-0  xxxs:right-0 xxxs:left-0bottom-0 m-auto flex lg:items-center md:items-center  w-full h-full lg:justify-end md:justify-center sm:justify-center xs:justify-center xxs:justify-center xxxs:justify-center z-[-1]">
        <p className="lg:text-[500px] md:text-[500px] sm:text-[300px] xs:text-[300px] xxs:text-[250px] xxxs:text-[200px] text-slate-900 dark:text-gray-700">{progress}</p>
      </div>
      <div className="mt-4 w-64 h-2 bg-gray-700 rounded overflow-hidden">
        <motion.div
          className={`h-full ${progressBarColor}`}
          initial={{ width: "0%" }} // Ensure no reverse effect
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.2 }}
        />
      </div>

      {/* Curtain effect after complete */}
      {showCurtain && (
        <motion.div
          className="absolute inset-0  ${bgColor}"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </motion.div>
  );
};

export default Loader;
