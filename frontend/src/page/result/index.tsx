import React from 'react';
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
};

export default Result;