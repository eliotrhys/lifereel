import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <section className="bg-teal-500 py-24">

            <div className="container mx-auto">

                <h2 className="text-center text-2xl py-4">FAQ</h2>


                <div className="w-1/2 mx-auto">
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                    <FAQItem />
                </div>
            </div>

        </section>
    )
}

export default FAQ;