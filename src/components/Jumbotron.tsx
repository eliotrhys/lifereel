import AsSeenOnItem from "./AsSeenOnItem";
import Button from "./Button";

import asSeenOnYouTube from "../../public/images/as-seen-on/youtube.png";
import underline from "../../public/images/shapes/underline.svg";
import photos from "../../public/images/photos/photos.png";
import videos from "../../public/images/photos/videos.png";

import scrap from "../../public/images/shapes/scrap.png";


const Jumbotron = () => {
    return (
        <section>
            <div className="">
                <div className="bg-lifereel -mb-1">

                    <div className="grid grid-cols-12 pt-4">

                        <div className="col-span-12 lg:col-span-3 hidden lg:block">
                            <img src={photos.src} alt="" className="w-full" />
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <div className="mb-4 px-4 lg:px-0 w-full mx-auto flex justify-center items-end relative">
                                <div className="">
                                    <iframe width="560" height="315" className="aspect-video rounded-lg mx-auto w-full lg:w-auto lg:min-w-[560px] lg:min-h-[315px]" src="https://www.youtube.com/embed/F9Pak63kaPE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-4">
                                    <div className="relative">
                                        <h1 className="text-4xl lg:text-6xl font-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-900 whitespace-nowrap">We Make Lifereels<span className="text-rose-500 ml-1">.</span></h1>
                                        <div>
                                            <img src={scrap.src} alt="paper scrap" className="w-full" />
                                        </div>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-medium leading-relaxed text-center">"Video memoirs" about your loved ones</h2>
                                </div>


                                <div className="flex flex-col justify-center items-center w-full">
                                    <span>
                                        <img src={underline.src} className="h-4 lg:h-10" alt="underline" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-3 hidden lg:block">
                            <div className="flex justify-end items-center">
                                <div>
                                    <img src={videos.src} alt="videos" className="" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="container mx-auto px-4 lg:px-0 py-6">

                        <ul className="lg:grid lg:grid-cols-3 lg:gap-12 text-xl leading-relaxed mb-12">

                            <li className="mb-8 lg:mb-4 flex flex-wrap lg:flex-nowrap bg-lifereel dark rounded-lg">
                                <div className="p-2 w-full lg:w-auto flex items-center text-5xl h-full bg-teal-500 border border-teal-600 rounded-lg -m-2 lg:-m-6">
                                    <div className="min-h-[200px] w-full lg:w-36 h-full bg-cover bg-center rounded-lg border border-teal-600" style={{backgroundImage: "url('https://media.istockphoto.com/id/612716922/photo/senior-woman-laughing.jpg?b=1&s=170667a&w=0&k=20&c=Hc02t4SfhH5a8l7bLejsN2pwVZJNvh1hWNBDXJeCMBA=')"}}></div>
                                </div>
                                <div className="p-8 lg:p-12 py-8 text-medium flex items-center">
                                    <div>We work with you and your family to record amazing <strong>Netflix-quality video memoirs</strong></div>
                                </div>
                            </li>

                            <li className="mb-8 lg:mb-4 flex flex-wrap lg:flex-nowrap bg-lifereel dark rounded-lg">
                                <div className="p-2 w-full lg:w-auto flex items-center text-5xl h-full bg-violet-500 border border-violet-600 rounded-lg -m-2 lg:-m-6">
                                    <div className="min-h-[200px] w-full lg:w-36 h-full bg-cover bg-center rounded-lg border-2 border-violet-600" style={{backgroundImage: "url('https://static.standard.co.uk/2022/08/02/10/marco-xu-ToUPBCO62Lw-unsplashjpg?width=1200&auto=webp&quality=75')"}}></div>
                                </div>
                                <div className="p-8 lg:p-12 py-8 text-medium flex items-center">
                                    <div>Then we add your old photos, videos and music</div>
                                </div>
                            </li>

                            <li className="mb-8 lg:mb-4 flex flex-wrap lg:flex-nowrap bg-lifereel dark rounded-lg">
                                <div className="p-2 w-full lg:w-auto flex items-center text-5xl h-full bg-amber-500 border border-amber-600 rounded-lg -m-2 lg:-m-6">
                                    <div className="min-h-[200px] w-full lg:w-36 h-full bg-cover bg-center rounded-lg border-2 border-amber-600" style={{backgroundImage: "url('https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_42/2606536/181016-hugs-mn-1305.jpg')"}}></div>
                                </div>
                                <div className="p-8 lg:p-12 py-8 text-medium flex items-center">
                                    <div>When we're done, you'll have an unbelievable, unique film about your loved one</div>
                                </div>
                            </li>
                        </ul>

                        <div className="text-center">
                            <Button />
                        </div>

                    </div>
                </div>

                <div className="bg-lifereel -mb-1">
                    <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#20293A" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,144C160,139,200,85,240,101.3C280,117,320,203,360,245.3C400,288,440,288,480,245.3C520,203,560,117,600,96C640,75,680,117,720,160C760,203,800,245,840,224C880,203,920,117,960,90.7C1000,64,1040,96,1080,128C1120,160,1160,192,1200,192C1240,192,1280,160,1320,133.3C1360,107,1400,85,1420,74.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
                </div>

                <div className="as-seen-on py-8 px-4 lg:px-0 mx-auto bg-slate-800 text">
                    <div className="container mx-auto">

                        <h4 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0 text-cream">What are Lifereels?</h4>

                        <div className="grid lg:grid-cols-2 gap-14 mb-12">
                            <div>
                                <div className="">
                                    <img src="https://file-uploads.teachablecdn.com/9596f47ca8814b95a36abb02efedcae1/905ca9fea5d04ba0b01fc322f743089b" className="w-full rounded-lg" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <h4 className="text-2xl font-black mb-8 text-cream">Lifereels are the new memoirs</h4>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">Don't write a memoir. <strong>Record a Lifereel.</strong></p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">Everybody has a story worth telling. But less than 1% of all human beings write a memoir! That means 99% of all unbelievable, heartbreaking, or hilarious stories disappear forever!</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">Lifereels are here to change that.</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">In just one day, you can record a Lifereel that will keep your, or your loved one's, stories alive forever - so one day your great-great-great grandchildren can meet you!</p>
                                </div>
                            </div>
                        </div>


                        <h4 className="text-center text-2xl lg:text-4xl font-black mb-8 text-cream">As seen on</h4>

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
                            
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>
                            <AsSeenOnItem altText="YouTube" imageUrl={asSeenOnYouTube}/>

                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                            <div className="bg-slate-900 text-white p-8 rounded-lg text-center flex items-center justify-center">100 Lifereels Made</div>
                            <div className="bg-slate-900 text-white p-8 rounded-lg text-center flex items-center justify-center">Covers all of the UK</div>
                            <div className="bg-slate-900 text-white p-8 rounded-lg text-center flex items-center justify-center">Something else</div>
                            <div className="bg-slate-900 text-white p-8 rounded-lg text-center flex items-center justify-center">Something else</div>
                            <div className="bg-slate-900 text-white p-8 rounded-lg text-center flex items-center justify-center">Something else</div>
                            <div className="bg-slate-900 text-white p-8 rounded-lg text-center flex items-center justify-center">Something else</div>
                        </div>


                    </div>
                </div>

                <svg className="-mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#20293A" fillOpacity="1" d="M0,192L20,208C40,224,80,256,120,250.7C160,245,200,203,240,170.7C280,139,320,117,360,106.7C400,96,440,96,480,96C520,96,560,96,600,133.3C640,171,680,245,720,234.7C760,224,800,128,840,117.3C880,107,920,181,960,181.3C1000,181,1040,107,1080,112C1120,117,1160,203,1200,224C1240,245,1280,203,1320,176C1360,149,1400,139,1420,133.3L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>

            </div>
            
        </section>

    )
}

export default Jumbotron;