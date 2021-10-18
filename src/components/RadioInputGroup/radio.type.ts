import { ChangeEvent } from 'react';

export interface RadioInputType {
  name?: string;
  label: string;
  value: string | number;
  checked?: boolean;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioInputsType<I> {
  inputs: RadioInputType[];
  name: string;
  default: I;
  required?: boolean;
  onChange: (value: I) => void;
  label: string;
}
