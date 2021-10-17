import { ChangeEvent } from 'react';
import { VerificationMethod } from '../../layout/Forms/forms.type';

export interface RadioInputType<I> {
  name?: string;
  label: string;
  value: I;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface RadionInputsType<I> {
  inputs: RadioInputType<VerificationMethod>[];
  name: string;
  default: I;
  onChange?: (value: I) => void;
  label: string;
}
