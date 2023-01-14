import React, { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import './index.scss';
import logo from '../../assets/logo.png';

const Nav = () => {
  const [checkScroll, setCheckScroll] = useState();
  const catchMatch = useMatch('/');
  const fishListMatch = useMatch('/fishList');
  const swarmCheckMatch = useMatch('/sign'); //이부분 바꾸기
  const rankingStudy = useMatch('/createStudy'); //이부분 경로 바꾸기
  return (
    <>
      <div className="Nav_logo">
        <img src={logo}></img>
        <span>태공씨의 하루</span>
      </div>
    </>
  );
};

export default Nav;
