import React, { useState } from "react";
import './Header.css';
import social from '../assets/imgs/social.png';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    }

    return (<div>
        <div style={{display: 'flex', justifyContent: 'space-evenly',paddingTop: '50px', paddingBottom: '50px', backgroundColor: '#112D35', color: 'white'}}>
                <div className="sections">
                    <div className="section">
                        <div className="heading" onClick={() => toggleSection('company')}>Company</div>
                        <ul className={`options ${openSection === 'company' ? 'open' : ''}`}>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Contat Us</li>
                        </ul>
                    </div>
                    <div className="section">
                        <div className="heading" onClick={() => toggleSection('support')}>Support</div>
                        <ul className={`options ${openSection === 'support' ? 'open' : ''}`}>
                            <li>FAQ</li>
                            <li>Terms</li>
                            <li>Privacy Policy</li>
                            <li>Returns & Warranty</li>
                        </ul>
                    </div>
                    <div className="section">
                        <div className="heading" onClick={() => toggleSection('contact')}>Get In Touch</div>
                        <ul className={`options ${openSection === 'contact' ? 'open' : ''}`}>
                            <li>+1 815-369-0989</li>
                            <li>help@inito.com</li>
                            <li>355 Bryant Street, Suite 403, San Francisco 94017</li>
                        </ul>
                    </div>
                </div>
            <div>
                <img src={social} alt="social"/>
            </div>
        </div>
        <div className="logo" style={{display: 'flex', color: '#869194', backgroundColor: '#000000', justifyContent: 'space-between', paddingInline: '150px'}}>
            <img src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg" alt="Logo"></img>
            <p>Copyright 2023, Inito Inc.</p>
        </div>
        </div>
    )
}

export default Footer;
