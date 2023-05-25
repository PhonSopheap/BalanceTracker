import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const notConnected = () => {
  alert("Coming soon.'");
};

export const LandingHeader = () => {
  const navigate = useNavigate();

  const goSignIn = () => {
    navigate("/signin");
  };
  const goSingUp = () => {
    navigate("/signup");
  };
  return (
    <>
      <header className="landing-header">
        <div className="landing-content-container">
          <div className="landing-header__content">
            <div className="header-logo">
              <img src={logo} alt="ExpanseLog" />
            </div>
            <div className="landing-header__title title-container">
              <h2 style={{'fontWeight': 'bold'}}>Money Tracker</h2>
            </div>
            <div className="menu-container">
              <button className="button button--menu" onClick={notConnected}>
                Overview
              </button>
              <button className="button button--menu" onClick={notConnected}>
                Contact Us
              </button>
              <button className="button button--login" onClick={goSingUp}>
                Sign Up
              </button>
              <button className="button button--login" onClick={goSignIn}>
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
