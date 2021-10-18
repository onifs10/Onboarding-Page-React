import React, { useState } from 'react';
import VerifyAccount from './AccountVerify/verify_account';
import './forms.style.scss';
import Navs from '../../components/Navs';
import { navItem } from '../../components/Navs/navs.type';
import { Steps } from '../../components/steps';
import SocialForm from './Socials';
import BuisnessForm from './Buisness';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [navItems, setNavItems] = useState<navItem[]>(navItemsData);
  const [selected, setSelected] = useState<number>(1);

  const handleChange = (id: number) => {
    setSelected(id);
  };

  const checkTab = (id: number) => {
    setNavItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: true };
        }
        return item;
      })
    );
  };
  const handleAccountForm = () => {
    // make axios call to api with data passed from the form
    checkTab(1);
    setSelected(2);
  };

  const handleSocialForm = () => {
    // make axios call to api with data passed from the form
    checkTab(2);
    setSelected(3);
  };

  const handleBuisnessForm = () => {
    // make axios call to api with data passed from the form
    checkTab(3);
  };

  return (
    <div className="forms-wrapper">
      <Navs navItems={navItems} onSelect={handleChange} selected={selected} />
      <Steps current={selected} length={navItems.length} />
      <div className="forms">
        <div className={`forms_div ${selected > 1 ? 'left' : ''}`}>
          <VerifyAccount onComplete={handleAccountForm} />
        </div>
        <div
          className={`forms_div ${selected > 2 ? 'left' : ''} ${
            selected < 2 ? 'right' : ''
          }`}
        >
          <SocialForm onComplete={handleSocialForm} />
        </div>
        <div className={`forms_div ${selected < 3 ? 'right' : ''}`}>
          <BuisnessForm onComplete={handleBuisnessForm} />
        </div>
      </div>
    </div>
  );
};

export default Forms;
