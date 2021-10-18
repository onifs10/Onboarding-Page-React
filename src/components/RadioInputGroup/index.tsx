import Label from '../Label';
import './radio.style.scss';
import { RadioInputsType } from './radio.type';
import Radio from './single.component';

const RadioInputs: (Prop: RadioInputsType<string | number>) => JSX.Element = (
  Props
): JSX.Element => {
  return (
    <>
      <Label>{Props.label}</Label>
      <div className="radios">
        {Props.inputs.map((item) => (
          <Radio
            name={Props.name}
            value={item.value}
            label={item.label}
            checked={Props.default === item.value}
            key={item.value}
            onChange={(e) => Props.onChange && Props.onChange(+e.target.value)}
          />
        ))}
      </div>
    </>
  );
};

export default RadioInputs;
