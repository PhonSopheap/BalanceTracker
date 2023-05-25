import React from 'react'
import money from '../assets/money.png'
import { useNavigate } from "react-router-dom";

const LandingText = ({ startLogin }) => {
    const navigate = useNavigate();
    const  ExpanseDashboardPage= () => {
        navigate("/dashboard");
      };
    return (
        <div className="landing-body">
            <div className="landing-text-info-area">
                <p className="landing-text__title">Money tracker</p>
                <p className="landing-text__title">made easy</p>
                <p className="landing-text__paragraph">Stay on top of
                your expanes and income with Money Tracker. An online
                    tracking tool to help you better understand your
                habits and make measurable change. </p>
                <button className="button button--login" onClick={ExpanseDashboardPage}>Get Started</button>
            </div>
            <div>
                <img className="pig" src={money} alt='pigIllustration'/>
            </div>
        </div>
    )
}

export default LandingText;