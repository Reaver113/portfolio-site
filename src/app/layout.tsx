import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ComponentSwitcher from "./components/Component Switcher/Component-Switcher";
import { getprofileDoc, getCareerDoc, getInterestsDoc } from "./components/Shared/Fetch/FetchDoc";


const profile = await getprofileDoc()
const career = await getCareerDoc()
const interests = await getInterestsDoc()



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
  title: "Jason Alcock CV",
  description: "This website is created by Myself to demonstrate my Front End Development skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const documents = [
    profile,
    career,
    interests
  ]

  return (
    <html lang="en">
      <body className={`bg-[#afcbff] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ComponentSwitcher {...documents}/>
      </body>
    </html>
  );
}
