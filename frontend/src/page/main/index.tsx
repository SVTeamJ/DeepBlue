import React from 'react';
import './index.scss';
import Nav from '@/components/nav';

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="main_background">
        <div className="main_center">
          <div className="main_introduce">
            <h1>Upload fish Photo!</h1>
            <p>
              When you uploading your fish photo,
              <br /> we'll show you about fish informations.
            </p>
          </div>
          <div className="main_insertPicture"></div>
        </div>
        <div className="main_exam-pictures"></div>
      </div>
    </div>
  );
};

export default Main;
