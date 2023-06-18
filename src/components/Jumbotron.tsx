"use client"

import { motion } from "framer-motion";

import AsSeenOnItem from "./AsSeenOnItem";
import Button from "./Button";

import asSeenOnYouTube from "../../public/images/as-seen-on/youtube.png";
import underline from "../../public/images/shapes/underline.svg";
import photos from "../../public/images/photos/photos.png";
import threePhotos from "../../public/images/jumbotron/three_photos.png";
import videos from "../../public/images/photos/videos.png";
import scrap from "../../public/images/shapes/scrap.png";
import interviewImage from "../../public/images/features/interview.jpeg";

import mumBTS from "../../public/images/jumbotron/mum_bts.jpg";
import photoVHS from "../../public/images/jumbotron/photos_vhs.png";
import mumSmile from "../../public/images/jumbotron/mum_smiling.png";


const Jumbotron = () => {


    const variants = {
        hidden: { opacity: 0 },
        showing: {
            opacity: 1,
            transition: {
                staggerChildren: 0.125
            }
        }
    }

    const animationItem = {
        hidden: {
            opacity: 0,
        },
        showing: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }


    return (
        <section>
            <div className="">
                <div className="bg-lifereel -mb-1">

                    <div className="grid grid-cols-12 pt-4">

                        <div className="col-span-12 lg:col-span-3 hidden lg:block">
                            <motion.div
                                animate={{ x: [-800, 0]} } 
                                transition={{ duration: 0.4 }}
                            >
                                <img src={threePhotos.src} alt="" className="w-full" />
                            </motion.div>
                        </div>

                        <div className="col-span-12 lg:col-span-6">
                            <div className="mb-4 px-4 lg:px-0 w-full mx-auto flex justify-center items-end relative">
                                <div className="">
                                    <iframe className="aspect-video rounded-lg mx-auto w-full lg:w-auto lg:min-w-[560px] lg:min-h-[315px]" src="https://www.youtube.com/embed/F9Pak63kaPE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-4">
                                    <div className="relative">
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl xxl:text-8xl font-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-900 whitespace-nowrap">We Make Lifereels<span className="text-rose-500 ml-1">.</span></h1>
                                        <div>
                                            <img src={scrap.src} alt="paper scrap" className="w-full" />
                                        </div>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-medium leading-relaxed text-center mb-4"><strong className="bg-lifereel dark p-2 px-4 mx-2 rounded-md">Video memoirs</strong></h2>
                                    <h2 className="text-xl lg:text-2xl font-medium leading-relaxed text-center">about your loved ones</h2>

                                </div>


                                <div className="flex flex-col justify-center items-center w-full">
                                    <div>
                                        <img src={underline.src} className="h-4 lg:h-10" alt="underline" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-3 hidden lg:block">
                            <div className="flex justify-end items-center">
                                <motion.div
                                    animate={{ x: [800, 0]} } 
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <img src={videos.src} alt="videos" className="" />
                                </motion.div>
                            </div>
                        </div>

                    </div>


                    <div className="container mx-auto px-4 lg:px-0 py-6">

                        <motion.ul 
                            className="lg:grid md:grid-cols-12 lg:gap-12 text-xl leading-relaxed mb-12"
                            initial="hidden"
                            variants={variants}
                            whileInView="showing"
                            viewport={{ once: true }}
                        >

                            <motion.li className="mb-8 md:col-span-6 xl:col-span-4 lg:mb-4 flex flex-wrap lg:flex-nowrap bg-lifereel dark rounded-lg" variants={animationItem}>
                                <div className="min-h-[400px] lg:min-h-[200px] p-2 w-full lg:w-auto flex items-center text-5xl h-full bg-teal-500 border border-teal-600 rounded-lg -m-2 lg:-m-6">
                                    <div className="w-full lg:w-36 h-full min-h-[380px] lg:min-h-[180px] bg-cover bg-center rounded-lg border border-teal-600" style={{backgroundImage: `url(${mumBTS.src})`}}></div>
                                </div>
                                <div className="p-8 lg:p-12 py-8 text-medium flex items-center">
                                    <div>We work with you to record an amazing <strong>Netflix-quality</strong> video interview with your loved one</div>
                                </div>
                            </motion.li>

                            <motion.li className="mb-8 md:col-span-6 xl:col-span-4 lg:mb-4 flex flex-wrap lg:flex-nowrap bg-lifereel dark rounded-lg" variants={animationItem}>
                                <div className="min-h-[400px] lg:min-h-[200px] p-2 w-full lg:w-auto flex items-center text-5xl h-full bg-violet-500 border border-violet-600 rounded-lg -m-2 lg:-m-6">
                                    <div className="w-full lg:w-36 h-full min-h-[380px] lg:min-h-[180px] bg-cover bg-center rounded-lg border-2 border-violet-600" style={{backgroundImage: `url(${photoVHS.src})`}}></div>
                                </div>
                                <div className="p-8 lg:p-12 py-8 text-medium flex items-center">
                                    <div>Then we scan your family photographs, and digitise your home movies</div>
                                </div>
                            </motion.li>

                            <motion.li className="mb-8 md:col-start-5 md:col-span-6 xl:col-span-4 lg:mb-4 flex flex-wrap lg:flex-nowrap bg-lifereel dark rounded-lg" variants={animationItem}>
                                <div className="min-h-[400px] lg:min-h-[200px] p-2 w-full lg:w-auto flex items-center text-5xl h-full bg-amber-500 border border-amber-600 rounded-lg -m-2 lg:-m-6">
                                    <div className="w-full lg:w-36 h-full min-h-[380px] lg:min-h-[180px] bg-cover bg-center rounded-lg border-2 border-amber-600" style={{backgroundImage: `url(${mumSmile.src})`}}></div>
                                </div>
                                <div className="p-8 lg:p-12 py-8 text-medium flex items-center">
                                    <div>And then bring it all together to create a beautiful, unique film about the life of your loved one!</div>
                                </div>
                            </motion.li>
                        </motion.ul>

                        <div className="text-center">
                            <Button />
                        </div>

                    </div>
                </div>

                <div className="bg-lifereel -mb-1" id="about">
                    <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#20293A" fillOpacity="1" d="M0,64L20,85.3C40,107,80,149,120,144C160,139,200,85,240,101.3C280,117,320,203,360,245.3C400,288,440,288,480,245.3C520,203,560,117,600,96C640,75,680,117,720,160C760,203,800,245,840,224C880,203,920,117,960,90.7C1000,64,1040,96,1080,128C1120,160,1160,192,1200,192C1240,192,1280,160,1320,133.3C1360,107,1400,85,1420,74.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
                </div>

                <div className="as-seen-on py-8 px-4 lg:px-0 mx-auto bg-slate-800 text">
                    <div className="container mx-auto">

                        <h4 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0 text-cream">What are lifereels?</h4>

                        <div className="grid lg:grid-cols-2 gap-14 mb-12">
                            <div>
                                <div className="">
                                    <img src={interviewImage.src} className="w-full rounded-lg" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <h4 className="text-2xl font-black mb-8 text-cream">Don&apos;t write a memoir. Record a lifereel!</h4>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">We always talk about writing down the stories of those closest to us, but most of us never get around to it.</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">In just a few hours, we can immortalise the stories of a loved one - by interviewing them on camera.</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">With the help of your family photographs and home movies, we can create a timeless piece of personal history.</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">A lifereel can be watched on special occasions, and passed down for generations to come!</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">Everybody has a life story worth telling - you don&apos;t need to have climbed Mount Everest!</p>

                                    <p className="text-medium text-cream text-lg leading-relaxed mb-6">A lifereel is a new kind of memoir, and we <strong>guarantee that it will become one of your most treasured possessions.</strong></p>
                                </div>
                            </div>
                        </div>
{/* 

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
                        </div> */}


                    </div>
                </div>

                <svg id="features" className="-mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#20293A" fillOpacity="1" d="M0,192L20,208C40,224,80,256,120,250.7C160,245,200,203,240,170.7C280,139,320,117,360,106.7C400,96,440,96,480,96C520,96,560,96,600,133.3C640,171,680,245,720,234.7C760,224,800,128,840,117.3C880,107,920,181,960,181.3C1000,181,1040,107,1080,112C1120,117,1160,203,1200,224C1240,245,1280,203,1320,176C1360,149,1400,139,1420,133.3L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>

            </div>
            
        </section>

    )
}

export default Jumbotron;