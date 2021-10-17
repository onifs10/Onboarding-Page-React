import React, { useState } from 'react';
import VerifyAccount from './AccountVerify/verify_account';
import './forms.style.scss';
import Navs from './navs/navs.component';
import { navItem } from './navs/navs.type';
import { Steps } from './steps';

const navItemsData: navItem[] = [
  {
    id: 1,
    name: 'Verify Account',
  },
  {
    id: 2,
    name: 'Social Handles',
  },
  {
    id: 3,
    name: 'Business Category',
  },
];
const Forms = (): JSX.Element => {
  const [navItems, setNavItems] = useState<navItem[]>(navItemsData);
  const [selected, setSelected] = useState<number>(1);

  const handleChange = (id: number) => {
    setSelected(id);
  };
  return (
    <div className="forms-wrapper">
      <Navs navItems={navItems} onSelect={handleChange} selected={selected} />
      <Steps current={selected} length={navItems.length} />
      <div className="forms">
        <div className={`forms_div ${selected > 1 ? 'left' : ''}`}>
          <VerifyAccount onComplete={() => {}} />
        </div>
        <div
          className={`forms_div ${selected > 2 ? 'left' : ''} ${
            selected < 2 ? 'right' : ''
          }`}
        >
          <VerifyAccount onComplete={() => {}} />
        </div>
        <div className={`forms_div ${selected < 3 ? 'right' : ''}`}>
          <VerifyAccount onComplete={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
