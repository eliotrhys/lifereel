"use client"

import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <section className="" id="faq">

            <div className="container mx-auto">

                <h2 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0">Frequently Asked Questions</h2>

                <div className="w-full lg:w-1/2 mx-auto px-4 lg:px-0">
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="bing bong bing bong?" answer="bing bing bing bing bing bing bing bing bbobgobg obg obamna SODA" />
                    <FAQItem question="What is Lifereel Academy?" answer="If you'd rather take a shot at making your own Lifereel, I say go for it!" />
                </div>
            </div>

        </section>
    )
}

export default FAQ;