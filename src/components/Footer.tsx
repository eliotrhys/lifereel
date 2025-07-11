import tree from "../../public/images/illustrations/tree.svg"
import oscarDesk from "../../public/images/photos/oscar_desk.png";
import oscar1 from "../../public/images/photos/oscar1.jpeg";

const Footer = () => {
    return (
        <section className="w-full">
            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#095256" fillOpacity="1" d="M0,0L20,0C40,0,80,0,120,48C160,96,200,192,240,224C280,256,320,224,360,186.7C400,149,440,107,480,112C520,117,560,171,600,176C640,181,680,139,720,138.7C760,139,800,181,840,176C880,171,920,117,960,128C1000,139,1040,213,1080,218.7C1120,224,1160,160,1200,117.3C1240,75,1280,53,1320,48C1360,43,1400,53,1420,58.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>

            <div className="bg-lifereel">
                <div className="container mx-auto px-4">

                    <h2 className="text-center text-4xl font-black mb-12 pt-12 lg:pt-0">Want to get started?</h2>

                    <div className="flex items-center justify-center mb-12">
                        <a href="mailto:oscar@lifereel.co" className="-rotate-[6deg] inline-block mx-auto">
                            <h2 className="text-center text-2xl font-black relative"><span className="bg-rose-500 dark p-2 px-4 mx-2 mt-18 rounded-md">✉️ Email me!</span></h2>
                            <h2 className="text-center text-4xl font-black mb-6"><span className="bg-rose-500 dark p-2 px-4 mx-2 mt-18 rounded-md">oscar@lifereel.co</span></h2>
                        </a>
                    </div>


                    <p className="text-cream text-lg font-medium mb-6 text-center">My biggest passion is preserving people&apos;s stories - I&apos;d love to help you preserve yours!</p>

                    <div className="lg:w-2/3 mx-auto">
                        <div className="text-center mb-12">
                            <div className="mb-6">
                                <img src={oscar1.src} className="w-full rounded-lg" alt="" />
                            </div>
                            
                            <a href="mailto:oscar@lifereel.co" className="text-center text-2xl lg:text-5xl font-black !cursor-pointer !hover:cursor-pointer bg-rose-500 text-cream p-4 lg:p-12 inline-block w-full rounded-lg hover:scale-110 duration-100 ease"><h2>📬 oscar@lifereel.co</h2></a>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="mx-auto text-center">
                                <img src={tree.src} className="h-24" alt="tree" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;