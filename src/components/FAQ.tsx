import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <section className="py-24 border-b">

            <div className="container mx-auto">

                <h2 className="text-center text-4xl font-black mb-24">Frequently Asked Questions</h2>

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