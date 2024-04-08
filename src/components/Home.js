import React from 'react';
import image1 from './Images/back-1.jpg';
import image2 from './Images/back-2.png';

function Home() {
    return (
        <section className="home" id="home">
            <form action="#">
                <div className="search-box">
                    <h1>Your Wedding,Your Way</h1>
                    <p>Find the best wedding vendors with thousands of trusted reviews</p>
                    <select className="search-field">
                        <option disabled selected>Select vendor type</option>
                        <option value="Wedding Venues">Wedding Venues</option>
                        <option value="Family makeup">Family makeup</option>
                        <option value="Bridal makeup">Bridal Makeup</option>
                        <option value="Groom Wear">Groom Wear</option>
                        <option value="Wedding Decoration">Wedding decoration</option>
                    </select>
                    <select className="search-field">
                        <option disabled selected>City</option>
                        <option value="Anand">Anand</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Baroda">Baroda</option>
                        <option value="Goa">Goa</option>
                    </select>
                    <button className="btn">Search</button>
                </div>
            </form>
        </section>
    );
}

export default Home;
