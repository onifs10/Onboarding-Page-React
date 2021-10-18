import { InputPropTyes } from './input.type';
import './input.style.scss';
import Label from '../Label';
import { useState } from 'react';

const Input = (Props: InputPropTyes): JSX.Element => {
  const [input, setInput] = useState<HTMLInputElement | null>();
  const handleFocus = () => {
    input?.focus();
  };
  return (
    <div className="input-group" onClick={handleFocus}>
      <Label>{Props.label}</Label>
      <input
        type={Props.type}
        name={Props.name}
        id={Props.name}
        value={Props.value}
        onChange={(e) => Props.onChange(e.target.value)}
        required={Props.required}
        ref={setInput}
      />
    </div>
  );
};

export default Input;
