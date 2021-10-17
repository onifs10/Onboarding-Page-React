import { useState } from 'react';
import { NavProps } from './navs.type';
import './navs.style.scss';

const Navs = (Props: NavProps): JSX.Element => {
  const [selected, setSelected] = useState<number>(Props.selected);

  const handleSelected = (index: number): void => {
    setSelected(index);
    Props.onSelect(index);
  };

  return (
    <div className={'navs'}>
      {Props.navItems.map((item) => (
        <div
          className={`nav-item ${
            item.isChecked && item.id !== selected ? 'checked' : ''
          } ${item.active || item.id === selected ? 'active' : ''}`}
          onClick={() => handleSelected(item.id)}
        >
          <div className="id">
            {item.isChecked && !(item.active || item.id === selected) ? (
              <span>&#10004;</span>
            ) : (
              item.id
            )}
          </div>
          <div className="name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Navs;
