import React from "react";
import star from '../assets/imgs/star.png';

const Comments = () => {
    const Question = [{
        question: 'What results does Inito give?',
        para: 'Inito gives results as: High Fertility, Peak Fertility or Ovulation Confirmed. Inito also shows you the charts and actual values of all 3 hormones.'
    },
    {
        question: 'Will Inito work if I have PCOS?',
        para: ''
    },
    {
        question: 'How many test strips are required per cycle?',
        para: ''
    },
    {
        question: 'Where can I buy more refill strips? Do I need to buy a new monitor every cycle?',
        para: ''
    },
    {
        question: 'Do I need to use a test strip for each hormone?',
        para: ''
    },
    {
        question: 'Do medications affect results?',
        para: ''
    },
    {
        question: 'How accurate is Inito?',
        para: ''
    },
    {
        question: 'Is Inito FDA Registered and can HSA benefits be used to purchase it?',
        para: ''
    }]
    return (
        <div>
            <div className="shadowCont" style={{backgroundColor: '#F7F7FE'}}>
                <img src={star}/><br></br><br></br>
                This is my favorite fertility monitor I’ve tried so far. I was cautious about ordering since there’s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It’s totally fascinating to see my hormone levels on the chart! My LH levels don’t cooperate with standard ovulation strips (I never get a positive with standard strips), so it’s nice to see all the different hormones mapped out together.<br></br><br></br>
                <p style={{color: '#8F8F8F'}}>Sunny</p>
            </div>
            <h1>Your top questions, answered</h1>
            <div className="gridQs optPad">
                {Question.map((item, index) => {
                    return (
                        <div key={index} style={{ backgroundColor: '#F7F7FE', padding: '20px', textAlign: 'left',borderRadius: '40px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3>{item.question}</h3><span>+</span>
                            </div>
                            <p>{item.para}</p>
                        </div>
                    );
                })}
            </div>
        </div>

    )
}

export default Comments;