import Button from "./Button";
import ExampleItem from "./ExampleItem";

const Examples = () => {
    return (
        <section className="" id="examples">

            <svg className="-mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#095256" fillOpacity="1" d="M0,32L20,58.7C40,85,80,139,120,170.7C160,203,200,213,240,192C280,171,320,117,360,106.7C400,96,440,128,480,165.3C520,203,560,245,600,229.3C640,213,680,139,720,133.3C760,128,800,192,840,229.3C880,267,920,277,960,256C1000,235,1040,181,1080,160C1120,139,1160,149,1200,170.7C1240,192,1280,224,1320,229.3C1360,235,1400,213,1420,202.7L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
            
            <div className="bg-lifereel w-full px-4 lg:px-0 -mb-1">
                <div className="container w-full mx-auto">

                    <h2 className="text-center text-4xl font-black mb-12 lg:mb-24 pt-12 lg:pt-0 leading-relaxed">Watch some <br/>✨ <span className="text-violet-400">magic lifereel moments</span> ✨</h2>
                
                    <div className="grid lg:grid-cols-3 gap-4 xl:gap-14 mb-14">

                        <ExampleItem videoUrl="https://player.vimeo.com/video/826710913?h=6b3e0dc004" synopsis="Verena talks about her first jobs as a teenager, and exploring her wild side as a young girl South Shields!" />
                        <ExampleItem videoUrl="https://player.vimeo.com/video/826710648?h=a204c14e38" synopsis="Frank discusses his relationship with his parents, and his own father&apos;s rocky upbringing" />
                        <ExampleItem videoUrl="https://player.vimeo.com/video/826710799?h=a6348a0e16" synopsis="Eileen describes the unconventional way her husband Hector courted her - take notes, gentlemen!" />

                    </div>

                    <div className="mx-auto text-center pb-12 lg:pb-4">
                        <Button />
                    </div>

                </div>
            </div>

            <div className="bg-dark-cream">
                <svg className="-mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#095256" fillOpacity="1" d="M0,64L20,90.7C40,117,80,171,120,192C160,213,200,203,240,202.7C280,203,320,213,360,186.7C400,160,440,96,480,80C520,64,560,96,600,117.3C640,139,680,149,720,138.7C760,128,800,96,840,122.7C880,149,920,235,960,256C1000,277,1040,235,1080,192C1120,149,1160,107,1200,122.7C1240,139,1280,213,1320,229.3C1360,245,1400,203,1420,181.3L1440,160L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            </div>

        </section>
    )
}

export default Examples;