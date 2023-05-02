import Button from "./Button";
import ExampleItem from "./ExampleItem";

const Examples = () => {
    return (
        <section className="bg-purple-500 w-full py-24">

            <div className="container mx-auto">

                <h2 className="text-center text-2xl py-4">Watch some ✨ magic moments ✨ from Lifereels</h2>
            
                <div className="grid grid-cols-2 gap-4">

                    <ExampleItem />
                    <ExampleItem />
                    <ExampleItem />
                    <ExampleItem />

                </div>

                <div>
                    <Button />
                </div>

            </div>


        </section>
    )
}

export default Examples;