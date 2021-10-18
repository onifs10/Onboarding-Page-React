import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioInputs from '.';
import { RadioInputType } from './radio.type';
import { VerificationMethod } from '../../layout/Forms/forms.type';

const Options: RadioInputType[] = [
  {
    value: VerificationMethod.BVN,
    label: 'BVN',
  },
  {
    value: VerificationMethod.PA,
    label: 'Personal Account Number',
  },
];

test('radio input test', async () => {
  const handleDone = jest.fn();
  render(
    <RadioInputs
      inputs={Options}
      name={'bvn'}
      default={VerificationMethod.BVN}
      onChange={handleDone}
      label={'test'}
    />
  );
  const bvnOption = screen.getByTestId(/radio-input-BVN/i);
  const PAOption = screen.getByTestId(/radio-input-Personal Account Number/i);
  expect(bvnOption).toBeInTheDocument();
  expect(PAOption).toBeInTheDocument();
  fireEvent.click(PAOption);
  fireEvent.click(bvnOption);

  expect(handleDone).toHaveBeenCalledTimes(2);
});
