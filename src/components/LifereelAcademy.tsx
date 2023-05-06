import tree from "../../public/images/tree.png";
import lifereelAcademy from "../../public/images/lifereel-academy.png";

import Button from "./Button";

const LifereelAcademy = () => {
    return (
        <section className="w-full mb-12 lg:mb-24 px-4 lg:px-0">

            <div className="container mx-auto lg:w-2/3 bg-slate-800 rounded-lg">
                <div className="grid xl:grid-cols-2">
                    <div className="flex items-center p-6">
                        <div className="lg:p-4">
                            <img src="https://file-uploads.teachablecdn.com/9596f47ca8814b95a36abb02efedcae1/905ca9fea5d04ba0b01fc322f743089b" className="w-full rounded-lg" alt="" />
                        </div>
                    </div>
                    <div className="p-10 xl:p-6 text-cream">
                        <div className="mb-10">
                            <div className="mb-6">
                                <img src={lifereelAcademy.src} className="h-12" alt="" />
                            </div>
                            <h4 className="text-4xl font-black mb-8 text-cream">Fancy making one yourself?</h4>

                            <p className="text-cream text-lg font-medium mb-6">We created <span>Lifereel Academy</span> to help people make their own Lifereels.</p>

                            <p className="text-cream text-lg font-medium mb-6">Our course teaches you everything about filming, lighting, editing and scanning old photos and movies.</p>

                            <p className="text-cream text-lg font-medium mb-6">In just a few short weeks we can help you make a <strong>Netflix-quality</strong> Lifereel for your loved one!</p>
                        </div>

                        <Button />
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default LifereelAcademy;