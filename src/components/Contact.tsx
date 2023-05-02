const FAQ = () => {
    return (
        <section className="bg-slate-100 py-24">

            <div className="container mx-auto">
                
                <div>
                    <h2 className="text-center text-2xl py-4">Contact</h2>

                    <div className="w-1/2 mx-auto">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2">What is your name?</label>
                                <input type="text" placeholder="Enter your name" className="w-full p-4 rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2">Email address</label>
                                <input type="text" placeholder="Enter your email address" className="w-full p-4 rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2">Phone number (optional)</label>
                                <input type="text" placeholder="Enter your phone number" className="w-full p-4 rounded-lg" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="" className="block mb-2">Tell us a little about who you'd like to make a Lifereel for</label>
                                <textarea placeholder="Enter your name" className="w-full p-4 rounded-lg"></textarea>
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