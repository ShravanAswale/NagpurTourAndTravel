// /client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import BookingForm from './pages/BookingForm';
import About from './pages/About';
import Contact from './pages/Contact';
import Event from './pages/Event';
import Guide from './pages/Guide';
import Package from './pages/Package';
import Package1 from './pages/Package1';
import Service from './pages/Service';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookform" element={<BookingForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event"element={<Event />} />
        <Route path="/guide"element={<Guide />} />
        <Route path="/package"element={<Package />} />
        <Route path="/package1"element={<Package1 />} />
        <Route path="/service"element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
