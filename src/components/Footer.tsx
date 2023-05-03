import tree from "../../public/images/tree.png";

const Footer = () => {
    return (
        <section className="w-full">
            
            <div className="text-center py-14">
                <h2 className="text-2xl font-black">Any questions?</h2>
                <h2 className="text-2xl font-black">Email <a href="mailto:hello@lifereel.co" className="text-blue-500">hello@lifereel.co</a></h2>
            </div>
            
            <div className="flex justify-center">
                <div className="mx-auto text-center">
                    <img src={tree.src} className="h-24" alt="tree" />
                </div>
            </div>
        </section>
    )
}

export default Footer;