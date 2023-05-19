import React, { useState } from "react";

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
    <>
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
              <span>Login with your username and password</span>
            </h1>
          </div>
        </div>

        <div className="content-container">
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input
              type="text"
              placeholder="username"
              autoFocus
              className="text-input"
              value={username}
              onChange={onUserNameChange}
            />
            <input
              type="password"
              placeholder="password"
              autoFocus
              className="text-input"
              value={password}
              onChange={onPasswordChange}
            />
            <div>
              <button className="button button--login" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
