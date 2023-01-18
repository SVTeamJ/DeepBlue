import React from 'react';
<<<<<<< HEAD
import './index.scss';
import dolImg from '../../assets/image 69.png';
import Nav from '@/components/nav';


const Result = () => {
  return (
    <div>
      <div className="insert_resultback">
      <Nav></Nav>
        <div className="insert_resulttitle">Ai가 예측한 결과입니다!</div>
        <div className="insert_resultpage">
          <div className="insert_bigbox">
            <div className="insert_smallbox1">
                <img className="insert_dolpic" src={dolImg}></img>
            </div>
            <div className="insert_smallbox2">
              <div className="insert_Namebox">돌고래</div>
              <div className="insert_discribeBox">이건 예시니까 아무렇게나 쓰고 있는데 이렇게 쓰는 거 맞나요? 저도 쓰고 싶지 않았어요. 네 알겠습니다~ </div>
              <table className="insert_table">
                <thead>
                  <tr>
                    <th className="text-left">독성유무</th>
                    <th className="text-left">&nbsp;&nbsp;&nbsp;제철&nbsp;&nbsp;&nbsp;</th>
                    <th className="text-left">&nbsp;금어기&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-left">유</td>
                    <td className="text-left">2월</td>
                    <td className="text-left">2월</td>
                  </tr>  
                </tbody>
              </table>
            </div>
          </div>
          <div className="insert_rbottombox">
            <div className="insert_cbutton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;확인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
=======
import imgA from '../../assets/fishimg.png';
import imgB from '../../assets/weedimg.png';
import imgC from '../../assets/house.png';

const Result = () => {
  return <div>
    <div className = "h-screen w-full bg-gradient-to-b from-cyan-500 to-cyan-800">
      <img className = "absolute h-64 w-64 bottom-3" src={imgA} />
      <img className = "absolute h-64 w-64 -right-10 top-[100px]" src={imgA} />
      <img className = "absolute h-60 w-60 -bottom-3 right-0" src={imgB} />
      <img className = "absolute h-30 w-30 right-1 top-0 pr-[150px]" src={imgC}/>
      <p className="text-2xl font-bold text-right hover:text-end leading-loose whitespace-pre">집으로 가기  </p>
    </div>
     
    </div>;
>>>>>>> #9
};

export default Result;