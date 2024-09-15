import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";


const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odit vel eos officiis quos voluptates obcaecati possimus quisquam eius fugit, rem unde, ratione voluptatem! Voluptate nostrum obcaecati quisquam recusandae dolores!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-123-123-1230</li>
                    <li>contact@foodcourt.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 ©️ foodcourt.com - All Right Reserved.</p>
    </div>
  )
};

export default Footer;
