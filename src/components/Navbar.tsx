"use client"

import NavbarItem from "./NavbarItem";
import logo from "../../public/images/logo.png";
import lightLogo from "../../public/images/lightLogo.png";

import { useEffect, useState } from "react";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const section = document.querySelector(".nav-lifereel");

        if (!section) return;

        const handleScroll = () => {
          if (window.pageYOffset > 0) 
          {
            setIsScrolled((prevValue) => true);
            section.classList.remove("bg-lifereel");
          } 
          else 
          {
            setIsScrolled((prevValue) => false);
            section.classList.add("bg-lifereel");

          }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

      }, []);

    return (
        <section className="w-full py-4 nav-lifereel sticky top-0 z-20 bg-lifereel">

            <div className="container mx-auto flex justify-between items-center">
            
                <div>
                    <img src={isScrolled ? logo.src : lightLogo.src} className="h-8" alt="" />
                </div>

                <div className="flex items-center text-md font-medium">
                    <NavbarItem title="Home" link="#" />
                    <NavbarItem title="Features" link="#features" />
                    <NavbarItem title="Examples" link="#examples" />
                    <NavbarItem title="About" link="#about" />
                    <NavbarItem title="FAQ" link="#faq" />
                    <NavbarItem title="Pricing" link="#pricing" />
                    <NavbarItem title="Contact us" link="#contact" extraClasses="bg-rose-500 hover:bg-rose-700 px-8 font-medium text-rose-100 !mr-0" />
                </div>

            </div>

           
        </section>
    )
}

export default Navbar;