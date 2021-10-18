import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VerifyAccount from './verify_account';

test('complete account verification', async () => {
  const handleDone = jest.fn();
  render(<VerifyAccount onComplete={handleDone} />);
  const bvnOption = screen.getByTestId(/radio-input-bvn/i);
  const PAOption = screen.getByTestId(/radio-input-Personal Account Number/i);
  const continueButton = screen.getByTestId(/button-continue/i);
  const bvnInput = screen.getByTestId(/^input-bvn/i) as HTMLInputElement;

  expect(bvnOption).toBeInTheDocument();
  expect(PAOption).toBeInTheDocument();

  fireEvent.change(bvnInput, { target: { value: '22447802689' } });
  expect(bvnInput.value).toBe('22447802689');

  fireEvent.click(continueButton);
  expect(handleDone).toHaveBeenCalledTimes(1);
});
