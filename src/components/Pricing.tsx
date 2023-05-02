import Button from "./Button";
import PricingItem from "./PricingItem";

const Pricing = () => {
    return (
        <section className="py-24 border-b">

            <div className="container mx-auto w-2/3">

                <h2 className="text-center text-4xl font-black mb-24">Pricing</h2>
            
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