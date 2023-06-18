import tree from "../../public/images/tree.png";
import lifereelAcademy from "../../public/images/lifereel-academy.png";

import Button from "./Button";

const LifereelAcademy = () => {
    return (
        <section className="w-full mb-12 lg:mb-24 px-4 lg:px-0">

            <div className="container mx-auto lg:w-2/3 bg-slate-800 rounded-lg">
                <div className="grid xl:grid-cols-2">
                    <div className="flex items-center p-6 w-full h-full">
                        <div className="lg:p-6 w-full">
                            <iframe className="aspect-video rounded-lg mx-auto w-full" src="https://www.youtube.com/embed/EEU2F7c_kDk" title="Lifereel Academy Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="p-10 xl:p-6 text-cream">
                        <div className="mb-10">
                            <div className="mb-6">
                                <img src={lifereelAcademy.src} className="h-12" alt="" />
                            </div>
                            <h4 className="text-4xl font-black mb-8 text-cream">Fancy making one yourself?</h4>

                            <p className="text-cream text-lg font-medium mb-6">We created <span>Lifereel Academy</span> to help people make their own lifereels.</p>

                            <p className="text-cream text-lg font-medium mb-6">Our course teaches you everything about filming, lighting, editing and scanning old photos and movies.</p>

                            <p className="text-cream text-lg font-medium mb-6">In just a few short weeks we can help you make a <strong>Netflix-quality</strong> lifereel for your loved one!</p>
                        </div>


                        <div className="">
                            <a href="https://lifereel.teachable.com/" target="_blank" className="button-lifereel w-full lg:w-auto p-4 px-12 rounded-lg inline-block font-medium text-lg duration-300 ease-in-out text-center">Learn more!</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default LifereelAcademy;