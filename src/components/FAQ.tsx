"use client"

import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <section className="">

            <div className="container mx-auto">

                <h2 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0">Frequently Asked Questions</h2>

                <div className="w-full lg:w-1/2 mx-auto px-4 lg:px-0">
                    <FAQItem question="How long is a lifereel?" answer="We believe that a good length for a lifereel is 30-minutes. Not too long, not too short - and you&apos;d be surprised at just how much can be squeezed into half an hour! Ultimately, the length of the final lifereel depends on many factors, including the amount of usable interview material, as well as supplemental material (such as photographs and home movies)." />
                    <FAQItem question="At what age should someone get a lifereel?" answer="While we think everyone aged 50+ should have a lifereel made about them, we also believe that anybody who wants to immortalise their life story would benefit from a lifereel, regardless of age!" />
                    <FAQItem question="What if my loved one feels uncomfortable on camera?" answer="It&apos;s totally natural to feel uneasy or self-conscious at the start of the interview! Here at The Lifereel Company, we&apos;re here to gently guide your loved one through the process, reassure them and get them comfortable. In our experience, we find that people get used to being on camera pretty quickly!" />
                    <FAQItem question="Can I give input and make changes to the lifereel?" answer="Absolutely! Throughout the process, you&apos;ll be able to review drafts and give feedback. This is your loved one&apos;s story, so your (and their) satisfaction is our top priority!" />
                    <FAQItem question="Can you include subtitles in the lifereel? (Other languages?)" answer="Absolutely! Just let us know if that&apos;s something you&apos;d like, and we&apos;ll add a subtitle track. If you&apos;d like subtitles in other languages, this might mean an additional translation fee, as we only have a smattering of Standard Grade French!" />
                    <FAQItem question="How many photos or home movies will you scan?" answer="Usually, we will only digitise the photographs we need for your lifereel - which is usually somewhere around 200-400. However, with our Premium Lifereel Package, we will arrange for one of our partners to collect and scan your entire photo collection! As for your videotapes, we digitise all of those!" />
                    <FAQItem question="Where will you interview my loved one?" answer="We usually recommend your loved one&apos;s home as an interview location, simply because it&apos;s where they&apos;ll feel most comfortable. However, if you have access to another location which you feel would be more suitable, that works too!" />
                    <FAQItem question="Can I share the lifereel on social media platforms?" answer="Absolutely! The final lifereel is yours to do with as you please - just make sure that your loved one is ok with it too!" />
                    <FAQItem question="Can the lifereel include interviews from other family members or friends?" answer="This is definitely possible, though it would mean additional interview and editing fees. If you feel that your loved one&apos;s lifereel would benefit from interviews with other people, email us at oscar@lifereel.co, and we&apos;ll talk it through!" />
                    <FAQItem question="Can I request hard copies of the lifereel for my family members?" answer="Absolutely! While the digital video file is freely available to view and download at any time, a DVD copy (housed in a premium a wooden case) can be purchased at any time! Just email us at oscar@lifereel.co!" />
                    <FAQItem question="What happens to the interview and digitised photos/videos after the lifereel is completed?" answer="Unless directed otherwise by you, we will always store your lifereel (and the raw, unedited interview footage) in our archives, in case you ever lose your copies. However, your digitised photos/home movies will be given to you on a hard drive, and deleted from our archives within 6 months of your lifereel&apos;s completion." />
                    <FAQItem question="Is it possible to create a lifereel for someone who has passed away?" answer="Yes, this is certainly possible. By interviewing you and others who were close to your late loved one, we can create a lifereel to preserve their legacy. Please contact us at oscar@lifereel.co if this is something you&apos;d like to discuss." />
                    <FAQItem question="What is Lifereel Academy?" answer="We understand that for some, a professional lifereel might be a little expensive. With this in mind, we created an online course which teaches you how to create a lifereel of your own! It includes lessons on how to set up a camera and conduct an interview, tutorials on digitising your photographs and home movies, a step-by-step walkthrough of the editing process and much more! Lifereel Academy guides you all the way through your journey to create a lifereel, and it&apos;s suitable for complete beginners. Scroll down to learn more!" />
                </div>
            </div>

        </section>
    )
}

export default FAQ;