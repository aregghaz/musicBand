import { FC } from 'react';
import './SectionTitle.scss';

interface ISectionTitle {
  title?: string;
  className?: string;
}

const SectionTitle: FC<ISectionTitle> = ({ title = '', className = '' }) => {
  return (
    <div className={`container ${className}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-9">
          <div className="block-content text-center gap-one-bottom-md">
            <div className="block-title">
              <h2 className="uppercase title-styles">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
