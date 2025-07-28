import './services.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import ServicesItem from '@components/PerformanceServicesComponents/ServicesItem/ServicesItem';

export default function Services() {
  const items = useSelector((state: RootState) => state.services.items);

  return (
    <section className="services" id="Services">
      <div className={'globWrapper'}>
        <div className="topContent">
          <div className="leftContent">
            <p>Services and Events</p>
            <h2>
              Good music, good people, <br /> and good times
            </h2>
          </div>
          <div className="rightContent">
            <p>
              From weddings and corporate events to private parties and
              festivals — we offer customized musical solutions to suit every
              occasion and create the perfect atmosphere.
            </p>
          </div>
        </div>
        <div className="contentContainer">
          {items.map((item) => (
            <ServicesItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
