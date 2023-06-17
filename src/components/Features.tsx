import Button from "./Button";
import FeatureItem from "./FeatureItem";

import interviewImage from "../../public/images/features/interview.jpeg";
import homeMoviesImage from "../../public/images/features/homemovies.jpeg";
import photosVideosImage from "../../public/images/features/photosvideos.gif";
import HowDoesItWork from "./HowDoesItWork";
import theEdit from "../../public/images/features/the_edit.gif";
import theInterview from "../../public/images/features/the_interview.gif";
import eliotSquare from "../../public/images/features/eliot_square.gif";

const Features = () => {
    return (
        <section className="w-full">

            <div className="container mx-auto px-4 lg:px-0">

                <div className="mb-6 lg:mb-6 pt-12 lg:pt-0 text-center">
                    <h2 className="text-4xl font-black mb-6">What makes a lifereel?</h2>

                    <div className="text-xl leading-relaxed font-medium">Everyone has a story to tell, and a lifereel is the best way to immortalise it for future generations</div>
                </div>
            
                <div className="w-full sm:flex sm:flex-wrap mb-14">

                    <FeatureItem title="The Interview" description="We will film a Netflix quality interview with your loved one" imageUrl={theInterview} icon="🎙️" extraClasses="bg-lifereel xl:mt-4 xl:hover:mt-0" />
                    <FeatureItem title="Photos" description="We scan your family photographs, and our technicians will digitally repair any tears or scratches if needed" imageUrl={photosVideosImage} icon="📷" extraClasses="bg-dark-cream xl:mt-14 xl:hover:mt-0" />
                    <FeatureItem title="Videos" description="We digitise your old family home movies - including DV, 8mm and VHS videotapes, as well as cine film reels" imageUrl={eliotSquare} icon="📽️" extraClasses="bg-slate-800 text-cream xl:mt-4 xl:hover:mt-0" />
                    <FeatureItem title="The Edit" description="We bring everything into our edit suite, and begin to craft your lifereel, adding background music and even archival footage if necessary" imageUrl={theEdit} icon="🎹" extraClasses="bg-rose-500 text-cream xl:mt-14 xl:hover:mt-0" />

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