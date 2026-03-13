
import { Link } from "react-router-dom";

const Facility = () => {
  return (
    <>
     <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
                <div className="text-center">
                    {/* Icon */}
                    <div className="text-6xl mb-6 animate-bounce">
                        🚧
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-pulse">
                        Page Under Construction
                    </h1>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        We're working hard to bring this page to you soon.
                        Please check back later.
                    </p>
                    <Link
                        to="/"
                        className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition transform hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
      
    </>
  )
}

export default Facility
