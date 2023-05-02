import Button from "./Button";
import PricingItem from "./PricingItem";

const Pricing = () => {
    return (
        <section className="bg-rose-500 py-24">

            <div className="container mx-auto">

                <h2 className="text-center text-2xl py-4">Pricing</h2>
            
                <div className="grid grid-cols-3 gap-4 mb-4">

                    <PricingItem />
                    <PricingItem />
                    <PricingItem />
                   
                </div>

                <div className="text-center">
                    <Button />
                </div>

            </div>

        </section>
    )
}

export default Pricing;