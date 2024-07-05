import React from "react";
import review from '../assets/imgs/review.png';

const NewPage = () => {
    return (
        <div className="shadowCont">
            <p style={{color: '#1F94AA'}}>WHY MEASURE PROGESTERONE?</p>
            <p>
<strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.<br></br><br></br>
A sure way to confirm ovulation is a <strong>rise in Progesterone level</strong> after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.</p><br></br>

<p style={{color: '#A0ABAE'}}>* Source: National Institutes of Health</p><br></br>
<h2>

“Inito is all that you need to give you the best chance of conception."
</h2>
<div style={{display: 'flex'}}>
    <img src={review}/>
    <div style={{marginLeft: '8px'}}>
        <strong>Dr. Rachel Wagner</strong><br></br>MD
    </div>
</div>

        </div>
    )
}

export default NewPage;