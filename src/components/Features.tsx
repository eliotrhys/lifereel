import Button from "./Button";
import FeatureItem from "./FeatureItem";

import interviewImage from "../../public/images/features/interview.jpeg";
import homeMoviesImage from "../../public/images/features/homemovies.jpeg";
import photosVideosImage from "../../public/images/features/photosvideos.gif";

const Features = () => {
    return (
        <section className="w-full pt-24" id="features">

            <div className="container mx-auto">

                <h2 className="text-center text-4xl font-black mb-24">What makes a Lifereel?</h2>
            
                <div className="grid grid-cols-4 gap-14 mb-14">

                    <FeatureItem title="The Interview" description="This is a little bit of lorem ipsum text here" imageUrl={interviewImage} icon="🎙️" />
                    <FeatureItem title="Photos" description="This is a little bit of lorem ipsum text here" imageUrl={homeMoviesImage} icon="📷" extraClasses="mt-8 hover:mt-0" />
                    <FeatureItem title="Videos" description="This is a little bit of lorem ipsum text here" imageUrl={photosVideosImage} icon="📽️" />
                    <FeatureItem title="Music" description="This is a little bit of lorem ipsum text here" imageUrl={photosVideosImage} icon="🎹" extraClasses="mt-8 hover:mt-0" />

                </div>

                <div className="mx-auto text-center">
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Features;