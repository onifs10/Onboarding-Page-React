import { ButtonProps } from './buttton.types';
import './button.style.scss';

const Button = (Props: ButtonProps): JSX.Element => {
  return (
    <button
      className={Props.variant}
      onClick={() => Props.onClick && Props.onClick}
      disabled={Props.disabled}
      data-testid={`button-${Props.children}`}
    >
      {Props.children}
    </button>
  );
};

export default Button;
