import React from 'react';
import BackgroundImage from '@assets/img/25.jpg';
import Button from '@uikit/Button/Button';
import './PreSale.scss'
import CustomImage from '@uikit/Image/Image';

const PreSaleSection = () => {
  return (
    <section className="divider overlay">
      <div className="background-img divider-background">
      
        <CustomImage src={BackgroundImage} alt="Background"  />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="block-content text-center front-p">
              <h1 className="uppercase">PRE-SALE OF 'THE Upcoming TOUR'</h1>

              <div className="block-presale mt-5">
                <ul className="list-unstyled">
                  <li>
                    <h5 className="uppercase list-inline-item">
                      Pre-Sale Tour 1 :
                    </h5>
                    <span>2/07 - 2/09</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">
                      Pre-Sale Tour 2 :
                    </h5>
                    <span>2/14 - 2/16</span>
                  </li>
                </ul>
                <p className="opc-70 mb-0">
                  All pre-sales begin 12am local and end 6pm local time.
                </p>
              </div>

              {/* <a className="btn btn-primary uppercase with-ico border-2 mt-5" href="#">
                Click for more info
              </a> */}

              <Button bordered className='pre-sale-button mt-3'>Click for more info</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
