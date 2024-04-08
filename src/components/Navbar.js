import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header className="head">
            <a href="#" className="logo">
                <FontAwesomeIcon icon={faHeart} />&nbsp;A<span>B</span>Good&nbsp;
                <FontAwesomeIcon icon={faHeart} />
            </a>
            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#service">Review</a>
                {/* <a href="#vendor">Vendors</a> */}
                <a href="#venue">Venue</a>
                <a href="#invite">E-invites</a>
                <a href="#contact">Contact</a>
            </nav>
            <div id="menu-bar"><FontAwesomeIcon icon={faBars} /></div>
        </header>
    );
}

export default Navbar;
