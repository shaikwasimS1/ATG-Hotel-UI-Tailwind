const Contact = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have questions or need help with your booking? Our team is here to help you anytime.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-[#f8f4f3] p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Address:</span> 123 Street, City, State, Zip
              </p>

              <p>
                <span className="font-semibold">Phone:</span> +91 9900 36467
              </p>

              <p>
                <span className="font-semibold">Email:</span> contact@atghotel.org
              </p>

              <p>
                <span className="font-semibold">Working Hours:</span> Mon - Sun : 9AM - 10PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md p-8 rounded-xl">
            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact