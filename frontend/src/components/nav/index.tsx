import React from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import home from '../../assets/home.png';
import './index.scss';
import logo from '../../assets/logo.png';
const Nav = () => {
  const main = useMatch('/');
  const storage = useMatch('/storage');
  const login = useMatch('/login');

  const navigator = useNavigate();

  const gotoMain = () => {
    navigator('/');
  };

  const goLogout = () => {
    alert('로그아웃되었습니다!');
    localStorage.removeItem('access_token');
  };
  let token = localStorage.getItem('access_token');
  return (
    <div className="nav">
      <div onClick={gotoMain} className="nav-logo">
        <img src={logo} />
        <span>Deep </span>
        <span> Blue</span>
      </div>
      <div className="nav-list">
        <Link to="/" className={main ? 'focus' : 'not'}>
          Home
        </Link>
        <Link to="/storage" className={storage ? 'focus' : 'not'}>
          Storage
        </Link>
        {!token ? (
          <Link to="/login" className={login ? 'focus' : 'not'}>
            Login
          </Link>
        ) : (
          <Link to="/" onClick={goLogout} className={'not'}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
