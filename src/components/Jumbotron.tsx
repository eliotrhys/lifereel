import AsSeenOnItem from "./AsSeenOnItem";
import Button from "./Button";

import asSeenOnYouTube from "../../public/images/as-seen-on/youtube.png";

const Jumbotron = () => {
    return (
        <section>
            <div className="">
                <div className="container mx-auto py-6">

                    <h1 className="text-5xl font-black leading-relaxed text-center">We Make Lifereels</h1>
                    <h2 className="text-2xl font-black leading-relaxed mb-6 text-center">Lifereels are documentaries about <span className="text-rose-300">your loved ones</span></h2>

                    <div className="bg-lifereel rounded-lg border dark-green-separator">

                        <div className="grid grid-cols-12">

                            <div className="col-span-5 flex items-center border-r dark-green-separator">
                                <div className="p-12">

                                    <ul className="mb-8 text-xl leading-relaxed">
                                        <li className="mb-8 flex bg-lifereel dark rounded-lg p-8">
                                            <div className="mr-2">📘</div>
                                            <div className="text-medium">We work with you and your family to record amazing <strong>Netflix-quality video memoirs</strong></div>
                                        </li>
                                        <li className="mb-8 flex bg-lifereel dark rounded-lg p-8">
                                            <div className="mr-2">📘</div>
                                            <div className="text-medium">Then we add your old photos, videos and music</div>
                                        </li>
                                        <li className="mb-8 flex bg-lifereel dark rounded-lg p-8">
                                            <div className="mr-2">📘</div>
                                            <div className="text-medium">When we're done, you'll have an unbelievable, unique film about your loved one.</div>
                                        </li>
                                    </ul>

                                    <Button />
                                </div>
                            </div>

                            <div className="col-span-7">
                                <div className="border-b dark-green-separator">
                                    <div className="p-12">
                                        <div className="mb-4 w-2/3 mx-auto">
                                            <iframe width="560" height="315" className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/F9Pak63kaPE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                        <div className="text-center text-2xl">Watch Oscar explain what we do!</div>
                                    </div>
                                </div>
                                <div className="p-12">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-lifereel dark text-white p-8 rounded-lg text-center">100 Lifereels Made</div>
                                        <div className="bg-lifereel dark text-white p-8 rounded-lg text-center">Covers all of the UK</div>
                                        <div className="bg-lifereel dark text-white p-8 rounded-lg text-center">Something else</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="as-seen-in py-8 mx-auto bg-slate-800 text">
                    <div className="container mx-auto">

                        <div className="text-center font-medium text-2xl mb-4 text-white">As seen on</div>

                        <div className="grid grid-cols-6 gap-4">
                            
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>

                        </div>

                    </div>
                </div>

            </div>
            
        </section>

    )
}

export default Jumbotron;