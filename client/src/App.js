import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./components/login.js"
import Register from "./components/register.js"
import Home from "./components/home.js"
import Contact from "./components/contact.js"
import Navbar from "./components/navbar.js"
import Footer from "./components/footer.js"
import About from "./components/about.js"
import OwnerDash from './components/ownerDash';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/ownerdash" element={<OwnerDash />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
