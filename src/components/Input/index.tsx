import { InputPropTyes } from './input.type';
import './input.style.scss';
import Label from '../Label';

const Input = (Props: InputPropTyes): JSX.Element => {
  return (
    <div className="input-group">
      <Label>{Props.label}</Label>
      <input
        type="text"
        name={Props.name}
        id={Props.name}
        value={Props.value}
        onChange={(e) => Props.onChange(e.target.value)}
        required={Props.required}
      />
    </div>
  );
};

export default Input;
