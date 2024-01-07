import React from 'react';
import AboutBackground from '../images/about-background.png';
import AboutBackgroundImage from '../images/about-background-image.jpg';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt=""/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt=""/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Healthcare
                </h1>
                <p className="primary-text">
                    We harness the power of cutting-edge machine learning technology to provide 
                    accurate and timely pneumonia diagnoses. Our mission is to revolutionize the way 
                    pneumonia is detected, enabling faster, more accessible, and more reliable 
                    healthcare solutions for individuals around the world.
                </p>
                <p className="primary-text">
                    Our vision is a world where pneumonia can be diagnosed swiftly and accurately, 
                    improving patient outcomes and saving lives. We believe that artificial intelligence 
                    can play a pivotal role in achieving this vision, and we are dedicated to making it a reality.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill/> Watch Video
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;