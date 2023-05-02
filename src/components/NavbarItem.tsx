interface NavbarItemProps 
{
    title: string;
    link: string;
    extraClasses?: string;
}

const NavbarItem = (props: NavbarItemProps) => {
    return (
        <a href={props.link} className={`mr-8 p-4 rounded-lg navbar-item ${props.extraClasses ? props.extraClasses : ""}`}>{props.title}</a>
    )
}

export default NavbarItem;