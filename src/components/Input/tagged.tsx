import { InputPropTyes } from './input.type';
import './input.style.scss';
import Label from '../Label';
import { useState } from 'react';

const InputTagged = (Props: InputPropTyes): JSX.Element => {
  const [input, setInput] = useState<HTMLInputElement | null>();
  const handleFocus = () => {
    input?.focus();
  };
  return (
    <div className="input-group-tagged" onClick={handleFocus}>
      <Label>{Props.label}</Label>
      <div className="input-container">
        <div className="tag">{Props.tag}</div>
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
    </div>
  );
};

export default InputTagged;
