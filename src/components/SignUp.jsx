import React from "react";
import logo from "../assets/logo.png";
export default function SignUp(props){
    return (
        <><div className="page">
          <div className="cover">
    
    
            <div className="content-container margincontainer">
              <form className="form" >
               
    
                <div className="header-logo logocenter">
                  <img src={logo} alt="ExpanseLog" />
                  <h2 className="h2signin">Money Tracker</h2>
                </div>
    
                <h2 className="signup">Sign up</h2>
                <input
                  type="text"
                  placeholder="Username"
                  
                  className="text-input"
                  
                  
                />
                <input
                  type="text"
                  placeholder="Email"
                  
                  className="text-input"
                  
                  
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="text-input"
                />
                <input
                  type="password"
                  placeholder="Re-password"
                  
                  className="text-input"
                  
                  
                />
                <div className="buttomcenter">
                  <button className="button button--login  button--loginon :hover " type="submit">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </>
      );
}