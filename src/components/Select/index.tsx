import Label from '../Label';
import { SelectPropTyes } from './select.type';
import './select.style.scss';

const SelectInput = (Props: SelectPropTyes): JSX.Element => {
  return (
    <div className="input-group">
      <Label>{Props.label}</Label>
      <div className="select-div">
        <select
          name={Props.name}
          id={Props.name}
          value={Props.value}
          onChange={(e) => Props.onChange(e.target.value)}
          required={Props.required || false}
        >
          <option value="">...</option>
          {Props.options.map((item, idx) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <div className="icon">
          <DropSvg />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;

const DropSvg = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.414 0C.524 0 .077 1.077.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414z"
        fill="#A5B4CB"
      />
    </svg>
  );
};
