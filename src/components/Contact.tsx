const FAQ = () => {
    return (
        <section className="bg-slate-100 w-full">
            
            <div>
                <div>Contact</div>


                <form>

                    <div className="mb-4">
                        <label htmlFor="">What is your name?</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="">Email address</label>
                        <input type="text" placeholder="Enter your email address" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="">Phone number (optional)</label>
                        <input type="text" placeholder="Enter your phone number" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="">Tell us a little about who you'd like to make a Lifereel for</label>
                        <textarea placeholder="Enter your name"></textarea>
                    </div>

                    <div>
                        <button type="submit" className="bg-green-500">Let's get started!</button>
                    </div>

                </form>
            </div>

        </section>
    )
}

export default FAQ;