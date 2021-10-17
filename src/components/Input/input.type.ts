export interface InputPropTyes {
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}
