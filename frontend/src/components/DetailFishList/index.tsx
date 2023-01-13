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
          <h1>{fish_type}</h1>
          <div className="DetailPage_line"></div>
          <div className="DetailPage_inform-closed_season">
            <h1>서식기간</h1>
            <p>{closed_season}</p>
          </div>
          <div className="DetailPage_inform-toxicyty">
            <h1>이거... 먹을 수 있는건가요?</h1>
            <p>
              {toxicyty == 'yes'
                ? '네 맛있게드세요.'
                : '아니요 ! 먹으면 안돼요!'}
            </p>
          </div>
          <div className="DetailPage_description">
            <h1>설명</h1>
            <p> {description}</p>
          </div>
        </div>
        <span onClick={(e) => closeModal(e)} className="DetailPage_closed">
          X
        </span>
      </div>
    </div>
  );
};

export default DetaiFish;
