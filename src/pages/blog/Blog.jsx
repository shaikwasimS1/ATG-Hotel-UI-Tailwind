import Button from "../../button/Button";



const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Luxury Rooms Experience",
            desc: "Discover the comfort and elegance of our premium hotel rooms designed for relaxation.",
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
        },
        {
            id: 2,
            title: "Top Amenities We Offer",
            desc: "Enjoy world-class amenities including spa, swimming pool, and fine dining.",
            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
        }
    ];

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Our Blogs</h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Stay updated with the latest news, travel tips, and hotel experiences.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={blog.img}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>

                                <Button
                                    text="   Read More"
                                    className="text-orange-500 font-medium hover:underline"
                                />


                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;