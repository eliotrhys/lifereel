"use client"

import BookYourSlotDetails from "@/components/BookYourSlotDetails";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavbarCalendly from "@/components/NavbarCalendly";
import SideMenu from "@/components/SideMenu";
import { useState } from "react";

export default function BookYourSlot() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  
  return (
    <main className="">
      <SideMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <NavbarCalendly onMenuToggle={handleMenuToggle} />
      <BookYourSlotDetails />
      <Contact />
      <Footer />
    </main>
  )
}
