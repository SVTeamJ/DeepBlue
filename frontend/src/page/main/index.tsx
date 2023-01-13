import React from 'react';
import InsertImage from '../insertImage';
import Wave from 'react-wavify';
import fisher_man from '@/assets/fisher_man.png';
import gull from '@/assets/gull.png';
import sun from '@/assets/sun.png';
import './index.scss';

const Main = () => {
  const goToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="main_background">
        <div className='main_left_background'>
          {/*<img className="insert_gull" src={gull}></img>*/}
          <img className='insert_fisher_man' src={fisher_man}></img>
        </div>
        <div className='main_right_background'>
          {/*<img className="insert_sun" src={sun}></img>*/}
          <div className='insert_right_center_background'>
            <div className='insert_login_page'>
              <div className='insert_login_and_signin'>
                <a className='insert_login'>aaa</a>
                <a className='insert_signin'>bbb</a>
              </div>
            </div>
            {/*<div className='insert_title'>강태공 이야기</div>*/}
            {/*<div onClick={goToBottom} className='insert_jbutton' > 낚시하러가기 </div>*/}
            {/*div className='insert_jbutton'> 내가 잡은 물고기 보기 </div>*/}
            {/*<div className='insert_jbutton'> 물때 확인 하기 </div>*/}
            {/*<div className='insert_jbutton'> 랭킹 보기 </div>*/}
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
    </div>
  );
};

export default Main;
