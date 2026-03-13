import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navba.css"
import Logo from "./assets/logo/atg-hotel.svg";
import Button from "./button/Button";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#2E2317] shadow-md w-full ">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center h-16 ms-2">
          <div className="w-20 lg:w-30 h-auto " >
            <img src={Logo} alt="" />
          </div>
          <ul className="hidden md:flex space-x-8 font-medium text-[14px] lg:text-[24px] text-[#FFFFFF] sm:my-10 md:my-0">
            <li className="cursor-pointer hover:text-[#96FF16] ">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#96FF16]">
              <Link to="/about"> About </Link>
            </li>
            <li className="cursor-pointer hover:text-[#96FF16]">
              <Link to="/ourService">Our Services</Link>
            </li>
            <li className="cursor-pointer hover:text-[#96FF16]">Facility</li>
            <li className="cursor-pointer hover:text-[#96FF16]">
              <Link to="/blog">Blog</Link>
            </li>

            <li className="cursor-pointer hover:text-[#96FF16]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* BTNs */}

          <div className="md:flex space-x-4">
            <Button
              text="Register"
              className="px-4 py-1 mb-2 sm:mb-0 lg:text-[20px] text-[#000000] cursor-pointer bg-[#D8B18D] border border-[#D8B18D] hover:bg-transparent hover:text-white hover:border-[#D8B18D] transition-all duration-300 "
            />
            <Button
              text="Login"
              className="px-6 border border-[#D8B18D] py-1 text-white cursor-pointer lg:text-[20px] hover:bg-[#D8B18D] hover:text-black transition-all duration-300"
            />
          </div>

          {/* Three Menu Button */}

          <div className="md:hidden text-[#FFFFFF]">
            < button onClick={() => setOpen(!open)}>

              {open ? <X size={28} /> : <Menu size={28} />}

            </button>
          </div>
        </div>
      </div>

      { /* Hidden web in  Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#230e01] text-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
            <li>
              <Link to="/ourService">Our Services</Link>
            </li>
            <li>
              <Link to="/ourService">Facility</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
};

export default Navbar;