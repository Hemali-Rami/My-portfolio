"use client"; // Mark this as a client component

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { ThemeProvider } from "./ThemeProvider";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 7500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </div>
    </div>
  );
}
