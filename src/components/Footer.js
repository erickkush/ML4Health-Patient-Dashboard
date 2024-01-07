import React from 'react';
import Logo from '../images/logo.png';
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer-wrapper">
        <div className="footer-section-one">
            <div className="footer-logo-container">
                <img src={Logo} alt=""/>
            </div>
            <div className="footer-icons">
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className='footer-section-two'>
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Testimonials</span>

            </div>
            <div className="footer-section-columns">
                <span>254-712-345-678</span>
                <span>hello@health.com</span>
                <span>press@health.com</span>
                <span>contact@health.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
    );
};

export default Footer;