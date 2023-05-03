import tree from "../../public/images/tree.png";

const Footer = () => {
    return (
        <section className="w-full">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#095256" fill-opacity="1" d="M0,0L20,0C40,0,80,0,120,48C160,96,200,192,240,224C280,256,320,224,360,186.7C400,149,440,107,480,112C520,117,560,171,600,176C640,181,680,139,720,138.7C760,139,800,181,840,176C880,171,920,117,960,128C1000,139,1040,213,1080,218.7C1120,224,1160,160,1200,117.3C1240,75,1280,53,1320,48C1360,43,1400,53,1420,58.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>

            <div className="bg-lifereel">
                <div className="text-center py-14">
                    <h2 className="text-5xl font-black mb-8">Any questions?</h2>
                    <h2 className="text-2xl font-black"><a href="mailto:hello@lifereel.co" className="text-rose-300">hello@lifereel.co</a></h2>
                </div>
                
                <div className="flex justify-center">
                    <div className="mx-auto text-center">
                        <img src={tree.src} className="h-24" alt="tree" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;