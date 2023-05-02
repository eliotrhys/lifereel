import Button from "./Button";

const About = () => {
    return (
        <section className="w-full border-b">
            
            <div className="grid grid-cols-2">

                <div className="about-bg bg-cover bg-no-repeat bg-center"></div>

                <div className="p-14 py-24">

                    <h2 className="text-4xl">👋</h2>
                    <h2 className="text-4xl font-black mb-12">Hi, I'm Oscar</h2>

                    <div className="mb-4 text-lg font-medium leading-relaxed">Let's work together on a Lifereel for your loved ones!</div>
                    <div className="mb-4 text-lg font-medium leading-relaxed">I'm a filmmaker with over 15 years experience. I work on every single Lifereel - if you choose to make one we'll be working together to make something truly unforgettable for you and your family!</div>

                    <ul className="mb-14">
                        <li className="mb-4 text-lg font-medium leading-relaxed">👴🏻 15+ years filmmaking experience</li>
                        <li className="mb-4 text-lg font-medium leading-relaxed">🎓 BA (Hons) in Television Production (?)</li>
                        <li className="mb-4 text-lg font-medium leading-relaxed">🏆 Award-winning short film director</li>
                        <li className="mb-4 text-lg font-medium leading-relaxed">🎥 Worked as a professional videographer with some of the biggest brands in the UK (namedrop)</li>
                    </ul>

                    <div>
                        <Button />
                    </div>
                </div>
            </div>

           

        </section>
    )
}

export default About;