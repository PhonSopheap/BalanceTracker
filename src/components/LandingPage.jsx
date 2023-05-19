import React, { useEffect } from 'react';
import { MdViewHeadline } from "react-icons/md";
import LandingHeader from './LandingHeader';
import LandingText from './LandingText';
import $ from "jquery";


export const LandingPage = () => {
    useEffect(() => {
        $('.responsive-menu').click(function () {
            $('.menu-container').toggleClass('active');;
        });
    }, [])

    return (
        <div className="landing">
            <div className="toggle">
                <div className="responsive-header-content">
                    <p className="responsive-title">Expense Tracker</p>
                    <MdViewHeadline className="responsive-menu" />
                </div>
            </div>
            <div className="landing landing-content-container ">
                <LandingHeader />
                <div>
                    <LandingText />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;