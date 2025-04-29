import React from "react";
import style from "../css/style.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
//images import 
import littlewoods from "../img/littlewoods2.jpg"; // Ensure this file exists in src/img folder
import semnaryhills from "../img/semnaryhills.jpeg"
import ramtek from "../img/ramtek1.jpg"
import team1 from "../img/team-1.jpg"
import team2 from "../img/team-2.jpg"
import team3 from"../img/team-3.jpg"
import team4 from "../img/team-4.jpg"
function About() {
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

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100"
                  src={ramtek}
                  alt="Ramtek"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 pt-5 pb-lg-5">
              <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>
                  About Us
                </h6>
                <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                <p>
                  Welcome to Nagpur Explorer, your go-to travel guide for discovering the best of Nagpur
                  and its surroundings. Whether you're a first-time visitor or a local adventurer, our
                  detailed guides, maps, and travel tips will help you plan an unforgettable trip!
                </p>
                <div className="row mb-4">
                  <div className="col-6">
                    <img className="img-fluid" src={littlewoods} alt="Little Wood" />
                  </div>
                  <div className="col-6">
                    <img className="img-fluid" src={semnaryhills} alt="Seminary Hills" />
                  </div>
                </div>
                <a href="" className="btn btn-primary mt-1">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="container-fluid pb-5">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: "100px", width: "100px" }}
                >
                  <i className="fa fa-2x fa-money-check-alt text-white"></i>
                </div>
                <div className="d-flex flex-column">
                  <h5>Explore Like a Local</h5>
                  <p className="m-0">
                    Get real-time recommendations from those who know the city best.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: "100px", width: "100px" }}
                >
                  <i className="fa fa-2x fa-award text-white"></i>
                </div>
                <div className="d-flex flex-column">
                  <h5>Real Experiences</h5>
                  <p className="m-0">
                    From the bustling streets of Sitabuldi Market to the serene sunsets at Futala Lake
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mb-4 mb-lg-0">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3"
                  style={{ height: "100px", width: "100px" }}
                >
                  <i className="fa fa-2x fa-globe text-white"></i>
                </div>
                <div className="d-flex flex-column">
                  <h5>Affordable City Tours</h5>
                  <p className="m-0">
                    Explore the best of Nagpur without breaking the bank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}

      {/* About Section */}
      <div className="container about-section py-5">
        <h2 className="text-center text-primary">Welcome to <b>OnsiteNagpur</b></h2>
        <p className="text-center">
          Your ultimate travel guide for exploring the heart of India – Nagpur! Whether you're a tourist,
          a local explorer, or a business traveler, we bring you a curated experience blending convenience,
          culture, and adventure.
        </p>

        <h3 className="text-primary mt-4">🌟 What We Do</h3>
        <p>
          At OnsiteNagpur, we believe that travel is more than just reaching a destination—it's about
          experiencing the essence of a place. We connect you with trusted auto-rickshaw and cab drivers
          who also serve as local guides, offering in-depth knowledge about Nagpur’s culture, history, and
          attractions. Our team ensures a smooth and hassle-free experience, whether you’re visiting
          historic landmarks, exploring nature reserves, or indulging in the city’s famous street food.
          With a strong focus on personalized travel, we provide well-planned tours that cater to your
          interests and preferences, making sure you get the most out of your visit.
        </p>
        <p className="text-center">
          Your ultimate travel guide for exploring the heart of India – Nagpur! Whether you're a tourist,
          a local explorer, or a business traveler, we bring you a curated experience blending convenience,
          culture, and adventure. Our services are designed to help you explore the city effortlessly,
          from its famous landmarks to its hidden gems. Discover Nagpur’s rich history, vibrant traditions,
          and unique local flavors while traveling comfortably with our experienced guides and well-connected
          transport network. We ensure that every journey is not just a trip, but an enriching and memorable
          experience filled with new discoveries and fascinating insights.
        </p>
        <div className="row mt-4">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="feature-card">
              <i className="fas fa-taxi"></i>
              <h5>Rickshaw & Cab Guides</h5>
              <p>Our drivers are storytellers and city experts who take you beyond tourist spots.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="feature-card">
              <i className="fas fa-map-marked-alt"></i>
              <h5>Personalized Travel</h5>
              <p>
                Choose from curated tours or customize your journey—food trails, shopping, historical sites & more.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h5>Safe & Affordable</h5>
              <p>Travel hassle-free with verified drivers, fair prices, and a commitment to safety.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h5>Local Insights</h5>
              <p>Experience Nagpur with locals who share stories and hidden gems.</p>
            </div>
          </div>
        </div>
        
      </div>
      {/* End About Section */}
     
    
      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Guides</h6>
            <h1>Our Travel Guides</h1>
          </div>
          <div className="row">
            {/* Angad Wahane */}
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
              <div className="team-item bg-white mb-4" style={{ border: '2px solid green', borderRadius: '8px' }}>
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team2} alt="Angad Wahane" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Angad Wahane</h5>
                  <p className="m-0">Senior Tour Guide</p>
                </div>
              </div>
            </div>

            {/* Sneha Patil */}
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
              <div className="team-item bg-white mb-4" style={{ border: '2px solid green', borderRadius: '8px' }}>
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team1} alt="Sneha Patil" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Sneha Patil</h5>
                  <p className="m-0">Cultural Expert</p>
                </div>
              </div>
            </div>

            {/* Rahul Deshmukh */}
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
              <div className="team-item bg-white mb-4" style={{ border: '2px solid green', borderRadius: '8px' }}>
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team4} alt="Rahul Deshmukh" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Rahul Deshmukh</h5>
                  <p className="m-0">Wildlife Safari Guide</p>
                </div>
              </div>
            </div>

            {/* Neha Sharma */}
            <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
              <div className="team-item bg-white mb-4" style={{ border: '2px solid green', borderRadius: '8px' }}>
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={team3} alt="Neha Sharma" />
                  <div className="team-social">
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-instagram"></i></a>
                    <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h5 className="text-truncate">Neha Sharma</h5>
                  <p className="m-0">Local Food Specialist</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Team End */}

 {/* Guide Descriptions - Green Border Section */}
 <div className="container my-5 p-4" style={{ border: '2px solid green', borderRadius: '8px' }}>
        <p><strong>Angad Wahane – Senior Tour Guide</strong><br/>
        With over a decade of experience leading groups across India’s most iconic destinations, Angad brings deep logistical know-how and an infectious enthusiasm to every journey. He crafts personalized day-by-day itineraries that balance must-see landmarks with hidden gems, ensuring you make the most of your time. Whether you’re navigating crowds at the Taj Mahal or discovering a quiet back-street temple in Varanasi, Angad’s expert planning and local contacts mean smooth transfers, skip-the-line access, and insider insights that turn a simple sightseeing trip into an unforgettable adventure.</p>

        <p><strong>Sneha Patil – Cultural Expert</strong><br/>
        Sneha’s passion lies in unearthing the traditions, art forms, and flavors that define each region of India. From arranging private Kathak performances in Jaipur to guiding you through a spice market tour in Kochi, she immerses you in local customs and cuisines. Her fluency in Marathi, Hindi, and English lets her facilitate genuine cultural exchanges—connecting you with artisans, chefs, and families—so you return home with both a richer understanding of India’s heritage and memories of heartfelt human connections.</p>

        <p><strong>Rahul Deshmukh – Wildlife Safari Guide</strong><br/>
        A trained naturalist and wildlife photographer, Rahul specializes in leading safaris through India’s national parks—from Ranthambore’s tigers to Kaziranga’s rhinos. His keen eye for animal behavior and track-reading skills maximize your chances of sightings while keeping you safe and respectful of the ecosystem. Rahul’s well-stocked field kits, high-powered scopes, and wealth of anecdotes about each species make every safari both thrilling and educational, whether you’re a first-timer hoping to glimpse an elephant herd or a seasoned birder chasing migratory rarities.</p>

        <p><strong>Neha Sharma – Local Food Specialist</strong><br/>
        Neha lives and breathes India’s culinary tapestry, curating immersive food journeys that take you beyond the tourist trail. She’ll guide you through bustling street stalls in Delhi, sunset fish markets in Mumbai, and hidden homestyle kitchens in Lucknow—introducing you to recipes passed down through generations. With her network of home cooks, spice traders, and sustainable farms, Neha arranges hands-on cooking workshops, dietary-sensitive meal plans, and private tastings. Her expertise guarantees you not only taste authentic regional flavors but also learn the stories and techniques behind every dish, turning every bite into a cultural discovery.</p>
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

export default About;
