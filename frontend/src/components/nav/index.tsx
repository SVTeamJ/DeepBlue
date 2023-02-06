import React from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/logo.png';
import { useSetRecoilState } from 'recoil';
import { User } from '../signup';
import { UUid } from '@/atom/atom';

const Nav = () => {
  const main = useMatch('/');
  const storage = useMatch('/storage');
  const login = useMatch('/login');
  const chart = useMatch('/chart');

  const navigator = useNavigate();

  const gotoMain = () => {
    navigator('/');
  };
  const setUserInform = useSetRecoilState<User>(UUid);
  const goLogout = () => {
    alert('로그아웃되었습니다!');
    setUserInform({
      name: '',
      username: '',
      password1: '',
      password_check: '',
      id: '',
    });
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
        <Link to="/chart" className={chart ? 'focus' : 'not'}>
          Chart
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
