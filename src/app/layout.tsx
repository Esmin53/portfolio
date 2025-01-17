import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import {  Inter  } from 'next/font/google'
//  Raleway, Space_Grotesk, Work_Sans, Heebo, DM_Sans

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/


 
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Esmin Tufekčić",
  description: "My Portfolio",
  icons: {
    icon: "/icon.ico",
    href: "/icon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel='icon' href='/icon.ico' />
      </head>
      <body
        className={`${inter.className} antialiased grainy`}
      >
        {children}
      </body>
    </html>
  );
}
