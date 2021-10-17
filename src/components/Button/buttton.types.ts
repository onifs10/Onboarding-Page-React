import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<string> {
  variant: 'danger' | 'primary';
  children: JSX.Element | string;
  onClick?: () => void;
}
