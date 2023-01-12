import { fishInform } from '@/mocks/handlers';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import glassPreview from '../../assets/glassPreview.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { useNavigate } from 'react-router-dom';
const FishList = () => {
  const navigator = useNavigate();
  const { data } = useQuery<fishInform[]>(['FISHLIST'], () =>
    restFetcher({
      method: 'GET',
      path: '/api/v1/fishList/all',
    }),
  );
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     let result = await axios.get('/api/v1/fishList/all');
  //     console.log(result);
  //   })();
  // }, []);
  const gotoMain = () => {
    navigator('/');
  };
  return (
    <div className="fishList_view">
      <div className="fishList_view-title">
        <div>로고</div>
        <div>물고기 도감</div>
        <div></div>
      </div>
      <div onClick={gotoMain} className="fishList_gotoMain">
        돌아가기
      </div>
      <div className="fishList_view-grid">
        {data?.map((item) => {
          return (
            <div className="fishList_view-card">
              <div className="fishList_view-img"></div>
              <div className="fishList_view-name">{item.fish_type}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishList;
