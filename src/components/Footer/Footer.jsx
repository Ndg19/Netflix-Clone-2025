import React from "react";
import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social media */}
        <div className="social-icons">
          <YouTubeIcon className="social-icon" />
          <FacebookIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
        </div>

        {/* Footer lists */}
        <div className="footer-lists">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Only on Netflix</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
        </div>

        <p className="footer-text">© 2025 Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
