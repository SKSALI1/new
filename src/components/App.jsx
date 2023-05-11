import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Navigation from "./navigation";
import About from "../pages/about";
import Product from "../pages/product";
import Footer from "./footer";
import Learnings from "../pages/learnings";




function App() {
    return (
        <Router>
        <div>
        <Navigation />
       </div>

       <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/product" element ={<Product />} />
        <Route path="/learnings" element ={<Learnings />} />
       </Routes>


       <div>
        <Footer />
       </div>

       </Router>
       
    );
}
export default App;