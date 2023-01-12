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
        <div className='main_left_background'>
          <img className="insert_gull" src={gull}></img>
          <img className='insert_fisher_man' src={fisher_man}></img>
        </div>

        <div className='main_right_background'>
          <img className="insert_sun" src={sun}></img>
          <div className='insert_button_map'>
            <div>강태공 이야기</div>
            <button >낚시하러가기</button>
          </div> 
        </div>
        <Wave className='insert_wave1' fill="#68E1FD"
        paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.10,
            points: 3
          }}                                                                                                                                                                                           
        />
        <Wave className='insert_wave2' fill="#53B4CA"
        paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.15,
            points: 3
          }}
        />
        <Wave className='insert_wave3' fill="#4DA8BC"
        paused={false}
          options={{
            height: 40,
            amplitude: 40,
            speed: 0.3,
            points: 5
          }} 
        />
      </div>
      <InsertImage />
    </div>
  );
};

export default Main;
