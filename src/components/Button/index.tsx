import { ButtonProps } from './buttton.types';
import './button.style.scss';

const Button = (Props: ButtonProps): JSX.Element => {
    return (
        <button className={Props.type} onClick={Props.onClick}>
            {Props.children}
        </button>
    );
};

export default Button;
