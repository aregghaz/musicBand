import './servicesItem.scss';
import { ServicesItemType } from '../../../types/ServicesItemType';

export default function ServicesItem({ item }: { item: ServicesItemType }) {
  return (
    <div className="servicesItem">
      <div
        className="servicesImage"
        style={{
          backgroundImage: `
                linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2)),
                url(${item.imgUrl})`,
        }}
      />
      <div className="intoBox">
        <div className="servicesContent">
          <h3>{item.title}</h3>
          {/*<p>{item.description}</p>*/}
        </div>
      </div>
    </div>
  );
}
