import { CheckBoxSelectProps } from "../../Atoms/Select/Select.types";

type OptionsType = CheckBoxSelectProps["options"];
export interface FilterBarProps {
    onFilter(filter: any): void;
    onClearAll(): void;
    priceOptions: OptionsType;
    categoriesOptions: OptionsType
}