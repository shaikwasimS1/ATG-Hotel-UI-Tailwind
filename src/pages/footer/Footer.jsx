import { Instagram,Twitter,Facebook,Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#e7d7d2] py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">

            
                <div className="md:col-span-2  text-center lg:text-start ">
                    <h2 className="text-2xl lg:text-[40px] italic font-medium mb-3">ATG Hotel</h2>
                    <p className="text-[#6B6666] text-[15px] mb-6 lg:w-[280px] ">
                        ATG Hotels offers a blend of luxury, comfort,
                        and world-class service, ensuring an unforgettable stay.
                    </p>

                    <div className="flex gap-4   justify-center lg:justify-start">
                        <div className="bg-orange-500 text-white p-2 rounded">
                            <Instagram/>
                        </div>
                        <div className="bg-orange-500 text-white p-2 rounded">
                            <Twitter />
                        </div>
                        <div className="bg-orange-500 text-white p-2 rounded">
                            <Facebook />
                        </div>
                        <div className="bg-orange-500 text-white p-2 rounded">
                            <Linkedin />
                        </div>
                    </div>
                </div>

                
<div className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5">
                    {/* Quick Links */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-3 text-[20px]">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Rooms</li>
                            <li>Blogs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold mb-3 text-[20px]">Services</h3>
                        <ul className="space-y-2 text-[#686464] text-[16px]">
                            <li>Hotel Rooms</li>
                            <li>Amenities</li>
                            <li>Offers</li>
                        </ul>
                    </div>

                    {/* Supports */}
                    <div>
                        <h3 className="font-semibold mb-3 text-[20px]">Supports</h3>
                        <ul className="space-y-2 text-[#686464] text-[16px]">
                            <li>FAQ</li>
                            <li>Customer Care</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Services</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-3 ">Contact Information</h3>
                        <ul className="space-y-2 text-[#686464] text-[16px]">
                            <li>
                                <span className="font-semibold text-[#000000]">Address:</span> 123 Street, City,
                                State, Zip
                            </li>
                            <li>
                                <span className="font-semibold  text-[#000000]">Phone:</span> +91 9900 36467
                            </li>
                            <li>
                                <span className="font-semibold  text-[#000000]">Email:</span> contact@atghotel.org
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center text-[#686464] text-[14px] mt-10">
                Copyright © 2025 ATG Hotels. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;