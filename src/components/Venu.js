import React from 'react';
import venue1 from './Images/venue-1.jpg';
import venue2 from './Images/venue-2.jpg';
import venue3 from './Images/venue-3.jpg';
import venue4 from './Images/venue-4.jpg';
import venue5 from './Images/venue-5.jpg';
import venue6 from './Images/venue-6.jpg';

const Venue = () => {
    return (
        <section className="venue" id="venue">
            <div className="title">
                <h1><span>V</span>enues</h1>
            </div>
            <div className="venue-list">
                <div className="venue-box">
                    <img src={venue5} alt="img" />
                    <div className="venue-info">
                        <h2>Goa</h2>
                        <p>Azaya Beach Resort, Goa</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={venue2} alt="img" />
                    <div className="venue-info">
                        <h2>Jaipur</h2>
                        <p>The Raj Palace</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={venue3} alt="img" />
                    <div className="venue-info">
                        <h2>Udaipur</h2>
                        <p>Taj Aravalli Resort and Spa</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={venue4} alt="img" />
                    <div className="venue-info">
                        <h2>Thailand</h2>
                        <p>Prince Palace Hotel</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={venue5} alt="img" />
                    <div className="venue-info">
                        <h2>Mumbai</h2>
                        <p>Grand Banquet, Chembur</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
                <div className="venue-box">
                    <img src={venue6} alt="img" />
                    <div className="venue-info">
                        <h2>Daman</h2>
                        <p>The Deltin,Daman</p>
                        <button className="btn">More Info</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Venue;
