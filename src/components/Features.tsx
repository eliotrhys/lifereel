import Button from "./Button";
import FeatureItem from "./FeatureItem";

import interviewImage from "../../public/images/features/interview.jpeg";
import homeMoviesImage from "../../public/images/features/homemovies.jpeg";
import photosVideosImage from "../../public/images/features/photosvideos.gif";

const Features = () => {
    return (
        <section className="w-full" id="features">

            <div className="container mx-auto px-4 lg:px-0">

                <div className="mb-24 text-center">
                    <h2 className="text-4xl font-black mb-6">What makes a Lifereel?</h2>
                    <div className="text-xl font-medium">Everyone has an amazing story to tell, and a Lifereel is the best way to immortalise them for future generations.</div>
                </div>
                
            
                <div className="w-full lg:flex mb-14">

                    <FeatureItem title="The Interview" description="This is a little bit of lorem ipsum text here" imageUrl={interviewImage} icon="🎙️" extraClasses="bg-lifereel lg:hover:mt-0" />
                    <FeatureItem title="Photos" description="This is a little bit of lorem ipsum text here" imageUrl={homeMoviesImage} icon="📷" extraClasses="bg-dark-cream lg:mt-14 lg:hover:mt-0" />
                    <FeatureItem title="Videos" description="This is a little bit of lorem ipsum text here" imageUrl={photosVideosImage} icon="📽️" extraClasses="bg-slate-800 text-cream lg:hover:mt-0" />
                    <FeatureItem title="Music" description="This is a little bit of lorem ipsum text here" imageUrl={photosVideosImage} icon="🎹" extraClasses="mt-14 lg:hover:mt-0" />

                </div>

                <div>
                    <h1>So how does it work?</h1>
                    <ul>
                        <li>We send you a "welcome pack" - giving you all the details, a questionnaire and more</li>
                        <li>We pick a date for the </li>
                        <li></li>
                        <li>We ask for you, scan your photos and some video too</li>
                        <li>Delivery! We send you a private video link that you can share with your family, friends and more</li>
                    </ul>
                </div>

                <div className="mx-auto text-center">
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Features;