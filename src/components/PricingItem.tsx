interface PricingItemProps {
    title: string;
    description: string;
    price: number;
    features: string[];
}

const PricingItem = (props: PricingItemProps) => {
    return (

        <div className="border rounded-lg">

            <div className="p-8">
                <img src="https://www.thebalancemoney.com/thmb/tajr0Tg5KBG9g6tENuj8c18R5q8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157859688-56b084993df78cf772cf6dec.jpg" className="rounded-lg" alt="" />
            </div>

            <div className="">
                <div className="px-8 mb-8">
                    <div className="mb-6">
                        <div className="mb-6">
                            <div className="text-3xl mr-4">📽️</div>
                            <h4 className="text-3xl font-black">{props.title}</h4>
                        </div>

                        <div className="">{props.description}</div>
                    </div>

                    <h4 className="text-2xl font-black">£{props.price}</h4>
                </div>
                
                <div className="px-8 font-medium">This package includes:</div>
                <ul className="text-medium">

                    {props.features.map((feature) => (
                        <li className="px-8 py-6 border-b flex items-center">
                            <span className="mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check stroke-rose-500"><polyline points="20 6 9 17 4 12"></polyline></svg>
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