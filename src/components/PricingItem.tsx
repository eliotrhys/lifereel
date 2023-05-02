const PricingItem = () => {
    return (

        <div className="bg-white border rounded-lg">

            <div className="mb-4">
                <img src="https://www.thebalancemoney.com/thmb/tajr0Tg5KBG9g6tENuj8c18R5q8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/157859688-56b084993df78cf772cf6dec.jpg" className="rounded-t-lg" alt="" />
            </div>

            <div className="">
                <div className="px-8 mb-4">
                    <div className="flex mb-4">
                        <div className="mr-4">👋</div>
                        <div className="text-xl">Basic Lifereel</div>
                    </div>
                    <div className="text-slate-500">Subtitle</div>
                    <div className="text-5xl font-bold">£600</div>
                </div>
                
                <div className="px-8 mb-4">This package includes</div>
                <ul>
                    <li className="px-8 py-2 border-b border-b-slate-300">Film</li>
                    <li className="px-8 py-2 border-b border-b-slate-300">Music</li>
                    <li className="px-8 py-2">Photos</li>
                </ul>
            </div>
        </div>

    )
}

export default PricingItem;