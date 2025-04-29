// src/pages/Contact.js
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../css/contact.css';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'OnSiteNagpur',      // Your Service ID
        'OnSiteNagpur',      // Your Template ID
        formRef.current,     // Use formRef.current
        '5-UXHmrmtnGPrUruQ'   // Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2"></i> OnSiteNagpur
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i> 907683769
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3" href="https://facebook.com">
                  <FaFacebook />
                </a>
                <a className="text-primary px-3" href="https://twitter.com">
                  <FaTwitter />
                </a>
                <a className="text-primary px-3" href="https://linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-primary px-3" href="https://instagram.com">
                  <FaInstagram />
                </a>
                <a className="text-primary pl-3" href="https://youtube.com">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <Link to="/" className="navbar-brand">
              <h1 className="m-0 text-primary">
                <span className="text-dark">OnSite</span>Nagpur
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
              <div className="navbar-nav ml-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Services</Link>
                <Link to="/package" className="nav-item nav-link">Tour Packages</Link>
                <Link to="/event" className="nav-item nav-link">Event</Link>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-container">
        <h5 className="text-success text-center">CONTACT</h5>
        <h2 className="text-center font-weight-bold mb-4">Contact For Any Query</h2>
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="highlight"
              required
            />
          </div>
          <input type="text" name="title" placeholder="Subject" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
          <div className="button-row">
            <button type="submit" className="btn-green">Send Message</button>
            <Link to="/" className="btn-green">Home</Link>
          </div>
          {success && (
            <p style={{ color: 'green', marginTop: '10px' }}>
              Message sent successfully!
            </p>
          )}
        </form>
      </div>

      {/* Footer */}
      <div
        className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
        style={{ marginTop: '90px' }}
      >
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary">
                <span className="text-white">OnSite</span>Nagpur
              </h1>
            </Link>
            <p className="h6">
              "Discover Nagpur Like Never Before: Explore the Best Tourist Attractions, Food, and Culture!"
            </p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: '5px' }}>
              Follow Us
            </h6>
            <div className="d-flex">
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="https://x.com/?lang=en-in"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="https://www.facebook.com/login.php"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: '5px' }}
            >
              Our Services
            </h5>
            <div className="d-flex flex-column">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Tour Planning
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Local Transport & Rentals
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Hotel & Homestay Booking
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Tour Guides & Local Experiences
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Food & Culinary Experiences
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Wildlife & Adventure Tours
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blogs
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: '5px' }}
            >
              Useful Links
            </h5>
            <div className="d-flex flex-column">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>About
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Destination
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Services
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Packages
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Guides
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Testimonial
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blog
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: '5px' }}
            >
              Contact Us
            </h5>
            <p className="h6">
              <i className="fa fa-phone-alt mr-2"></i>9067615752
            </p>
            <p className="h6">
              <i className="fa fa-envelope mr-2"></i>onsitenagpur@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: 'rgba(256,256,256,0.1)' }}
      >
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="h6">&copy; 2025 OnSite Nagpur. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="h6">
              Designed by <a href="#" className="h6">Shravan Aswale</a>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </>
  );
};

export default Contact;
