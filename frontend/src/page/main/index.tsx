import React from 'react';
import InsertImage from '../insertImage';
import Wave from 'react-wavify';
import fisher_man from '@/assets/fisher_man.png';
import gull from '@/assets/gull.png';
import sun from '@/assets/sun.png';
import './index.scss';

const Main = () => {

  <Wave fill="#f79902"
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.45,
          points: 3
        }}                                                                                                                                                                                           
  />



  return (
    <div>
      <div className="main_background">

        <div className='display w-full h flex flex-row justify-between'>
          <img className="insert_gull" src={gull}></img>
          <img className="insert_gull" src={sun}></img>
        </div>
        <div className='f'>
          <button className='insert_jbutton1'>1dddd</button>
          <button className='insert_jbutton2'>2ddd</button>
        </div>
        <img className='insert_fisher_man' src={fisher_man}></img>
        <Wave className='insert_wave'>

        </Wave>
      </div>



      <InsertImage />
    </div>
  );
};

export default Main;
