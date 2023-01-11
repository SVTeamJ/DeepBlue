import React from 'react';
import InsertImage from '../insetImage';
import FishList from '../../components/fishList';
const Main = () => {
  return (
    <div>
      <div className="h-screen w-full bg-lime-500">메인페이지입니다</div>
      <FishList></FishList>
      <InsertImage />
    </div>
  );
};

export default Main;
