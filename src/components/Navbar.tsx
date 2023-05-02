const Navbar = () => {
    return (
        <section className="bg-blue-500 w-full flex justify-between items-center px-4 py-4">
            
            <div>🌱 The Lifereel Company</div>

            <div className="flex items-center">
                <div className="mr-2">Home</div>
                <div className="mr-2">Features</div>
                <div className="mr-2">Examples</div>
                <div className="mr-2">About</div>
                <div className="mr-2">FAQ</div>
                <div className="mr-2">Pricing</div>
                <div>Contact</div>
            </div>
           
        </section>
    )
}

export default Navbar;