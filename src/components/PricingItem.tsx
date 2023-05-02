const PricingItem = () => {
    return (

        <div className="bg-white border rounded-lg">

            <div className="p-8">
                <img src="https://www.thebalancemoney.com/thmb/tajr0Tg5KBG9g6tENuj8c18R5q8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157859688-56b084993df78cf772cf6dec.jpg" className="rounded-lg" alt="" />
            </div>

            <div className="">
                <div className="px-8 mb-8">
                    <div className="mb-4">
                        <div className="">
                            <div className="text-3xl mr-4">📽️</div>
                            <div className="text-xl font-bold">Basic Lifereel</div>
                        </div>

                        <div className="text-slate-500">Perfect for posterity</div>
                    </div>

                    <h4 className="text-5xl font-black">£600</h4>
                </div>
                
                <div className="px-8 mb-6 font-medium">This package includes:</div>
                <ul className="text-medium text-slate-500">
                    <li className="px-8 py-6 border-b">
                        <span className="mr-4">✅</span>
                        <span>Netflix-quality interview</span>
                    </li>
                    <li className="px-8 py-6 border-b">
                        <span className="mr-4">✅</span>
                        <span>Scanned photos</span>
                    </li>
                    <li className="px-8 py-6">
                        <span className="mr-4">✅</span>
                        <span>Photos</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default PricingItem;