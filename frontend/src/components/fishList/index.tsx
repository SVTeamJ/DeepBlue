import { fishInform } from '@/mocks/handlers';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
const FishList = () => {
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
  return (
    <div className="fishList_view">
      <div className="fishList_view-encyclopedia-box">
        <div className="fishList_view-encyclopedia">
          {data?.map((item: fishInform) => {
            return <div>{item.description}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default FishList;
