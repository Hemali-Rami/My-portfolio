import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import LoaderWrapper from "./component/common/LoaderWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hemali Rami",
  description: "Web designer portfolio built with Next.js & Tailwind CSS",
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
