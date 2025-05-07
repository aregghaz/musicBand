import React, { FC } from 'react';
import BackgroundImage from '@assets/img/25.jpg';
import Button from '@uikit/Button/Button';
import './PreSale.scss';
import CustomImage from '@uikit/Image/Image';
import LazyLoadSection from '@components/Common/LazyLoadSection/LazyLoadSection';
import { formatDateToMonthAndDay } from '@utils/index';

interface IPreSaleSection {
  upcomingSectionData: any;
}

const PreSaleSection: FC<IPreSaleSection> = ({ upcomingSectionData }) => {

  console.log(upcomingSectionData,'upcomingSectionData');
  
  if (!upcomingSectionData) {
    return (
      <div className="background-img divider-background">
        <CustomImage src={BackgroundImage} alt="Background" />
      </div>
    );
  }

  const { title, tours } = upcomingSectionData;

  return (
    <section id="pre-sale-section" className="divider overlay">
      <div className="background-img divider-background">
        <CustomImage src={BackgroundImage} alt="Background" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="block-content text-center front-p">
              <h2 className="uppercase">PRE-SALE OF &apos;{title}&apos;</h2>

              <div className="block-presale mt-5">
                <ul className="list-unstyled">
                  {tours.map((tour: any, index: number) => (
                    <li key={index}>
                      <h5 className="uppercase list-inline-item">
                        Pre-Sale Tour {index + 1} :
                      </h5>
                      <span>
                        {formatDateToMonthAndDay(tour.preSaleStart, true)} -{' '}
                        {formatDateToMonthAndDay(tour.preSaleEnd, true)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button bordered className="pre-sale-button mt-3">
                Click for more info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
