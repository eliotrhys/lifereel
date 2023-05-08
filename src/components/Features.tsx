import Button from "./Button";
import FeatureItem from "./FeatureItem";

import interviewImage from "../../public/images/features/interview.jpeg";
import homeMoviesImage from "../../public/images/features/homemovies.jpeg";
import photosVideosImage from "../../public/images/features/photosvideos.gif";
import HowDoesItWork from "./HowDoesItWork";

const Features = () => {
    return (
        <section className="w-full" id="features">

            <div className="container mx-auto px-4 lg:px-0">

                <div className="mb-6 lg:mb-6 pt-12 lg:pt-0 text-center">
                    <h2 className="text-4xl font-black mb-6">What makes a Lifereel?</h2>

                    <div className="text-xl leading-relaxed font-medium">Everyone has an amazing story to tell, and a Lifereel is the best way to immortalise them for future generations.</div>
                </div>
            
                <div className="w-full sm:flex sm:flex-wrap mb-14">

                    <FeatureItem title="The Interview" description="This is a little bit of lorem ipsum text here" imageUrl={interviewImage} icon="🎙️" extraClasses="bg-lifereel xl:mt-4 xl:hover:mt-0" />
                    <FeatureItem title="Photos" description="This is a little bit of lorem ipsum text here" imageUrl={homeMoviesImage} icon="📷" extraClasses="bg-dark-cream xl:mt-14 xl:hover:mt-0" />
                    <FeatureItem title="Videos" description="This is a little bit of lorem ipsum text here" imageUrl={photosVideosImage} icon="📽️" extraClasses="bg-slate-800 text-cream xl:mt-4 xl:hover:mt-0" />
                    <FeatureItem title="Music" description="This is a little bit of lorem ipsum text here" imageUrl={photosVideosImage} icon="🎹" extraClasses="bg-rose-500 text-cream xl:mt-14 xl:hover:mt-0" />

                </div>

                <HowDoesItWork />

                <div className="mx-auto text-center pb-12 lg:pb-4">
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Features;