import { FC } from 'react';
import './SliderArrows.scss';

interface IArrows {
  onClick?: () => void;
}

export const NextArrow: FC<IArrows> = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <span>&rarr;</span>
  </div>
);

export const PrevArrow: FC<IArrows> = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <span>&larr;</span>
  </div>
);
