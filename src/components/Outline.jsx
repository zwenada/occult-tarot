import React from "react";
import { Link } from "react-router-dom"; 
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-3 mt-5" style={{ background: "rgba(123, 63, 0, 0.5)" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-2 text-center text-md-start">
            <h3 className="h5">MCC</h3>
            <ul>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/exco"
                >
                  Exco
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="col-md-4 mt-2 text-center text-md-start">
            <h3 className="h5">Community</h3>
            <ul>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/event"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/event#events-form"
                >
                  Events Form
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/news#exco-form"
                >
                  Exco Form
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div className="col-md-4 mt-2 text-center text-md-start">
            <h3 className="h5">More</h3>
            <ul>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/terms"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/privacy"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/help"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/accessibility"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  className="link-warning link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p>Copyright &copy; 2024. All Rights Reserved!</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="ms-3" size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="ms-3" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="ms-3" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
