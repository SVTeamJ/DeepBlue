import { fishResult } from '@/mocks/handlers';
import React from 'react';
import { useLocation } from 'react-router-dom';
const Result = () => {
  const location = useLocation();
  const resultData = location.state as fishResult;
  console.log(resultData);
  return <div>물고기 결과페이지입니다</div>;
};

export default Result;
