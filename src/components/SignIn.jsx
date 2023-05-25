import React, { useState } from "react";
import logo from "../assets/logo.png";
export default function SignIn(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onUserNameChange = (e) => {
    const user = e.target.value;
    setUserName(user);
  };
  const onPasswordChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please provide username or password.");
    } else {
      setError("");
    }
  };
  return (
    <><div className="page">
      <div className="cover">


        <div className="content-container margincontainer">
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}

            <div className="header-logo logocenter">
              <img src={logo} alt="ExpanseLog" />
              <h2 className="h2signin">Money Tracker</h2>
            </div>

            <h2 className="login">Login</h2>
            <input
              type="text"
              placeholder="Username"
              autoFocus
              className="text-input"
              value={username}
              onChange={onUserNameChange}
            />
            <input
              type="password"
              placeholder="Password"
              autoFocus
              className="text-input"
              value={password}
              onChange={onPasswordChange}
            />
            <div className="buttomcenter">
              <button className="button button--login  button--loginon :hover " type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
