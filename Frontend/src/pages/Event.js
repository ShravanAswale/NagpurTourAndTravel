// src/pages/Event.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import event1 from '../img/event1.jpeg';
import event2 from '../img/event2.jpeg';
import event3 from '../img/event3.jpeg';
import event4 from '../img/event4.jpeg';
import event5 from '../img/event5.jpeg';
import event6 from '../img/event6.jpeg';

function Event() {
  return (
    <div style={{ borderLeft: "1px solid #000", borderRight: "1px solid #000" }}>
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
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
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

      {/* Header Start */}
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h4
              className="text-white text-uppercase border-white"
              style={{ border: "2px solid white", padding: "20px", display: "inline-block" }}
            >
              Embark on Unforgettable Journeys – Explore, Dream, Discover! Nagpur
            </h4>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Events Start */}
      <div className="container py-5" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="text-center pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{
              letterSpacing: "5px",
              fontSize: "24px",
              fontWeight: "bold",
              border: "2px solid green",
              display: "inline-block",
              padding: "5px 15px",
            }}
          >
            EVENTS
          </h6>
          <h1 className="font-weight-bold">Celebrate the Joy of Festivals!</h1>
          <p className="mt-3">
            Don't miss out on the excitement! Join us for our upcoming events and create unforgettable memories.
          </p>
        </div>

        {/* Row of Events (3 columns on lg screens) */}
        <div className="row justify-content-center">
          {/* Event 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="package-item bg-white mb-2">
              <img
                className="img-fluid"
                src={event1}
                alt="Holi Festival"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <small className="m-0">
                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>Holi Festival
                  </small>
                  <small className="m-0">
                    <i className="fa fa-calendar-alt text-primary mr-2"></i>1 day
                  </small>
                  <small className="m-0">
                    <i className="fa fa-user text-primary mr-2"></i>All Ages
                  </small>
                </div>
                <a className="h5 text-decoration-none" href="event1.html">
                  Celebrate the Vibrant Holi Festival with Colors!
                </a>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0">
                      <i className="fa fa-star text-primary mr-2"></i>4.8 <small>(350)</small>
                    </h6>
                    <h5 className="m-0">Free</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="package-item bg-white mb-2">
              <img
                className="img-fluid"
                src={event2}
                alt="Christmas Celebration"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <small className="m-0">
                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>Christmas Celebration
                  </small>
                  <small className="m-0">
                    <i className="fa fa-calendar-alt text-primary mr-2"></i>1 day
                  </small>
                  <small className="m-0">
                    <i className="fa fa-user text-primary mr-2"></i>Family
                  </small>
                </div>
                <a className="h5 text-decoration-none" href="event2.html">
                  Join our Merry Christmas Celebration with Joy & Spirit!
                </a>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0">
                      <i className="fa fa-star text-primary mr-2"></i>4.9 <small>(300)</small>
                    </h6>
                    <h5 className="m-0">₹200</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="package-item bg-white mb-2">
              <img
                className="img-fluid"
                src={event3}
                alt="New Year Bash"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <small className="m-0">
                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>New Year Bash
                  </small>
                  <small className="m-0">
                    <i className="fa fa-calendar-alt text-primary mr-2"></i>1 night
                  </small>
                  <small className="m-0">
                    <i className="fa fa-user text-primary mr-2"></i>Friends
                  </small>
                </div>
                <a className="h5 text-decoration-none" href="event3.html">
                  Ring in the New Year with an Epic Bash and Live Music!
                </a>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0">
                      <i className="fa fa-star text-primary mr-2"></i>5.0 <small>(400)</small>
                    </h6>
                    <h5 className="m-0">₹300</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="package-item bg-white mb-2">
              <img
                className="img-fluid"
                src={event4}
                alt="Diwali Festival"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <small className="m-0">
                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>Diwali Festival
                  </small>
                  <small className="m-0">
                    <i className="fa fa-calendar-alt text-primary mr-2"></i>1 day
                  </small>
                  <small className="m-0">
                    <i className="fa fa-user text-primary mr-2"></i>Family
                  </small>
                </div>
                <a className="h5 text-decoration-none" href="event4.html">
                  Experience the Magic of Diwali with Lights & Celebrations!
                </a>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0">
                      <i className="fa fa-star text-primary mr-2"></i>4.7 <small>(220)</small>
                    </h6>
                    <h5 className="m-0">₹150</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Event 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="package-item bg-white mb-2">
              <img
                className="img-fluid"
                src={event5}
                alt="Easter Celebration"
                style={{
                  width: "100%",            // Reduced width (adjust as needed)
                  height: "250px",           // Reduced height (adjust as needed)




                }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <small className="m-0">
                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>Easter Celebration
                  </small>
                  <small className="m-0">
                    <i className="fa fa-calendar-alt text-primary mr-2"></i>1 day
                  </small>
                  <small className="m-0">
                    <i className="fa fa-user text-primary mr-2"></i>Kids & Adults
                  </small>
                </div>
                <a className="h5 text-decoration-none" href="event5.html">
                  Enjoy a Joyful Easter Celebration with Egg Hunts and Fun!
                </a>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0">
                      <i className="fa fa-star text-primary mr-2"></i>4.6 <small>(180)</small>
                    </h6>
                    <h5 className="m-0">₹100</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Event 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="package-item bg-white mb-2">
              <img
                className="img-fluid"
                src={event6}
                alt="Valentine's Day Special"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between mb-3">
                  <small className="m-0">
                    <i className="fa fa-map-marker-alt text-primary mr-2"></i>Valentine's Day Special
                  </small>
                  <small className="m-0">
                    <i className="fa fa-calendar-alt text-primary mr-2"></i>1 day
                  </small>
                  <small className="m-0">
                    <i className="fa fa-user text-primary mr-2"></i>Couples
                  </small>
                </div>
                <a className="h5 text-decoration-none" href="event6.html">
                  Celebrate Love on Valentine's Day with Romantic Experiences!
                </a>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex justify-content-between">
                    <h6 className="m-0">
                      <i className="fa fa-star text-primary mr-2"></i>4.9 <small>(270)</small>
                    </h6>
                    <h5 className="m-0">₹250</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Events End */}

      <table className="center-table">
        <tbody>
          <tr>
            <td>
              <div className="text-center mt-5">
                <a href="index.html" className="btn btn-primary btn-lg">
                  Home
                </a>
              </div>
            </td>
            <td>
              <div className="text-center mt-5">
                <a href="service.html" className="btn btn-primary btn-lg">
                  Next
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: "90px" }}>
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
              <a className="btn btn-outline-primary btn-square mr-2" href="https://x.com/?lang=en-in">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/login.php">
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

export default Event;
