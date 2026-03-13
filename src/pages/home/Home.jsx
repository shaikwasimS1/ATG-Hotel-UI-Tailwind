import Hero from "../../assets/heroImg/hero.svg";
import Arrow from "../../assets/arrow/Arrownorth.svg";
import Button from "../../button/Button";
import { BedDouble, Palmtree, Building2, Sparkles, Utensils, BadgePercent, ArrowRight, CalendarDays, ChevronDown, Star, Headphones, CalendarCheck, House, Wifi, AirVent, Waves, Dumbbell, Car, WashingMachine } from "lucide-react";





const Home = () => {

    const features = [
        {
            icon: BedDouble,
            title: "Quality Room",
            desc: "Enjoy spacious and well-appointed rooms designed for maximum comfort and relaxation. Each room is equipped with modern amenities to ensure a peaceful stay.",
        },
        {
            icon: Palmtree,
            title: "Private Beach",
            desc: "Experience the luxury of a secluded private beach, perfect for unwinding by the water and enjoying the serene surroundings away from the crowds.",
        },
        {
            icon: Building2,
            title: "Best Accommodation",
            desc: "Choose from a wide variety of accommodations tailored to suit your preferences, ensuring a memorable and comfortable stay.",
        },
        {
            icon: Sparkles,
            title: "Wellness & Spa",
            desc: "Rejuvenate your body and mind at our exclusive wellness center, offering relaxing treatments and spa services.",
        },
        {
            icon: Utensils,
            title: "Restaurants & Bars",
            desc: "Indulge in delicious dining options at our on-site restaurants and unwind with refreshing drinks at the bars.",
        },
        {
            icon: BadgePercent,
            title: "Special Offers",
            desc: "Take advantage of exclusive deals and discounts designed to offer you the best value for your stay.",
        },
    ];



    return (
        <div className="bg-[#f7f2ee]">
            {/* Hero Image ------------------*/}

            <section className="relative w-full h-screen ">

                <img
                    src={Hero}
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* black-over-color */}
                <div className="absolute inset-0 bg-black/40"></div>


                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
                    <h3 className="text-[#FFEDD8] text-lg sm:text-2xl md:text-3xl lg:text-[32px] font-medium lg:mb-15  ">
                        GET LUXURY AND COMFORT
                    </h3>

                    <h1 className="text-[#FFEDD8] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] font-medium mb-6">
                        Discover Luxury Like Never Before
                        <span className="lg:block lg:text-start">
                            with ATG HOTELS
                        </span>
                    </h1>

                    <Button
                        text="Explore Now "
                        className="flex items-center gap-2 px-6 py-2 border border-[#D8B18D] text-white text-lg sm:text-xl md:text-[20px] hover:bg-[#D8B18D] hover:text-black transition-all duration-300 mt-5 mb-5"
                        icon={Arrow}
                    />
                </div>
            </section>

            {/* Section-2-Room-date ----------------------*/}

            <section className="relative w-full flex justify-center px-4  lg:top-[-20px]">

                <div className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-full shadow-lg
                      flex flex-col md:flex-row items-stretch md:items-center
                    w-full max-w-5xl
                        divide-y md:divide-y-0 md:divide-x divide-[#A56F6F]">

                    <div className="flex flex-col px-6 py-4 flex-1 text-center md:text-left">
                        <span className="text-sm text-gray-500">Room Type</span>
                        <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                            Select Type
                            <ChevronDown size={16} />
                        </div>
                    </div>

                    {/* Checkout-Month */}
                    <div className="flex flex-col px-6 py-4 flex-1 text-center md:text-left">
                        <span className="text-sm text-gray-500">Checkin</span>
                        <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                            1 April, 2025
                            <CalendarDays size={16} />
                        </div>
                    </div>

                    {/* Checkout */}
                    <div className="flex flex-col px-6 py-4 flex-1 text-center md:text-left">
                        <span className="text-sm text-gray-500">Checkout</span>
                        <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                            5 April, 2025
                            <CalendarDays size={16} />
                        </div>
                    </div>

                    {/* Rooms */}
                    <div className="flex flex-col px-6 py-4 flex-1 text-center md:text-left">
                        <span className="text-sm text-gray-500">Rooms</span>
                        <div className="flex items-center justify-center md:justify-start gap-2 font-semibold">
                            1 Room
                            <ChevronDown size={16} />
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex items-center justify-center px-6 py-4 md:py-0">
                        <Button
                            text=" Search"
                            className="bg-[#F06449] text-white px-8 py-2 rounded-full hover:bg-[#e6553c] transition w-full md:w-auto"
                        />
                    </div>
                </div>
            </section>



            {/* Section-3 hotel booking --------------------- */}

            <section className="mt-12  lg:ms-20 px-4 md:px-6 bg-white round-lg p-5">

                <h2 className="max-w-[586px] text-5xl md:text-[96px] font-medium ms-2 md:ms-10  text-[#583101] text-center lg:text-start leading-tight">
                    Save on your first hotel booking
                </h2>
                <p className="max-w-[510px] text:[16px] sm:text-[24px] font-medium mt-8 ms-2 md:ms-10  text-[#000000] text-center lg:text-start mb-13 ">
                    We’ve pulled together some top hotel deals, so
                    you can find on amazing room at an even better
                </p>

                <Button
                    text=" See hotel deals"
                    className="bg-[#FFCB8B] text-black px-2 py-1 md:text-[24px] rounded-md md:w-auto mt-1  ms-9 "
                />

                <Button
                    text=" Book Now"
                    className="text-center bg-[#F06449] text-white ms-5 px-8 py-2 rounded-md  md:w-auto"
                />

            </section>

            {/* Section-4 Explore */}
            <section className="Hotel" >

                <div className="text-center mt-30" >
                    <h4 className="text-[#674526] text-[36px] font-medium ">Explore</h4>
                    <h3 className="text-[#000000] text-[96px] font-medium">The Hotel</h3>
                </div>

                <div className="hottel-wrapper  py-16 px-6 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">

                        {features.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div key={index} className="p-10 border border-gray-200 bg-white m-4">

                                    <Icon size={40} className="mb-6 text-orange-500" />

                                    <h3 className="text-xl font-semibold mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center gap-2 font-medium cursor-pointer">Read More
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

            </section>





            {/* Section-5 ATG-HOTEL */}

            <section className="bg-[#f5f1ee] py-16 px-6 lg:px-20">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

                    {/*  Content */}
                    <div className="px-5 ">
                        <h2 className="text-3xl md:text-4xl lg:text-[38px] font-bold text-[#2b1a12] lg:w-[510px]">
                            Why Choose ATG HOTELS?
                        </h2>

                        <p className="mt-3 text-gray-600 max-w-xl">
                            Hotels with the best services and quality always.
                        </p>

                        <div className="flex items-center gap-2 mt-3">
                            <div className="flex text-yellow-500">
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                                <Star size={18} fill="currentColor" />
                            </div>
                            <span className="text-sm text-gray-600">
                                4.9 star rating hotels
                            </span>
                        </div>
                    </div>

                    {/* Right -circle-section */}
                    <div className="flex flex-wrap gap-6 justify-start lg:justify-end ">

                        <div className="w-32 h-32 flex flex-col items-center justify-center border border-[#F06449] rounded-full text-center  lg:mr-[-32px]">
                            <h3 className="text-2xl font-semibold">100+</h3>
                            <p >Comfortable Rooms</p>
                        </div>

                        <div className="w-32 h-32 flex flex-col items-center justify-center border border-[#F06449] rounded-full text-center">
                            <h3 className="text-2xl font-semibold">5M+</h3>
                            <p>Happy Customers</p>
                        </div>


                        <div className="w-32 h-32 flex flex-col items-center justify-center border border-[#F06449] rounded-full text-center  lg:ms-[-34px]">
                            <h3 className="text-2xl font-semibold">23+</h3>
                            <p>Certification of Merit</p>
                        </div>

                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <CalendarCheck className="mx-auto mb-4 text-gray-700" size={32} />
                        <h3 className="font-semibold text-[20px] mb-2">Easy Cancellation</h3>
                        <p className="text-sm text-gray-600">
                            Enjoy the flexibility of hassle-free cancellations.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <BadgePercent className="mx-auto mb-4 text-gray-700" size={32} />
                        <h3 className="font-semibold text-[20px] mb-2">Exclusive Offers</h3>
                        <p className="text-sm text-gray-600">
                            Get access to special discounts and member-only deals.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <House className="mx-auto mb-4 text-gray-700" size={32} />
                        <h3 className="font-semibold text-[20px] mb-2">Top Amenities</h3>
                        <p className="text-sm text-gray-600">
                            Experience world-class facilities including spa and pools.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <Headphones className="mx-auto mb-4 text-gray-700" size={32} />
                        <h3 className="font-semibold text-[18px] mb-2">24/7 Customer Support</h3>
                        <p className="text-sm text-gray-600">
                            Our dedicated support team is always here to help.
                        </p>
                    </div>

                </div>

            </section>



            {/* SECTICTION-6 OUR TOP     */}

            <section className="bg-[#f5f1ee] py-12 px-6 lg:px-20">

                <h2 className="text-3xl sm:text-[48px] text-center md:text-start font-semibold text-[#2b1a12] mb-10">
                    Our Top Aminities
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

                    <div className="bg-white rounded-xl flex flex-col items-center justify-center text-center w-full h-[150px]">
                        <Wifi size={32} className="text-[#F06449] mb-3" />
                        <p className="text-[16px] font-medium">Parking</p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-center justify-center text-center w-full h-[150px]">
                        <AirVent size={32} className="text-[#F06449] mb-3" />
                        <p className="text-[16px] font-medium">AC</p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-center justify-center text-center w-full h-[150px]">
                        <Waves size={32} className="text-[#F06449] mb-3" />
                        <p className="text-[16px] font-medium">Swimming Pool</p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-center justify-center text-center w-full h-[150px]">
                        <Dumbbell size={32} className="text-[#F06449] mb-3" />
                        <p className="text-[16px] font-medium">GYM</p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-center justify-center text-center w-full h-[150px]">
                        <Car size={32} className="text-[#F06449] mb-3" />
                        <p className="text-[16px] font-medium">Parking</p>
                    </div>

                    <div className="bg-white rounded-xl flex flex-col items-center justify-center text-center w-full h-[150px]">
                        <WashingMachine size={32} className="text-[#F06449] mb-3" />
                        <p className="text-[16px] font-medium">Laundry</p>
                    </div>

                </div>

            </section>








        </div>


    );
};

export default Home;