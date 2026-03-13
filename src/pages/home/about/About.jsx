import Button from "../../../button/Button";


const About = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">About Us</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Welcome to ATG Hotel, where luxury meets comfort. We are dedicated to providing
                        world-class hospitality and unforgettable experiences for our guests.
                    </p>
                </div>

                {/* About Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                            alt="Hotel"
                            className="rounded-xl shadow-md w-full h-[350px] object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">
                            Experience Luxury & Comfort
                        </h3>

                        <p className="text-gray-600 mb-4">
                            ATG Hotel offers premium rooms, exceptional services, and modern
                            amenities designed to provide maximum comfort for our guests.
                        </p>

                        <p className="text-gray-600 mb-6">
                            Whether you are traveling for business or leisure, our hotel
                            ensures a relaxing and memorable stay with top-quality
                            hospitality and personalized services.
                        </p>

                        <Button
                            text=" Learn More"
                            className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
                        />


                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;