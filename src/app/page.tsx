"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Jumbotron from '@/components/Jumbotron'
import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Examples from '@/components/Examples'
import LifereelAcademy from '@/components/LifereelAcademy'
import { useState } from 'react'
import SideMenu from '@/components/SideMenu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  
  return (
    <main className="">
      <SideMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <Navbar onMenuToggle={handleMenuToggle} />
      <Jumbotron />
      <Features />
      <Examples />
      <About />
      <FAQ />
      <Pricing />
      <LifereelAcademy />
      <Contact />
      <Footer />
    </main>
  )
}
