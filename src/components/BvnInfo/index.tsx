import { useState } from 'react';
import { CheckIcon, DropIcon, LockIcon } from './icons';
import './info.style.scss';

const BvnInfo = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((value) => !value);
  };
  return (
    <div className="info-wrapper">
      <div className="info-header">
        <div className="left">
          <div className="icon">
            <LockIcon />
          </div>
          <div className="text">Why we need your BVN</div>
        </div>
        <div className="right" onClick={toggleOpen}>
          <div className="text">{isOpen ? 'hide' : 'show'}</div>
          <div className={`icon ${isOpen ? 'open' : ''}`}>
            <DropIcon />
          </div>
        </div>
      </div>
      <div className={`info-body ${isOpen ? 'open' : 'hide'}`}>
        <p className="gray">We only need access to your:</p>
        <div className="item">
          <span className="icon">
            <CheckIcon />
          </span>
          Full Name
        </div>
        <div className="item">
          <span className="icon">
            <CheckIcon />
          </span>
          Phone Number
        </div>
        <div className="item last">
          <span className="icon">
            <CheckIcon />
          </span>
          Date of Birth
        </div>
        <p>
          🔐 Your BVN does not give us access to your bank accounts or
          transactions
        </p>
      </div>
    </div>
  );
};

export default BvnInfo;
