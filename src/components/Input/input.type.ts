export interface InputPropTyes {
  name: string;
  label: string;
  required: boolean;
  value: string;
  type: string;
  tag?: string | JSX.Element;
  onChange: (value: string) => void;
}
