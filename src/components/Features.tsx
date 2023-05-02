import Button from "./Button";
import FeatureItem from "./FeatureItem";

const Features = () => {
    return (
        <section className="bg-orange-500 w-full py-24">

            <div className="container mx-auto">

                <h2 className="text-center text-2xl py-4">What makes a Lifereel?</h2>
            
                <div className="grid grid-cols-4 gap-4">

                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />

                </div>
            </div>

            <div className="mx-auto text-center">
                <Button />
            </div>

        </section>
    )
}

export default Features;