import { fishInform } from '@/mocks/handlers';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import glassPreview from '../../assets/glassPreview.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import DetailFishList from '@/components/DetailFishList';
import logo from '../../assets/logo.png';
const FishList = () => {
  const navigator = useNavigate();
  const [modal, setModal] = useState(false);
  const [currentModalInform, setCurrentModalInform] = useState({
    fish_type: '',
    toxicyty: '',
    image: '',
    closed_season: '',
    description: '',
  });

  const { data } = useQuery<fishInform[]>(['FISHLIST'], () =>
    restFetcher({
      method: 'GET',
      path: '/api/v1/fishList/all',
    }),
  );

  const showDetailFish = (item: fishInform) => {
    setCurrentModalInform(() => item);
    setModal(true);
  };

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
      <div className="fishList_view-nav">
        <div>
          <div onClick={gotoMain} className="fishList_view-nav-logo">
            <img src={logo}></img>
            <div>태공씨의 하루</div>
          </div>
          <div className="fishList_view-nav-search">
            <div></div>
            <input placeholder="찾고싶은 물고기를 입력해주세요 !"></input>
            <button>검색</button>
          </div>
        </div>
      </div>
      <div className="fishList_view-title">
        <h1>내가 잡은 물고기 보기</h1>
        <p>이곳에서 여러분이 잡은 물고기의 정보를 모두 볼 수 있어요!</p>
      </div>
      <div onClick={gotoMain} className="fishList_gotoMain"></div>
      <div className="fishList_view-grid">
        {data?.map((item, index) => {
          return (
            <div
              onClick={() => showDetailFish(item)}
              className="fishList_view-card"
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className="fishList_view-img"
              ></div>
            </div>
          );
        })}
      </div>
      {modal ? (
        <DetailFishList
          modal={modal}
          setModal={setModal}
          {...currentModalInform}
        ></DetailFishList>
      ) : null}
    </div>
  );
};

export default FishList;
