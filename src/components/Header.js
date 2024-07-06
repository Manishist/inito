import React, { useState } from "react";
import './Header.css';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header >
            <div className="logo">
                <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg" alt="Logo"></img>
            </div>
            <nav className="navbar">
                <ul className={`nav-links ${navOpen ? 'flex' : 'dNone'} `}>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
                <button className="initoButton">Try Inito</button>
                <div className="hamburger" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
