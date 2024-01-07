import React from 'react';

const Services = () => {
    return (
        <div className="services-section-wrapper">
            <div className="services-section-top">
                <p className="primary-subheading">Services</p>
                <h1 className="primary-heading">Image Processing</h1>
                <p className="primary-text">
                    Our System uses Machine Learning To Detect Whether An Xray or CTscan
                    Image is Normal Meaning the Patient is Healthy or Infected.
                </p>
            </div>
            <div className="services-section-bottom">
                <div className="services-button-container">
                    <button className="secondary-button">Upload Image</button>
                </div>
            </div>
        </div>
    );
};
export default Services;