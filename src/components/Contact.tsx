const FAQ = () => {
    return (
        <section className="" id="contact">

            <div className="container mx-auto">
                
                <div>
                    <h2 className="text-center text-4xl font-black mb-24">Contact us</h2>

                    <div className="w-2/4 mx-auto">
                        <form className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2 font-medium">What is your name?</label>
                                <input type="text" placeholder="Enter your name" className="w-full p-4 rounded-lg border border-slate-900" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2 font-medium">Email address</label>
                                <input type="text" placeholder="Enter your email address" className="w-full p-4 rounded-lg border border-slate-900" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2 font-medium">Phone number (optional)</label>
                                <input type="text" placeholder="Enter your phone number" className="w-full p-4 rounded-lg border border-slate-900" />
                            </div>

                            <div className="mb-4 col-span-2">
                                <label htmlFor="" className="block mb-2 font-medium">Tell us a little about who you'd like to make a Lifereel for</label>
                                <textarea placeholder="Type here..." rows={8} className="w-full p-4 rounded-lg border border-slate-900"></textarea>
                            </div>
                            
                        </form>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="button-lifereel p-4 px-8 rounded-lg inline-block font-medium text-lg duration-300 ease-in-out">Let's get started!</button>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default FAQ;