import { useState } from 'react';
import { VerificationMethod } from '../../layout/Forms/forms.type';
import Label from '../Label';
import './radio.style.scss';
import { RadionInputsType } from './radio.type';
import Radio from './single.component';

const RadioInputs = (
  Props: RadionInputsType<VerificationMethod>
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
            onChange={(e: any) =>
              Props.onChange &&
              Props.onChange(+e.target.value as VerificationMethod)
            }
          />
        ))}
      </div>
    </>
  );
};

export default RadioInputs;
