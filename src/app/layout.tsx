import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ComponentSwitcher from "./components/Component Switcher/Component-Switcher";

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
  return (
    <html lang="en">
      <body className={`bg-[#afcbff] ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ComponentSwitcher />
      </body>
    </html>
  );
}
