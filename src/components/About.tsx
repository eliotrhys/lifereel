import Button from "./Button";

const About = () => {
    return (
        <section className="bg-orange-500 w-full">
            
            <div className="grid grid-cols-2">

                <div className="about-bg bg-cover bg-no-repeat bg-center"></div>

                <div className="p-14 py-24">

                    <div className="text-2xl mb-4">Hi, I'm Oscar</div>
                    <div className="mb-4">Let's work together on a Lifereel for your loved ones!</div>
                    <div className="mb-4">I'm a filmmaker with over 15 years experience. I work on every single Lifereel - if you choose to make one we'll be working together to make something truly unforgettable for you and your family!</div>

                    <ul className="mb-4 list-disc">
                        <li className="mb-2">15+ years filmmaking experience</li>
                        <li className="mb-2">BA (Hons) in Television Production (?)</li>
                        <li className="mb-2">Award-winning short film director</li>
                        <li className="mb-2">Worked as a professional videographer with some of the biggest brands in the UK (namedrop)</li>
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