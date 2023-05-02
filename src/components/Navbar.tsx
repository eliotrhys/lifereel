const Navbar = () => {
    return (
        <section className="bg-blue-500 w-full flex justify-between items-center px-4 py-4">
            
            <div>🌱 The Lifereel Company</div>

            <div className="flex items-center">
                <div className="mr-4">Home</div>
                <div className="mr-4">Features</div>
                <div className="mr-4">Examples</div>
                <div className="mr-4">About</div>
                <div className="mr-4">FAQ</div>
                <div className="mr-4">Pricing</div>
                <div>Contact</div>
            </div>
           
        </section>
    )
}

export default Navbar;