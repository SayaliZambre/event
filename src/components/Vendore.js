import React from 'react';
import im1 from './Images/im1.jpg';
import im2 from './Images/im2.jpg';
import im3 from './Images/im3.jpg';
import im4 from './Images/im4.jpg';
import im5 from './Images/im5.jpg';
import im6 from './Images/im6.jpg';

function Vendor() {
    return (
        <section className="vendor" id="vendor">
            <div className="title">
                <h1><span>F</span>eatured <span>V</span>endor</h1>
            </div>
            <div className="vendor-list">
                <div className="vendor-row">
                    <div className="rate">4.5&nbsp;<i className="fa fa-star" aria-hidden="true"></i></div>
                    <img src={im1} alt="img" />
                    <h2>Beauty tales by komal rai</h2>
                    <p>Bridal Makeup</p>
                    <h3>Rs.20,000 onwards</h3>
                </div>
                <div className="vendor-row">
                    <div className="rate">4.2&nbsp;<i className="fa fa-star" aria-hidden="true"></i></div>
                    <img src={im2} alt="img" />
                    <h2>Flinters Management</h2>
                    <p>Wedding Planner</p>
                    <h3>Rs.2.5-4 Lakh</h3>
                </div>
                <div className="vendor-row">
                    <div className="rate">5.0&nbsp;<i className="fa fa-star" aria-hidden="true"></i></div>
                    <img src={im3} alt="img" />
                    <h2>Wedding Mela</h2>
                    <p>Wedding Decorators</p>
                    <h3>Rs.80,000-30,00,000</h3>
                </div>
                <div className="vendor-row">
                    <div className="rate">4.1&nbsp;<i className="fa fa-star" aria-hidden="true"></i></div>
                    <img src={im4} alt="img" />
                    <h2>SeventhHeaven Wedding Company</h2>
                    <p>Wedding Decorators-Rental Only</p>
                    <h3>Rs.80,000 Onwards</h3>
                </div>
                <div className="vendor-row">
                    <div className="rate">4.3&nbsp;<i className="fa fa-star" aria-hidden="true"></i></div>
                    <img src={im5} alt="img" />
                    <h2>Wedding Mela</h2>
                    <p>Wedding Decorators</p>
                    <h3>Rs.80,000-30,00,000</h3>
                </div>
                <div className="vendor-row">
                    <div className="rate">4.0&nbsp;<i className="fa fa-star" aria-hidden="true"></i></div>
                    <img src={im6} alt="img" />
                    <h2>Wedding Mela</h2>
                    <p>Wedding Decorators</p>
                    <h3>Rs.1.8 Lakh</h3>
                </div>
            </div>
        </section>
    );
}

export default Vendor;
