import { labelProps } from './label.type';
import './label.style.scss';
const Label = (Props: labelProps): JSX.Element => {
  return (
    <label className="input-label" htmlFor={Props.htmlFor}>
      {Props.children}
    </label>
  );
};

export default Label;
