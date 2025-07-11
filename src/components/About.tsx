import Button from "./Button";
import scratch from "../../public/images/shapes/scratch.svg";
import oscar from "../../public/images/photos/oscar.jpg";
import oscar2 from "../../public/images/photos/oscar2.jpg";

const About = () => {
    return (
        <section className="relative">

            <div className="bg-dark-cream px-4 xl:px-0">

                <div className="container mx-auto">
                    
                    <div className="grid xl:grid-cols-2 gap-14">

                        <div className="flex items-center">
                            <div>
                                <img src={oscar2.src} className="w-full rounded-lg" alt="" />
                            </div>
                        </div>

                        <div className="">

                            <h2 className="text-4xl">👋</h2>
                            <h2 className="text-4xl font-black mb-4">Hi, I&apos;m Oscar</h2>

                            <div className="mb-4 text-lg font-medium leading-relaxed">Let&apos;s work together on a lifereel for your loved one!</div>
                            <div className="mb-4 text-lg font-medium leading-relaxed">I&apos;m a filmmaker with over a decade of experience, working across television and multiple creative video agencies in Edinburgh.</div>
                            <div className="mb-4 text-lg font-medium leading-relaxed">I make every single lifereel - so we&apos;ll be working together to create something that you and your family will cherish forever!</div>

                            <ul className="mb-14 grid lg:grid-cols-2 gap-4">
                                <li className="text-lg font-medium leading-relaxed border border-violet-900 bg-violet-100 rounded-lg flex items-center min-w-[80px]">
                                    <span className="p-4 border-r border-violet-900 flex items-center text-5xl h-full">👴🏻</span>
                                    <span className="p-4 text-violet-900">15+ years filmmaking experience</span>
                                </li>
                                <li className="text-lg font-medium leading-relaxed border border-amber-900 bg-amber-100 rounded-lg flex items-center min-w-[80px]">
                                    <span className="p-4 border-r border-amber-900 flex items-center text-5xl h-full">🎓</span>
                                    <span className="p-4 text-amber-900">BA (Hons) in Television</span>
                                </li>
                                <li className="text-lg font-medium leading-relaxed border border-emerald-900 bg-emerald-100 rounded-lg flex items-center min-w-[80px]">
                                    <span className="p-4 border-r border-emerald-900 flex items-center text-5xl h-full">🏆</span>
                                    <span className="p-4 text-emerald-900">Award-winning short film director</span>
                                </li>
                                <li className="text-lg font-medium leading-relaxed border border-sky-900 bg-sky-100 rounded-lg flex items-center min-w-[80px]">
                                    <span className="p-4 border-r border-sky-900 flex items-center text-5xl h-full">🇬🇧</span>
                                    <span className="p-4 text-sky-900">Worked with some of the UK&apos;s biggest brands</span>
                                </li>
                            </ul>

                            
                        </div>
                    </div>

                    <div className="mx-auto text-center pb-12 lg:pb-4">
                        <Button />
                    </div>
                </div>
            </div>

            <div className="relative" id="faq">
                {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 lg:bottom-20">
                    <img src={scratch.src} className="h-20 lg:h-32" alt="" />
                </div> */}
                <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FDE3CC" fillOpacity="1" d="M0,64L20,69.3C40,75,80,85,120,122.7C160,160,200,224,240,256C280,288,320,288,360,245.3C400,203,440,117,480,101.3C520,85,560,139,600,170.7C640,203,680,213,720,197.3C760,181,800,139,840,122.7C880,107,920,117,960,149.3C1000,181,1040,235,1080,240C1120,245,1160,203,1200,160C1240,117,1280,75,1320,69.3C1360,64,1400,96,1420,112L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            </div>

        </section>
    )
}

export default About;