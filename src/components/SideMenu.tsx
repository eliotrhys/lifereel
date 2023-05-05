import { ChangeEvent, useEffect, useState } from "react";
import logo from "../../public/images/lightLogo.png";
import NavbarItem from "./NavbarItem";

interface SideMenuProps {
  isOpen: boolean;
  onMenuToggle: () => void;
}

export default function SideMenu(props: SideMenuProps) {

  const handleClose = () => {
    props.onMenuToggle();
  };

  return (
    <div>
      <div className={`offcanvas-menu ${props.isOpen ? "open" : ""} z-30 bg-lifereel`}>
        <div className="text-right flex justify-between my-6 px-4">
          <img src={logo.src} style={{ height: "36px" }} alt={"Triviamoji Logo"} />
          <div>
            <button onClick={handleClose} className="border hover:text-white h-10 w-10 p-2 flex items-center justify-center text-xl rounded-full ease-in-out duration-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
            </button>
          </div>
        </div>

        <div className="items-center text-md font-medium">
            <NavbarItem title="Home" arrow={true} link="#" extraClasses="block !text-left border-b !rounded-none !mr-0" onClick={handleClose} />
            <NavbarItem title="What are Lifereels?" arrow={true} link="#features" extraClasses="block !text-left border-b !rounded-none !mr-0" />
            <NavbarItem title="Features" arrow={true} link="#features" extraClasses="block !text-left border-b !rounded-none !mr-0" />
            <NavbarItem title="Examples" arrow={true} link="#examples" extraClasses="block !text-left border-b !rounded-none !mr-0" />
            <NavbarItem title="About me" arrow={true} link="#about" extraClasses="block !text-left border-b !rounded-none !mr-0" />
            <NavbarItem title="FAQ" arrow={true} link="#faq" extraClasses="block !text-left border-b !rounded-none !mr-0" />
            <NavbarItem title="Pricing" arrow={true} link="#pricing" extraClasses="block !text-left border-b !rounded-none !mr-0" />
            <div className="mt-4 px-4">
                <NavbarItem title="Contact us" link="#contact" extraClasses="bg-rose-500 hover:bg-rose-700 px-8 font-medium text-rose-100 !mr-0 block justify-center" />
            </div>
        </div>
                
      </div>
    </div>
  );
}