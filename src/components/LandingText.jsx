import React from 'react'
import pigIllustration from '../assets/pigIllustration.png'

const LandingText = ({ startLogin }) => {
    return (
        <div className="landing-body">
            <div className="landing-text-info-area">
                <p className="landing-text__title">Expense tracking</p>
                <p className="landing-text__title">made easy</p>
                <p className="landing-text__paragraph">Stay on top of
                your spending with Expense Tracker. An online
                    tracking tool to help you better understand your
                habits and make measurable change. </p>
                <button className="button button--login" onClick={startLogin}>Get Started</button>
            </div>
            <div>
                <img className="pig" src={pigIllustration} alt='pigIllustration'/>
            </div>
        </div>
    )
}

export default LandingText;