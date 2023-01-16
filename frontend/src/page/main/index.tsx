import React from 'react';
import InsertImage from '../insertImage';
import Wave from 'react-wavify';
import fisher_man from '@/assets/fisher_man.png';
import gull from '@/assets/gull.png';
import sun from '@/assets/sun.png';
import './index.scss';
import Nav from '@/components/nav';

const Main = () => {
  return (
    <div>
      <div className="main_background">
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Main;
