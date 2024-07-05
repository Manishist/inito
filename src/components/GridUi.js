import React from "react";
import a from '../assets/imgs/1g.png';
import b from '../assets/imgs/2g.png';
import c from '../assets/imgs/3g.png';
import d from '../assets/imgs/4g.png';


const GridUi = () => {
    return (
        <div className="subBox newSubBox">
            <div className="optPad">
                <h1>A fertility lab at your fingertips</h1>
                <p>Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.</p>
                <button className="initoButton">Get the inito kit</button>
                <p>* The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.</p>
            </div>
            <div>
                <div className="subBox" style={{marginBottom: '16px', marginTop: '16px'}}>
                    <img src={a} alt="Image 1" style={{marginRight: '16px', marginBottom: '12px'}}/>
                    <img src={b} alt="Image 1" style={{marginRight: '16px'}}/>
                </div>
                <div className="subBox" style={{marginBottom: '16px'}}>
                    <img src={c} alt="Image 1" style={{marginRight: '16px', marginBottom: '12px'}}/>
                    <img src={d} alt="Image 1" style={{marginRight: '16px'}}/>
                </div>
            </div>
        </div>
    )
}

export default GridUi;