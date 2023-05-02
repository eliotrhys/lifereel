import Button from "./Button";

const Jumbotron = () => {
    return (
        <section className="bg-red-500 w-full">

            <div className="container mx-auto py-24">

                <div className="grid grid-cols-2 gap-4">

                    <div className="flex items-center">
                        <div>
                            <h1 className="text-5xl font-black leading-relaxed mb-8">Lifereels are documentaries about <span>your loved ones</span></h1>

                            <ul className="mb-8 text-xl">
                                <li className="mb-4 flex">
                                    <div className="mr-2">📘</div>
                                    <div>We work with you and your family to record amazing <strong>Netflix-quality video memoirs</strong></div>
                                </li>
                                <li className="mb-4 flex">
                                    <div className="mr-2">📘</div>
                                    <div>Then we add your old photos, videos and music</div>
                                </li>
                                <li className="mb-4 flex">
                                    <div className="mr-2">📘</div>
                                    <div>When we're done, you'll have an unbelievable, unique film about your loved one.</div>
                                </li>
                            </ul>

                            <Button />
                        </div>
                    </div>

                    <div className="">
                        <div className="flex items-center justify-center">
                            <div className="mb-4">
                                <iframe width="560" height="315" className="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/F9Pak63kaPE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </section>
    )
}

export default Jumbotron;