import { fishInform } from '@/mocks/handlers';
import React from 'react';
import './index.scss';

interface fishInfromProps extends fishInform {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}

const DetaiFish = ({
  fish_type,
  toxicyty,
  image,
  closed_season,
  description,
  setModal,
  modal,
}: fishInfromProps) => {
  const closeModal = (e: any) => {
    if (
      e.target.className !== 'DetailPage_inform' &&
      e.target.className == 'DetailPage'
    ) {
      setModal(!modal);
    } else if (e.target.className == 'DetailPage_closed') {
      setModal(!modal);
    }
  };
  return (
    <div onClick={(e) => closeModal(e)} className="DetailPage">
      <div className="DetailPage_inform">
        <div
          className="DetailPage_inform-img"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
          }}
        ></div>
        <div className="DetailPage_inform-input">
          <h1>물고기 이름: {fish_type}</h1>
          <div className="DetailPage_line"></div>
          <div>서식 기간:{closed_season}</div>
          <div>
            <p>이거... 먹을 수 있는건가요?</p>
            <p>
              {toxicyty == 'yes'
                ? '네 맛있게드세요.'
                : '아니요 ! 먹으면 안돼요!'}
            </p>
          </div>
          <div className="DetailPage_description">{description}</div>
        </div>
        <span onClick={(e) => closeModal(e)} className="DetailPage_closed">
          X
        </span>
      </div>
    </div>
  );
};

export default DetaiFish;
