import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import peocock from "../img/peacock.jpg"
  import bird from "../img/bird.jpg"

function Service() {
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
              Embark on Unforgettable Journeys – Explore, Dream, Discover! nagpur
            </h4>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Services Section Start */}
      <div className="container-fluid py-5 bg-light">
        <div className="container text-center">
          <p className="mb-4 left-align-text">
            Discover the best of Nagpur with our expert-guided tours and travel services. Whether you're a tourist, a business traveler, 
            or a local exploring your city, our personalized experiences cover Nagpur's rich culture, heritage, and scenic beauty. 
            From historic temples to serene lakes, we ensure a memorable journey filled with exciting discoveries.
          </p>
          <div className="row">
            {/* Service 1 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="service-card p-4 bg-white shadow-sm text-center rounded"
                style={{ border: "1px solid #ddd" }}
              >
                <i className="fas fa-taxi fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">City Tours with Local Guides</h5>
                <p>
                  Our expert guides will take you to iconic locations like <strong>Sitabuldi Fort, Zero Mile Marker, Futala Lake, and Maharaj Bagh Zoo</strong> while sharing the city’s historical and cultural significance.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="service-card p-4 bg-white shadow-sm text-center rounded"
                style={{ border: "1px solid #ddd" }}
              >
                <i className="fas fa-map-marked-alt fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">Customizable Travel Packages</h5>
                <p>
                  Choose from our tailored packages, including heritage walks at <strong>Deekshabhoomi</strong>, wildlife safaris at <strong>Pench National Park</strong>, or a relaxing boat ride at <strong>Ambazari Lake</strong>.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="service-card p-4 bg-white shadow-sm text-center rounded"
                style={{ border: "1px solid #ddd" }}
              >
                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">Safe & Reliable Transport</h5>
                <p>
                  Travel worry-free with our verified auto-rickshaw and cab services. We ensure fair pricing and a safe ride to places like <strong>Ramtek Temple, Adasa Ganpati Temple, and Telankhedi Garden</strong>.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="service-card p-4 bg-white shadow-sm text-center rounded"
                style={{ border: "1px solid #ddd" }}
              >
                <i className="fas fa-utensils fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">Food & Culinary Tours</h5>
                <p>
                  Taste Nagpur’s famous <strong>Tarri Poha, Saoji cuisine, and Orange Barfi</strong> at the best local food spots and traditional restaurants, guided by our food experts.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="service-card p-4 bg-white shadow-sm text-center rounded"
                style={{ border: "1px solid #ddd" }}
              >
                <i className="fas fa-landmark fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">Historical & Cultural Trips</h5>
                <p>
                  Explore Nagpur’s rich history by visiting landmarks like <strong>Nagardhan Fort, Bohra Masjid, and Balaji Temple</strong> with in-depth insights from our expert guides.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="col-md-6 col-lg-4 mb-4">
              <div
                className="service-card p-4 bg-white shadow-sm text-center rounded"
                style={{ border: "1px solid #ddd" }}
              >
                <i className="fas fa-hiking fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">Adventure & Nature Escapes</h5>
                <p>
                  Enjoy wildlife and nature at <strong>Gorewada Lake, Khekranala Dam, and Umred Karhandla Wildlife Sanctuary</strong>, perfect for trekking and outdoor enthusiasts.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 left-align-text">
            At <strong>OnsiteNagpur</strong>, we bring you the best of Nagpur’s heritage, culture, and nature with experienced guides and seamless travel arrangements. Whether you're looking for a spiritual retreat, an adventure in the wild, or a taste of Nagpur’s famous cuisine, we have the perfect tour for you!
          </p>
        </div>
      </div>
      {/* Services Section End */}

      <div className="col-lg-6 pt-5 pb-lg-5 mx-auto">
        <div className="about-text bg-white p-4 p-lg-5 my-lg-5 text-center">
          <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
          <p>
            Welcome to Nagpur Explorer, your go-to travel guide for discovering the best of Nagpur and its surroundings. Whether you're a first-time visitor or a local adventurer, our detailed guides, maps, and travel tips will help you plan an unforgettable trip!
          </p>
          <div className="row mb-4 justify-content-center">
  <div className="col-6">
    <img
      className="img-fluid"
      src={bird}
      alt=""
      style={{ width: "300px", height: "200px" }}
    />
  </div>
  <div className="col-6">
    <img
      className="img-fluid"
      src={peocock}
      alt=""
      style={{ width: "300px", height: "200px" }}
    />
  </div>
</div>

        </div>
      </div>

      {/* Table Navigation */}
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
                <a href="package.html" className="btn btn-primary btn-lg">
                  Packages
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

      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: "rgba(256,256,256,0.1)" }}>
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

export default Service;
