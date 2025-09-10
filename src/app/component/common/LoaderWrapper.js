"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { ThemeProvider } from "./ThemeProvider"; // Ensure ThemeProvider is used

const LoaderWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Ensures loading animation is completed
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? <Loader onComplete={() => setIsLoading(false)} /> : children}
      {/* {children} */}
    </ThemeProvider>
  );
};

export default LoaderWrapper;
