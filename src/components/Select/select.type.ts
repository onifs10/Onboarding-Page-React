export type SelectOption = {
  label: string;
  value: string;
};

export interface SelectPropTyes {
  name: string;
  label: string;
  required: boolean;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}
