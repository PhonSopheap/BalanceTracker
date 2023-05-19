import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const goDashboard = () => {
    navigate('/');
  };
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <h1 onClick={goDashboard}>Balance Tracker</h1>
          <button className="button button--primary">Logout</button>
        </div>
      </div>
    </header>
  )
};

export default Header