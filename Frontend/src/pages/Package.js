import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import adasaMandir from "../img/adasa mandir 1.png";
import futala from "../img/futala 4.jpg";
import ambazari from "../img/ambazari biodiversity 1.jpg";
import ramtekMandir from "../img/ramtek mandir 2.jpg";
import littlewood1 from "../img/littlewoods1.jpg";
import koradiMandir from "../img/koradi mandir 1.jpg";

function Package() {
  const packages = [
    // ─── Silver Packages ─────────────────────────────────────────────────────
    {
      id: 1,
      title: "Discover amazing places of Nagpur with us",
      image: adasaMandir,
      location: "Silver",
      days: "1 day",
      persons: "2 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹999",
      link: "/package1",
    },
    {
      id: 2,
      title: "Discover amazing places of the world with us",
      image: futala,
      location: "Silver",
      days: "1 day",
      persons: "4 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹1899",
      link: "#",
    },
    {
      id: 3,
      title: "Discover amazing places of the world with us",
      image: ambazari,
      location: "Silver",
      days: "1 day",
      persons: "10 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹7000",
      link: "#",
    },

    // ─── Gold Packages ───────────────────────────────────────────────────────
    {
      id: 4,
      title: "Discover amazing places of the world with us",
      image: ramtekMandir,
      location: "Gold",
      days: "3 days",
      persons: "2 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹2000",
      link: "#",
    },
    {
      id: 5,
      title: "Discover amazing places of the world with us",
      image: littlewood1,
      location: "Gold",
      days: "3 days",
      persons: "4 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹4899",
      link: "#",
    },
    {
      id: 6,
      title: "Discover amazing places of the world with us",
      image: koradiMandir,
      location: "Gold",
      days: "3 days",
      persons: "10 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹17000",
      link: "#",
    },

    // ─── Platinum Packages ──────────────────────────────────────────────────
    {
      id: 7,
      title: "Discover amazing places of Nagpur with us",
      image: adasaMandir,
      location: "Platinum",
      days: "1 day",
      persons: "2 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹18000",
      link: "#",
    },
    {
      id: 8,
      title: "Discover amazing places of the world with us",
      image: futala,
      location: "Platinum",
      days: "1 day",
      persons: "4 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹18500",
      link: "#",
    },
    {
      id: 9,
      title: "Discover amazing places of the world with us",
      image: ambazari,
      location: "Platinum",
      days: "1 day",
      persons: "10 Person",
      rating: "4.5",
      reviews: 250,
      price: "₹19000",
      link: "#",
    },
  ];

  return (
    <div style={{ borderLeft: "1px solid #000", borderRight: "1px solid #000" }}>
      {/* Top Bar */}
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
                  <FaLinkedin />
                </a>
                <a className="text-primary px-3" href="https://instagram.com">
                  <FaInstagram />
                </a>
                <a className="text-primary pl-3" href="https://youtube.com">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
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
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Services
                </Link>
                <Link to="/package" className="nav-item nav-link">
                  Tour Packages
                </Link>
                <Link to="/event" className="nav-item nav-link">
                  Event
                </Link>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h4
              className="text-white text-uppercase border-white"
              style={{ border: "2px solid white", padding: "20px" }}
            >
              Embark on Unforgettable Journeys – Explore, Dream, Discover! Nagpur
            </h4>
          </div>
        </div>
      </div>

      {/* Package Section */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mt-0 pb-3">
            <h6
              className="text-primary text-uppercase"
              style={{
                letterSpacing: "5px",
                fontSize: "24px",
                fontWeight: "bold",
                border: "2px solid green",
                padding: "5px 15px",
              }}
            >
              PACKAGES
            </h6>
            <h1 className="font-weight-bold">
              Unforgettable Travel Experiences Await!
            </h1>
          </div>
          <div className="row">
            {packages.map((pkg) => (
              <div key={pkg.id} className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <img className="img-fluid" src={pkg.image} alt={pkg.title} />
                  <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small className="m-0">
                        <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                        {pkg.location}
                      </small>
                      <small className="m-0">
                        <i className="fa fa-calendar-alt text-primary mr-2"></i>
                        {pkg.days}
                      </small>
                      <small className="m-0">
                        <i className="fa fa-user text-primary mr-2"></i>
                        {pkg.persons}
                      </small>
                    </div>
                    <Link className="h5 text-decoration-none" to={pkg.link}>
                      {pkg.title}
                    </Link>
                    <div className="border-top mt-4 pt-4">
                      <div className="d-flex justify-content-between">
                        <h6 className="m-0">
                          <i className="fa fa-star text-primary mr-2"></i>
                          {pkg.rating} <small>({pkg.reviews})</small>
                        </h6>
                        <h5 className="m-0">{pkg.price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5"
        style={{ marginTop: "90px" }}
      >
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary">
                <span className="text-white">OnSite</span>Nagpur
              </h1>
            </Link>
            <p className="h6">
              "Discover Nagpur Like Never Before: Explore the Best Tourist
              Attractions, Food, and Culture!"
            </p>
            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: "5px" }}
            >
              Follow Us
            </h6>
            <div className="d-flex">
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="https://twitter.com/?lang=en-in"
              >
                <FaTwitter />
              </a>
              <a
                className="btn btn-outline-primary btn-square mr-2"
                href="https://www.facebook.com/login.php"
              >
                <FaFacebook />
              </a>
              <a
                className="btn btn-outline-primary btn-square"
                href="https://www.instagram.com"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Our Services
            </h5>
            <div className="d-flex flex-column">
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Tour Planning
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Local Transport &amp;
                Rentals
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Hotel &amp; Homestay
                Booking
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Tour Guides &amp; Local
                Experiences
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Food &amp; Culinary
                Experiences
              </a>
              <a className="text-white-50 mb-2" href="#">
                <i className="fa fa-angle-right mr-2"></i>Wildlife &amp; Adventure
                Tours
              </a>
              <a className="text-white-50" href="#">
                <i className="fa fa-angle-right mr-2"></i>Blogs
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
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
              style={{ letterSpacing: "5px" }}
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
        style={{ borderColor: "rgba(256,256,256,0.1)" }}
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
    </div>
  );
}

export default Package;
