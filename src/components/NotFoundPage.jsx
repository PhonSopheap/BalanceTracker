import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header"

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      404! <button className="button" onClick={goHome}>Go Home</button>
    </div>
  );
};

export default NotFoundPage;
