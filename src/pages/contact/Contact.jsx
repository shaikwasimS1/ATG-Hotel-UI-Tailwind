import { useState } from "react";
import Button from "../../button/Button";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handlesubmite = (e) => {
        e.preventDefault();

        if (form.name === "" || form.email === "" || form.message === "") {
            alert("Please fill all fields");
            return;
        }

        alert("Feedback Form Submitted");

        setForm({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Contact Us</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="bg-[#f8f4f3] p-8 rounded-xl">
                        <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                    </div>

                    {/* Form */}
                    <div className="bg-white shadow-md p-8 rounded-xl">

                        <form onSubmit={handlesubmite} className="space-y-5">

                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border p-3 rounded-md"
                            />

                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border p-3 rounded-md"
                            />

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                className="w-full border p-3 rounded-md"
                            ></textarea>


                            <Button
                                text=" Send Message"
                                type="submit"
                                className="bg-orange-500 text-white px-6 py-3 rounded-md"
                            />



                            <button


                            >

                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;