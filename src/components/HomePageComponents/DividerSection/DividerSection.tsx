import React, { useState, useEffect } from 'react';
import BackgroundImage from '@assets/img/25.jpg';
import CustomImage from '@uikit/Image/Image';

const DividerSection = () => {
  return (
    <section className="divider overlay">
      <div className="background-img divider-background">
        <CustomImage src={BackgroundImage} alt="Background"  />
        <img src={BackgroundImage}  />
      </div>
      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="block-content text-center front-p">
              <h1 className="uppercase">Time left until the upcoming tour</h1>
              <p className="lead">
                27 to 31 July 2018 with over 10 shows - Cincinnati, Ohio
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividerSection;
