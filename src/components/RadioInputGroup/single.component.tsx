import * as CSS from 'csstype';
import { RadioInputType } from './radio.type';

const Radio = (Props: RadioInputType<any>): JSX.Element => {
  return (
    <label className="input-container">
      <input
        type="radio"
        name={Props.name}
        value={Props.value}
        defaultChecked={Props.checked}
        onChange={Props.onChange}
      />
      <span className="radio-text"> {Props.label} </span>
    </label>
  );
};

export default Radio;
