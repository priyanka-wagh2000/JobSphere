import React from "react";
import { FaFacebook, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-col">
          <h2 className="footer-brand">
            Career <span>Connect</span>
          </h2>
          <p>Connecting talented professionals with amazing opportunities</p>
        </div>

        {/* For Job Seekers */}
        <div className="footer-col">
          <h4>For Job Seekers</h4>
          <ul>
            <li><a href="#">Browse jobs</a></li>
            <li><a href="#">Companies</a></li>
            <li><a href="#">Career advice</a></li>
            <li><a href="#">Premium</a></li>
          </ul>
        </div>

        {/* For Employers */}
        <div className="footer-col">
          <h4>For Employers</h4>
          <ul>
            <li><a href="#">Post a job</a></li>
            <li><a href="#">Browse candidates</a></li>
            <li><a href="#">Subscription plans</a></li>
            <li><a href="#">Recruitment solutions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h3>Follow Us on</h3>
          <div className="social-icons">
            <a className="facebook" href="#"><FaFacebook /></a>
            <a className="insta" href="#"><FaInstagramSquare/></a>
            <a className="linkedin" href="#"><TbBrandLinkedinFilled /></a>
            <a className="twitter" href="#"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        ©2025 CareerConnect. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
