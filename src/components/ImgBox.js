import React from "react";
import oval from '../assets/imgs/oval.png';
import graph from '../assets/imgs/graph.png';


const ImgBox = () => {
    return (
        <div className="imgContainer">
            <div className="subBox">
                <img src={oval} alt="Image 1" />
                <div className="subImghead">
                    <h1>Predict and confirm your ovulation with actual data</h1>
                    <p>Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong> of your fertility hormones.<br></br><br></br>If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.</p>
                    <button className="initoButton">Get the inito kit</button>
                </div>
            </div>
            <div className="subBox" style={{marginTop: '40px'}}>
                <div className="subBoxCont">
                    <h1>Never miss a day again with Inito</h1>
                    <ul style={{textAlign: 'left'}}>
                        <li>Estrogen, which rises 3-4 days before ovulation</li>
                        <li>LH, which surges 24-36 hours before ovulation</li>
                        <li>PdG, which rises after ovulation</li>
                        <li>FSH, to track follicle growth</li>
                    </ul>
                </div>
                <img src={graph} alt="Image 1" />
            </div>
        </div>
    )
}

export default ImgBox;