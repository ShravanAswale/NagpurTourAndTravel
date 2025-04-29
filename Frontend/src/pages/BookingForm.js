import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import '../css/bookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    option: '',
    date: '',
  });
  const [message, setMessage] = useState(''); 
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      setMessage('Successfully Registered!');
      setSubmittedBooking(response.data);
      setFormData({ name: '', email: '', package: '', option: '', date: '' });
    } catch (error) {
      console.error('Error creating booking:', error);
      setMessage('Registration failed. Please try again.');
      setSubmittedBooking(null);
    }
  };

  return (
    <div style={{ borderLeft: '1px solid #000', borderRight: '1px solid #000' }}>
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
                <a className="text-primary px-3" href="https://facebook.com"><FaFacebook/></a>
                <a className="text-primary px-3" href="https://twitter.com"><FaTwitter/></a>
                <a className="text-primary px-3" href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                <a className="text-primary px-3" href="https://instagram.com"><FaInstagram/></a>
                <a className="text-primary pl-3" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
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

      {/* Booking Form Section */}
      <div className="booking-container">
        <h2 className="booking-title">Booking Form</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="package">Select Package or Event:</label>
            <select id="package" name="package" value={formData.package} onChange={handleChange} required>
              <option value="">-- Choose an Option --</option>
              <optgroup label="Package">
                <option value="Package 1">Package 1</option>
                <option value="Package 2">Package 2</option>
                <option value="Package 3">Package 3</option>
                <option value="Package 4">Package 4</option>
                <option value="Package 5">Package 5</option>
              </optgroup>
              <optgroup label="Event">
                <option value="Event 1">Event 1</option>
                <option value="Event 2">Event 2</option>
                <option value="Event 3">Event 3</option>
                <option value="Event 4">Event 4</option>
                <option value="Event 5">Event 5</option>
              </optgroup>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="option">Any Special Request:</label>
            <input id="option" type="text" name="option" value={formData.option} onChange={handleChange}/>
          </div>
          <button type="submit" className="btn-submit">Submit Booking</button>
        </form>

        {message && (
          <p className="message" style={{ color: message.includes('Successfully') ? 'green' : 'red' }}>
            {message}
          </p>
        )}

        {submittedBooking && (
          <div className="booking-details">
            <h3>Your Booking Details:</h3>
            <p><strong>Name:</strong> {submittedBooking.name}</p>
            <p><strong>Email:</strong> {submittedBooking.email}</p>
            <p><strong>Package/Event:</strong> {submittedBooking.package}</p>
            <p><strong>Special Request:</strong> {submittedBooking.option}</p>
            <p><strong>Date:</strong> {submittedBooking.date && new Date(submittedBooking.date).toLocaleDateString()}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-lg-5" style={{ marginTop: '90px' }}>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <Link to="/" className="navbar-brand">
              <h1 className="text-primary"><span className="text-white">OnSite</span>Nagpur</h1>
            </Link>
            <p className="h6">"Discover Nagpur Like Never Before: Explore the Best Tourist Attractions, Food, and Culture!"</p>
            <h6 className="text-white text-uppercase mt-4 mb-3" style={{ letterSpacing: '5px' }}>Follow Us</h6>
            <div className="d-flex">
              <a className="btn btn-outline-primary btn-square mr-2" href="https://x.com/?lang=en-in"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-primary btn-square mr-2" href="https://www.facebook.com/login.php"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-primary btn-square" href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Our Services</h5>
            <div className="d-flex flex-column">
              {['Tour Planning','Local Transport & Rentals','Hotel & Homestay Booking','Tour Guides & Local Experiences','Food & Culinary Experiences','Wildlife & Adventure Tours','Blogs'].map((text, i) => (
                <a key={i} className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>{text}</a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Useful Links</h5>
            <div className="d-flex flex-column">
              {['About','Destination','Services','Packages','Guides','Testimonial','Blog'].map((text, i) => (
                <a key={i} className="text-white-50 mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>{text}</a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h5 className="text-white text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Contact Us</h5>
            <p className="h6"><i className="fa fa-phone-alt mr-2"></i>9067615752</p>
            <p className="h6"><i className="fa fa-envelope mr-2"></i>onsitenagpur@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256,256,256,0.1)' }}>
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="h6">&copy; 2025 OnSite Nagpur. All Rights Reserved. T&C Apply</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="h6">Designed by <a href="#" className="h6">Shravan Aswale</a></p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default BookingForm;
