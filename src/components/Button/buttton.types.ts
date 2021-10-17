export interface ButtonProps {
  type: 'danger' | 'primary';
  children: JSX.Element | string;
  onClick?: () => void;
}
