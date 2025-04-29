import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";

import ambazari from '../img/ambazari.jpg';
import koradi4 from '../img/koradi4.webp';
import '../css/style.css';

function Home() {
  const reviews = [
    {
      text: "“OnSite Nagpur made our trip unforgettable! Our guide Rahul knew all the hidden gems.”",
      name: "Anita Desai",
      location: "Mumbai, India",
      rating: 5
    },
    {
      text: "“Friendly staff and perfect planning. Loved the Ambazari Lake sunset cruise.”",
      name: "Vijay Singh",
      location: "Delhi, India",
      rating: 4
    },
    {
      text: "“Great value tour packages and delicious local food stops recommended by Priya.”",
      name: "Meera Patel",
      location: "Ahmedabad, India",
      rating: 5
    },
    {
      text: "“Nagpur’s heritage walk was so insightful. Special thanks to OnSite Nagpur team for a flawless experience.”",
      name: "Rohit Bansal",
      location: "Chandigarh, India",
      rating: 5
    },
    {
      text: "“I booked a last-minute tour and they arranged everything so quickly. Highly recommend their services!”",
      name: "Pooja Mehta",
      location: "Pune, India",
      rating: 4
    },
    {
      text: "“Affordable packages with luxurious amenities. Will definitely book again for my next trip!”",
      name: "Siddharth Sharma",
      location: "Indore, India",
      rating: 5
    }
  ];

  const articles = [
    {
      title: "Top 5 Hidden Gems of Nagpur",
      snippet: "Discover lesser-known sites around Nagpur—from serene temples on hilltops to secret local eateries off the beaten path.",
      link: "/articles/hidden-gems"
    },
    {
      title: "A Local’s Guide to Nagpur’s Cuisine",
      snippet: "Taste your way through Nagpur with insider tips on where to find the spiciest Saoji dishes and sweetest orange treats.",
      link: "/articles/culinary-guide"
    },
    {
      title: "Wildlife Adventures at Gorewada",
      snippet: "Plan the perfect safari day trip—everything you need to know about guided tours, best times to visit, and wildlife photography pointers.",
      link: "/articles/wildlife-adventures"
    },
    {
      title: "Best Sunset Spots Around Nagpur",
      snippet: "Capture breathtaking sunsets at Ambazari Lake, Futala Lake, and Seminary Hills. A must-read for photography lovers!",
      link: "/articles/sunset-spots"
    },
    {
      title: "Cultural Festivals You Shouldn't Miss",
      snippet: "From Ganesh Utsav to Nagpur Mahotsav, experience vibrant festivals that showcase the true spirit of Nagpur.",
      link: "/articles/cultural-festivals"
    },
    {
      title: "Weekend Getaways Near Nagpur",
      snippet: "Short on time? Explore the best quick trips like Pench National Park, Ramtek, and Adasa Temples for a refreshing weekend.",
      link: "/articles/weekend-getaways"
    }
  ];

  return (
    <div style={{ borderLeft: "1px solid #000", borderRight: "1px solid #000" }}>
      {/* Top Info Bar */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p><i className="fa fa-envelope mr-2"></i> OnSiteNagpur</p>
                <p className="text-body px-3">|</p>
                <p><i className="fa fa-phone-alt mr-2"></i> 907683769</p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                <a className="text-primary px-3" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                <a className="text-primary px-3" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                <a className="text-primary px-3" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a className="text-primary px-3" href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a className="text-primary pl-3" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
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
              <h1 className="m-0 text-primary"><span className="text-dark">OnSite</span>Nagpur</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
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

      {/* Carousel */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={ambazari} alt="Ambazari Lake" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                  <h1 className="display-3 text-white mb-md-4">Let's Discover Beauty Of Nagpur Together</h1>
                  <Link to="/bookform" className="pay-btn">Book Now</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={koradi4} alt="Koradi Temple" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                  <h1 className="display-3 text-white mb-md-4">Discover Nagpur Where Heritage Meets Adventure</h1>
                   <Link to="/bookform" className="pay-btn">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Reviews</h6>
            <h1>What Our Customers Say</h1>
          </div>
          <div className="row">
            {reviews.map((review, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <p className="card-text">{review.text}</p>
                    <div className="mb-2">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <FaStar key={j} className="text-warning mr-1" />
                      ))}
                    </div>
                    <h5 className="card-title mb-0">{review.name}</h5>
                    <small className="text-muted">{review.location}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel Articles */}
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Articles</h6>
            <h1>Explore Our Travel Tips & Stories</h1>
          </div>
          <div className="row">
            {articles.map((article, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.snippet}</p>
                    <Link to={article.link} className="btn btn-link p-0">Read More →</Link>
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
                    "Discover Nagpur Like Never Before: Explore the Best Tourist Attractions, Food, and Culture!"
                  </p>
                  <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: "5px" }}>
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
                  <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
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
                  <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
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
                  <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
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
                  <p className="h6">&copy; 2025 OnSite Nagpur. All Rights Reserved. T&C Apply</p>
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

export default Home;
