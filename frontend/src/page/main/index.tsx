import React from 'react';
import InsertImage from '../insertImage';
import Wave from 'react-wavify';
import fisher_man from '@/assets/fisher_man.png';
import gull from '@/assets/gull.png';
import sun from '@/assets/sun.png';
import './index.scss';

const Main = () => {

  return (
    <div>
      <div className="main_background">
        <div className='display w-full flex flex-row justify-between'>
          <img className="insert_gull" src={gull}></img>
          <img className="insert_sun" src={sun}></img>
        </div>
        <div className=''>
          <div className='insert_title'>강태공 이야기</div>
          <button className='insert_jbutton1'>낚시하러가기</button>
          <button className='insert_jbutton2'>내가 잡은 물고기 보기</button>
          <button className='insert_jbutton2'>물때 확인하기</button>
          <button className='insert_jbutton2'>랭킹보기</button>

        </div>
        <Wave className='insert_wave1' fill="#68E1FD"
        paused={false}
          options={{
            height: 30,
            amplitude: 20,
            speed: 0.10,
            points: 3
          }}                                                                                                                                                                                           
        />
        <Wave className='insert_wave2' fill="#53B4CA"
        paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 3
          }}
        />
        <Wave className='insert_wave3' fill="#4DA8BC"
        paused={false}
          options={{
            height: 1,
            amplitude: 20,
            speed: 0.3,
            points: 5
          }} 
        />
        <img className='insert_fisher_man' src={fisher_man}></img>
      </div>
      <InsertImage />
    </div>
  );
};

export default Main;
