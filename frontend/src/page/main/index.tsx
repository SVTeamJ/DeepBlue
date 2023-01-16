<<<<<<< develop
import React from 'react';

const Main = () => {
  return (
    <div>
      
=======
import React, { useState } from 'react';
import InsertImage from '../insertImage';
import Wave from 'react-wavify';
import fisher_man from '@/assets/fisher_man.png';
import './index.scss';
import { type } from 'os';
import { toUSVString } from 'util';
import Is_login_check from './islogjn';

const Main = () => {
  return (
    <div>
      <div className="main_background">
        <div className='main_left_background'>
          <img className='insert_fisher_man' src={fisher_man}></img>
        </div>
        <div className='main_right_background'>
          <div className='insert_right_center_background'>
            <div className='insert_login_layout'>

              <Is_login_check />


              <div className='insert_login_page'>
                
              </div>

              
            </div>
          </div>
        </div>
        <Wave
          className="insert_wave1"
          fill="#68E1FD"
          paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.1,
            points: 3,
          }}
        />
        <Wave
          className="insert_wave2"
          fill="#53B4CA"
          paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
        />
        <Wave
          className="insert_wave3"
          fill="#4DA8BC"
          paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.3,
            points: 5,
          }}
        />
      </div>
>>>>>>> feat: 로그인 레이아웃 재설정 및 버튼 대략적인 제작
    </div>
  );
};

export default Main;