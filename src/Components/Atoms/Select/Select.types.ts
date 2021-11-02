export interface OptionsProps {
  value: string;
  label: string;
}
export interface CheckBoxSelectProps {
  options: Array<OptionsProps>;
  label: string;
  filterType: string;
  onChange(filter: any): void;  
}
