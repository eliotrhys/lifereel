interface PricingItemProps {
    title: string;
    icon: string;
    image: string;
    description: string;
    price: number;
    offerPrice?: number;
    features: string[];
    isPremium?: boolean;
}

const PricingItem = (props: PricingItemProps) => {

    return (

        <div className={`border rounded-lg relative ${props.isPremium ? "bg-slate-800 text-cream border-slate-500" : "bg-dark-cream text-slate-800 border-slate-800"}`}>

            {props.isPremium && <div className="py-2 px-8 rounded-lg bg-yellow-500 border border-black text-black font-medium absolute left-1/2 transform -translate-x-1/2 -mt-5 z-10 text-center whitespace-nowrap">Recommended</div> }

            <div className="p-8">
                <img src={props.image} className={`rounded-lg border ${props.isPremium ? "border-slate-500" : "border-slate-800"}`} alt="" />
            </div>

            <div className="">
                <div className="px-8 mb-8 lg:min-h-[300px] xl:min-h-[260px]">
                    <div className="mb-6">
                        <div className="mb-6">
                            <div className="text-3xl mr-4">{props.icon}</div>
                            <h4 className="text-3xl font-black">{props.title}</h4>
                        </div>

                        <div className="">{props.description}</div>
                    </div>

                    {props.offerPrice ? 
                    (
                        <div>
                            {/* <div className="text-sm bg-yellow-500 border border-black px-3 py-1 rounded-md mb-2 inline-block font-semibold uppercase text-slate-800">Limited time offer - 60% off</div> */}
                                <div className="flex items-center justify-center">
                                {/* <h4 className="text-xl text-red-500 line-through mr-3">£{props.price}</h4> */}
                                <a href="mailto:oscar@lifereel.co" target="_blank" className={`w-full lg:w-auto p-4 px-12 rounded-lg inline-block font-medium text-md duration-300 ease-in-out text-center border ${props.isPremium ? "border-white bg-slate-900 hover:bg-slate-950 text-cream" : "border-black button-lifereel"}`}>
                                    <h4 className="text-xl font-medium text-center">Contact for enquiries</h4>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-center">
                                <a href="mailto:oscar@lifereel.co" className="button-lifereel w-full lg:w-auto p-4 px-12 rounded-lg inline-block font-medium text-md duration-300 ease-in-out text-center border border-black">
                                    <h4 className="text-xl font-medium">Contact for enquiries</h4>
                                </a>
                            </div>
                        </div>
                        )
                    }
                    
                    {}
                    
                    
                </div>
                
                <div>
                    <div className={`text-center px-8 py-4 font-medium border-y ${props.isPremium ? "bg-slate-950 border-y-slate-500" : "bg-lifereel-pink border-y-slate-800"} `}>This package includes</div>
                </div>

                <ul className="text-medium pricing-feature-list">

                    {props.features.map((feature, index) => (
                        <li key={index} className={`item px-8 py-6 border-b ${props.isPremium ? "isPremium border-slate-500" : "border-slate-800"}  flex items-center font-medium`}>
                            <span className={`mr-4 p-1 rounded-lg border bg-white ${props.isPremium ? "border-slate-500" : "border-slate-800"}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-check ${props.isPremium ? "stroke-rose-500" : "stroke-violet-800"}`}><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            <span>{feature}</span>
                        </li>
                    ))}

                </ul>
            </div>
        </div>

    )
}

export default PricingItem;