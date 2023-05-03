"use client"

import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <section className="py-24" id="faq">

            <div className="container mx-auto">

                <h2 className="text-center text-4xl font-black mb-24">Frequently Asked Questions</h2>

                <div className="w-1/2 mx-auto">
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                </div>
            </div>

        </section>
    )
}

export default FAQ;