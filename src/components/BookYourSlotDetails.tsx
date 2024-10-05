import { motion } from "framer-motion";

import asSeenOnYouTube from "../../public/images/as-seen-on/youtube.png";
import underline from "../../public/images/shapes/underline.svg";
import photos from "../../public/images/photos/photos.png";
import threePhotos from "../../public/images/jumbotron/three_photos.png";
import videos from "../../public/images/photos/videos.png";
import scrap from "../../public/images/shapes/scrap.png";
import interviewImage from "../../public/images/features/interview.jpeg";

const BookYourSlot = () => {
    return (

        <div className="">
            <div className="">
                <div className="-mb-1">

                    <div className="grid grid-cols-12 pt-4">

                        <div className="col-span-12 lg:col-start-4 lg:col-span-6">
                            <div className="mb-4 px-4 lg:px-0 w-full mx-auto flex justify-center items-end relative">
                                <div className="w-full">
                                    <iframe className="aspect-video rounded-lg mx-auto w-full lg:w-auto lg:min-w-[560px] lg:min-h-[315px]" src="https://www.youtube.com/embed/Eysrl-bIxow?si=kkXtdw1oAF_pcwsW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="mb-4">
                                    <div className="relative">
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl xxl:text-8xl font-black text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-900 whitespace-nowrap">Book Your Slot<span className="text-rose-500 ml-1">.</span></h1>
                                        <div>
                                            <img src={scrap.src} alt="paper scrap" className="w-full" />
                                        </div>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-medium leading-relaxed text-center mb-4"><strong className="bg-lifereel dark p-2 px-4 mx-2 rounded-md">Let&apos;s make a Lifereel together!</strong></h2>
                                </div>

                                <div className="flex flex-col justify-center items-center w-full">
                                    <div>
                                        <img src={underline.src} className="h-4 lg:h-10" alt="underline" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 mb-4">

                {/* <!-- Calendly inline widget begin --> */}
                    <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/oscar-lifereel/lifereel-interview"
                        style={{ minWidth: '320px', height: '700px' }}
                    ></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                {/* <!-- Calendly inline widget end --> */}

            </div>


        </div>

    )
}

export default BookYourSlot;