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
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const META_PIXEL_ID = "3828535074040605";
  
  return (
    <main className="">
      <Head>
        {/* Load Meta Pixel Script */}
        <script
          id="meta-pixel"
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          <img height="1" width="1" style={{display: "none"}} src="https://www.facebook.com/tr?id=3828535074040605&ev=PageView&noscript=1"/>
        </noscript>
      </Head>
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
