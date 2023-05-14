"use client"

import FAQItem from "./FAQItem";

const FAQ = () => {
    return (
        <section className="" id="faq">

            <div className="container mx-auto">

                <h2 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0">Frequently Asked Questions</h2>

                <div className="w-full lg:w-1/2 mx-auto px-4 lg:px-0">
                    <FAQItem question="What is the duration of a typical Lifereel?" answer="We believe that a good length for a lifereel is 30-minutes. Not too long, not too short - and you&apos;d be surprised at just how much can be squeezed into half an hour! Ultimately, the length of the final lifereel depends on many factors, including the amount of usable interview material, as well as supplemental material (such as photographs and home movies)." />
                    <FAQItem question="Is there a maximum or minimum age requirement for creating a Lifereel?" answer="We don&apos;t believe that anybody is too old or too young to have a lifereel made about them - however, we tend to think that any person in their 50s (or beyond) is likely to benefit from a lifereel." />
                    <FAQItem question="What happens if my loved one feels uncomfortable during the interview?" answer="It&apos;s totally natural for people to freeze up on camera, or feel self conscious! Our Storytellers are there to help your loved one relax, and to assure them that there is no pressure on them. In our experience, however, we find that people acclimatise to being on camera quite quickly." />
                    <FAQItem question="Can I provide input and make changes to the Lifereel?" answer="Absolutely! Throughout the process, you will have the opportunity to review drafts and provide feedback. Your satisfaction is a priority, and the editing process will continue until you are entirely happy with the final lifereel." />
                    <FAQItem question="Is it possible to include subtitles in the lifereel? (Other languages?)" answer="Absolutely! Just let us know if that&apos;s something you&apos;d like, and we&apos;ll add a subtitle track. If you&apos;d like subtitles in other languages, this might incur an additional translation fee, as our Storytellers only have a smattering of Standard Grade French!" />
                    <FAQItem question="Are there any limitations on the number of photographs or home movies I can include?" answer="Usually, we will only digitise the photographs we need for your lifereel - usually somewhere around 200. However if desired, we can arrange for one of our partners to conduct a scan of your entire photo collection for an additional fee! As for your videotapes, we digitise all of those!" />
                    <FAQItem question="Can I request a specific interview location other than my loved one's home?" answer="Of course! We usually recommend your loved one&apos;s home as an interview location, simply because it is where your loved one is most likely to feel comfortable. However, if you have access to another location which you feel would be more suitable, that&apos;s totally fine!" />
                    <FAQItem question="Can I share the lifereel on social media platforms?" answer="Yes, the final lifereel is yours to do with as you please - just make sure that your loved one is ok with it!" />
                    <FAQItem question="Can the lifereel include interviews from other family members or friends?" answer="This is definitely possible, though it would incur additionally interview and edit fees. If you feel that your loved one&apos;s lifereel would benefit from interviews with other family members or friends, be sure to mention this if you choose to get in contact, and we&apos;ll talk it through!" />
                    <FAQItem question="Can I choose the background music for the Lifereel?" answer="While we usually use services such as Artlist and Musicbed for our background music, you may wish to include a specific song in the lifereel. With the right licensing, this may be possible, but the use of popular songs will usually constitute a significant expense." />
                    <FAQItem question="Can I request additional copies of the Lifereel for other family members?" answer="Absolutely! The digital video file is freely available to download at any time, and additional DVD copies (with a wooden case) can be purchased at any time." />
                    <FAQItem question="What happens to the interview and digitised photos/videos after the lifereel is completed?" answer="Unless directed otherwise by you, we will always store your lifereel (and the raw, unedited interview footage) in our archives, in case you ever lose your copies. However, your digitised photos/home movies will be given to you on a hard drive and some archival Blu-Ray discs, and deleted from our archives within 6 months of your lifereel&apos;s completion." />
                    <FAQItem question="Is it possible to create a Lifereel for someone who has passed away?" answer="Yes, this is certainly possible. By interviewing you and others who were close to your late loved one, we can create a lifereel about them. Please contact us at hello@lifereel.co if this is something you&apos;d like to discuss." />
                    <FAQItem question="What is Lifereel Academy?" answer="We understand that for some, a professional lifereel can be prohibitively expensive. With this in mind, we created an online course which teaches you how to create a lifereel of your own. It includes lessons on how to set up a camera and conduct an interview, tutorials on digitising your photographs and home movies, a step-by-step walkthrough of the editing process and much more! Lifereel Academy guides you all the way through your journey to create a lifereel, and it&apos;s suitable for complete beginners. Click here to learn more!" />
                </div>
            </div>

        </section>
    )
}

export default FAQ;