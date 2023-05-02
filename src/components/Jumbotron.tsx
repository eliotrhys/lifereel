const Jumbotron = () => {
    return (
        <section className="bg-red-500 w-full">

            <div className="grid grid-cols-2">

                <div>
                    <h1>Lifereels are documentaries about <span>your loved ones</span></h1>

                    <ul>
                        <li>We work with you and your family to record amazing <strong>Netflix-quality video memoirs</strong></li>
                        <li>Then we add your old photos, videos and music</li>
                        <li>When we're done, you'll have an unbelievable, unique film about your loved one.</li>
                    </ul>

                    <a href="" className="bg-green-500">Get started</a>
                </div>

                <div>
                    <div>
                        <img src="https://www.thespruceeats.com/thmb/4Uxr_CKC7aR-UhEicIvVqLaiO0k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-488636063-5ab2dbd8a8ff48049cfd36e8ad841ae5.jpg" className="w-full" alt="" />
                    </div>
                </div>

            </div>
            
        </section>
    )
}

export default Jumbotron;