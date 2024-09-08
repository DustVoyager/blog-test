import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import miaow from "@/components/miaow";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dust Voyager",
  description: "Welcome to the blog of front-end developer d.v.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${miaow.toString()})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark:text-gray-100 max-w-2xl m-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
