"use client"

import NavbarItem from "./NavbarItem";
import logo from "../../public/images/logo.png";
import lightLogo from "../../public/images/lightLogo.png";

import { useEffect, useState } from "react";

interface NavbarProps {
    onMenuToggle: () => void;
  }

const Navbar = (props: NavbarProps) => {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleClose = () => {
        props.onMenuToggle();
    };
    
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
        <section className="w-full py-4 px-4 lg:px-0 nav-lifereel sticky top-0 z-20 bg-lifereel">

            <div className="px-4 mx-auto flex justify-between items-center">
            
                <div>
                    <a href="/">
                        <img src={isScrolled ? logo.src : lightLogo.src} className="h-8" alt="" />
                    </a>
                </div>

                <div className="items-center text-md font-medium hidden lg:flex">
                    <NavbarItem title="Home" link="/" />
                    <NavbarItem title="About" link="/#about" />
                    <NavbarItem title="Features" link="/#features" />
                    <NavbarItem title="Examples" link="/#examples" />
                    <NavbarItem title="FAQ" link="/#faq" />
                    <NavbarItem title="Pricing" link="/#pricing" />
                    <NavbarItem title="Bookings" link="/bookyourslot" />
                    <NavbarItem title="Contact us" link="/#contact" extraClasses="bg-rose-500 hover:bg-rose-700 px-8 font-medium text-rose-100 !mr-0" />
                </div>

                <div className="flex lg:hidden cursor-pointer">
                    <button onClick={handleClose}>
                        { isScrolled ? 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu stroke-slate-800"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu stroke-white"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                        }
                    </button>
                </div>

            </div>

           
        </section>
    )
}

export default Navbar;