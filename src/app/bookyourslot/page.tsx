"use client"

import BookYourSlotDetails from "@/components/BookYourSlotDetails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function BookYourSlot() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  
  return (
    <main className="">
      <SideMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <Navbar onMenuToggle={handleMenuToggle} />
      <BookYourSlotDetails />
      <Contact />
      <Footer />
    </main>
  )
}