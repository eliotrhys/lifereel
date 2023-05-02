import NavbarItem from "./NavbarItem";
import logo from "../../public/images/logo.png";

const Navbar = () => {
    return (
        <section className="w-full py-4 nav-lifereel sticky top-0">

            <div className="container mx-auto flex justify-between items-center">
            
                <div>
                    <img src={logo.src} className="h-8" alt="" />
                </div>

                <div className="flex items-center text-md font-medium">
                    <NavbarItem title="Home" link="#" />
                    <NavbarItem title="Features" link="#" />
                    <NavbarItem title="Examples" link="#" />
                    <NavbarItem title="About" link="#" />
                    <NavbarItem title="FAQ" link="#" />
                    <NavbarItem title="Pricing" link="#" />
                    <NavbarItem title="Contact us" link="#" extraClasses="bg-rose-500 px-8 font-bold text-rose-100 !mr-0" />
                </div>

            </div>

           
        </section>
    )
}

export default Navbar;