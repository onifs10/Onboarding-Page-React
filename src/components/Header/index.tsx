import Button from '../Button';
import './header.style.scss';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <Button variant="danger" onClick={() => {}}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
