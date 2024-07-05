import React from "react";
import mask from '../assets/imgs/mask.png';
import maskGraph from '../assets/imgs/maskGraph.png';
import maskMob from '../assets/imgs/maskMob.png';


const ImgCards = () => {
    return (<>
            <div className="">
            <div className="subBox imgContainer" style={{marginTop: '20px'}}>
                <img src={mask} alt="Image 1" />
                <div className="optPad">
                    <h1>Adapts to your irregular cycle</h1>
                    <p>Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br></br><br></br>
Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.</p>
                </div>
            </div>
            <div className="subBox middleSubBox imgContainer" style={{marginTop: '20px'}}>
                <div className="optPad">
                    <h1>Inito tracks everything so you don’t have to</h1>
                    <p>The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.Our App notifies you for everything:</p>
                    <p>• Your fertility levels</p>
                    <p>• When to test on the right days</p>
                    <p>• When you’ve successfully ovulated</p>
                    <p>• And when to roll into bed!</p>
                </div>
                <img src={maskMob} alt="Image 1"/>
            </div>
            <div className="subBox imgContainer" style={{marginTop: '20px'}}>
                <img src={maskGraph} alt="Image 1" />
                <div className="optPad">
                    <h1>Get charts and actual values of your hormones</h1>
                    <p>Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.<br></br><br></br>
Studies show that PdG levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.</p>
                </div>
            </div>
        </div>
    </>

    )
}

export default ImgCards;