import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; 
import Navbar from "./navbar/NavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maapa Foundation",
  description: 'Support Who Can\'t Afford'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 z-[100] w-full bg-[rgba(255,255,255,0.20)] backdrop-blur-[30px] ">
       
          <Navbar />
        </div>
        <main> {children}</main>
      </body>
    </html>
  );
}
