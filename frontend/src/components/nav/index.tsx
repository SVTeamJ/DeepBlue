import React from 'react';
import home from '../../assets/home.png';
import './index.scss';
const Nav = () => {
  const goToMain = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="nav">
      <div onClick={goToMain} className="nav_goHome">
        <img src={home}></img>
        <div className="nav_home">집으로 가기</div>
      </div>
    </div>
  );
};

export default Nav;
