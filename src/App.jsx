import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import About from "./pages/home/about/About";
import OurService from "./pages/ourService/OurService";


const App = () => {
  return (
    <Router>
      <Navbar />  {/*NAVBAR Visable All page*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourService" element={<OurService />} />
      </Routes>
      <Footer />  {/*FOOTER Visable All page*/}
    </Router>
  );
};

export default App;