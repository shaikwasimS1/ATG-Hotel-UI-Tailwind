import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";


const App = () => {
  return (
    <Router>
      <Navbar />  {/*NAVBAR Visable All page*/ }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>  {/*FOOTER Visable All page*/ }
    </Router>
  );
};

export default App;