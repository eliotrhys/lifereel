import Button from "./Button";
import PricingItem from "./PricingItem";

const Pricing = () => {
    return (
        <section className="" id="pricing">

            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#095256" fillOpacity="1" d="M0,224L20,213.3C40,203,80,181,120,154.7C160,128,200,96,240,112C280,128,320,192,360,186.7C400,181,440,107,480,106.7C520,107,560,181,600,192C640,203,680,149,720,149.3C760,149,800,203,840,213.3C880,224,920,192,960,160C1000,128,1040,96,1080,112C1120,128,1160,192,1200,218.7C1240,245,1280,235,1320,245.3C1360,256,1400,288,1420,304L1440,320L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>

            <div className="bg-lifereel w-full">

                <div className="container mx-auto w-full xl:w-2/3 px-4 lg:px-0">

                    <h2 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0">Pricing</h2>
                
                    <div className="grid lg:grid-cols-3 gap-4 mb-12">

                        <PricingItem title="Basic" icon="👍" description="Film a Lifereel for your loved one, and create a family heirloom that will last forever" price={600} features={["Full Netflix-Quality Film", "Photo Scanning", "Video Conversion"]} />
                        <PricingItem title="Classic" icon="📽️" description="A full Lifereel, with a short edit and something something else and something else" price={2000} features={["Full Netflix-Quality Film", "Photo Scanning", "Video Conversion", "Edited"]} />
                        <PricingItem title="Premium" icon="🤩" description="Our Premium solution, including scanned photos, videos and more and something else" price={6000} features={["Full Netflix-Quality Film", "Photo Scanning", "Video Conversion", "Edited", "Something"]} isPremium={true} />

                    </div>

                    <div className="text-center pb-12 lg:pb-4">
                        <Button />
                    </div>
                </div>
            </div>

            <div className="">
                <svg className="-mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#095256" fillOpacity="1" d="M0,96L20,85.3C40,75,80,53,120,64C160,75,200,117,240,138.7C280,160,320,160,360,170.7C400,181,440,203,480,202.7C520,203,560,181,600,165.3C640,149,680,139,720,133.3C760,128,800,128,840,133.3C880,139,920,149,960,160C1000,171,1040,181,1080,160C1120,139,1160,85,1200,58.7C1240,32,1280,32,1320,42.7C1360,53,1400,75,1420,85.3L1440,96L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            </div>

        </section>
    )
}

export default Pricing;