

const HowDoesItWork = () => {
    return (
        <section className="mb-12">
            <h2 className="text-4xl font-black mb-12 pt-12 text-center">So how does it work?</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <li>
                    <div className="flex items-start mb-8">
                        <div className="mr-4">
                            <h4 className="bg-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center font-black text-2xl">1</h4>
                        </div>
                        <div className="text-lg font-medium leading-relaxed">One of our team will set up a meeting with you and your loved one - either online or in person - to discuss your lifereel and the next steps forward</div>
                    </div>
                </li>
                <li>
                    <div className="flex items-start mb-8 lg:mt-8">
                        <div className="mr-4">
                            <div className="bg-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center font-black text-2xl">2</div>
                        </div>
                        <div className="text-lg font-medium leading-relaxed">They will accompany you to your loved one&apos;s home and set up a professional 2-camera interview, and they&apos;re there to help with the interview process if needed!</div>
                    </div>
                </li>
                <li>
                    <div className="flex items-start mb-8 lg:mt-16">
                        <div className="mr-4">
                            <div className="bg-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center font-black text-2xl">3</div>
                        </div>
                        <div className="text-lg font-medium leading-relaxed">Your photographs will be collected, scanned and returned to you.</div>
                    </div>
                </li>
                <li>
                    <div className="flex items-start mb-8">
                        <div className="mr-4">
                            <div className="bg-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center font-black text-2xl">4</div>
                        </div>
                        <div className="text-lg font-medium leading-relaxed">Your home movies will be digitised in-house - or, in the case of film reels, will be sent via courier to one of our partners to be digitised and returned to you.</div>
                    </div>
                </li>
                <li>
                    <div className="flex items-start mb-8 lg:mt-8">
                        <div className="mr-4">
                            <div className="bg-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center font-black text-2xl">5</div>
                        </div>
                        <div className="text-lg font-medium leading-relaxed">A first draft of the lifereel will be sent to you via a private video link, where you can make comments and ask for any amendments you wish. This process will repeat until you are totally happy with the final lifereel!</div>
                    </div>
                </li>
                <li>
                    <div className="flex items-start mb-8 lg:mt-16">
                        <div className="mr-4">
                            <div className="bg-green-500 rounded-full p-4 w-16 h-16 flex items-center justify-center font-black text-2xl">6</div>
                        </div>
                        <div className="text-lg font-medium leading-relaxed">The completed lifereel will be delivered to you as a DVD in a premium wooden case, as well as an online private video link. You will also receive a hard drive containing your digitised photographs and home movies.</div>
                    </div>
                </li>
            </ul>
            
        </section>
    )
}

export default HowDoesItWork;