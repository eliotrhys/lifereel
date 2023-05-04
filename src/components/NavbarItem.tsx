import { useEffect } from "react";

interface NavbarItemProps 
{
    title: string;
    link: string;
    extraClasses?: string;
    onClick?: () => void;
    arrow?: boolean;
}

const NavbarItem = (props: NavbarItemProps) => {

    return (
        <a href={props.link} className={`mr-8 p-4 rounded-lg navbar-item text-center flex items-center ${props.extraClasses ? props.extraClasses : ""}`}>
            {props.title}
            {props.arrow && 
                <div className="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
            }
        </a>
    )
}

export default NavbarItem;