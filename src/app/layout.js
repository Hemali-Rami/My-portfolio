
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import LoaderWrapper from "./component/common/LoaderWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hemali Rami | Senior Frontend Developer & UI Specialist",
  description:
    "Portfolio of Hemali Rami, a Senior Frontend Developer specializing in pixel-perfect UI implementation, responsive design, web accessibility, WordPress, Shopify, Tailwind CSS, React, Next.js, Angular, and performance optimization.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${inter.variable} antialiased`}
      >
      <LoaderWrapper> {children}</LoaderWrapper>  
        {/* {children} */}
      </body>
    </html>
  );
}
