const FAQ = () => {
    return (
        <section className="py-24" id="contact">

            <div className="container mx-auto">
                
                <div>
                    <h2 className="text-center text-4xl font-black mb-24">Contact us</h2>

                    <div className="w-1/3 mx-auto">
                        <form>
                            <div className="mb-14">
                                <label htmlFor="" className="block mb-2 font-medium">What is your name?</label>
                                <input type="text" placeholder="Enter your name" className="w-full p-4 rounded-lg border" />
                            </div>

                            <div className="mb-14">
                                <label htmlFor="" className="block mb-2 font-medium">Email address</label>
                                <input type="text" placeholder="Enter your email address" className="w-full p-4 rounded-lg border" />
                            </div>

                            <div className="mb-14">
                                <label htmlFor="" className="block mb-2 font-medium">Phone number (optional)</label>
                                <input type="text" placeholder="Enter your phone number" className="w-full p-4 rounded-lg border" />
                            </div>

                            <div className="mb-14">
                                <label htmlFor="" className="block mb-2 font-medium">Tell us a little about who you'd like to make a Lifereel for</label>
                                <textarea placeholder="Type here..." rows={8} className="w-full p-4 rounded-lg border"></textarea>
                            </div>

                            <div>
                                <button type="submit" className="bg-green-500 p-4 rounded-lg">Let's get started!</button>
                            </div>
                        </form>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default FAQ;