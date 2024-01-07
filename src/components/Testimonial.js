import React from 'react';
import ProfilePic from '../images/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
    return (
        <div className="testimonial-section-wrapper">
        <div className="testimonial-section-top">
            <p className="primary-subheading">Ratings and Reviews</p>
            <h1 className="primary-heading">Peoples' Opinions</h1>
            <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt=""/>
            <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
    );
};

export default Testimonial;