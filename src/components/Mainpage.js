import React from "react";
import './Header.css';
import mobileImage from '../assets/imgs/mobile.svg';
import comp1 from '../assets/imgs/bloomberg.svg';
import comp2 from '../assets/imgs/forbes.png';
import comp3 from '../assets/imgs/week.png';
import comp4 from '../assets/imgs/washington.png';
import comp5 from '../assets/imgs/entre.png';
import star from '../assets/imgs/star.png';

const Mainpage = () => {
    return (
        <div>
            <main className="content">
                <div className="text-content">
                    <img src={star} alt="star"/><span>      TRUSTED BY 20,000+ COUPLES</span>
                    <h1>Track your fertility hormones at home, in 10 minutes</h1>
                    <p>Get accurate results of <strong>Estrogen, LH, Progesterone metabolite PdG and FSH</strong> with Inito, the all-in-one, FDA-registered fertility monitor.</p>
                    <button className="initoButton">How does inito work?</button>
                </div>
                <div className="image-content">
                    <img src={mobileImage} alt="Description" />
                </div>
            </main>
            <p style={{color: '#C4C4C4'}}>As seen on</p>
            <div className="additional-images">
                <img src={comp1} alt="Image 1" />
                <img src={comp2} alt="Image 2" />
                <img src={comp3} alt="Image 3" />
                <img src={comp4} alt="Image 4" />
                <img src={comp5} alt="Image 5" />
            </div>
        </div>
    )
}

export default Mainpage;