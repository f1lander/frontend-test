import React from "react";

import {
  FilterBarContainer,
  ValueContainer,
  Item,
} from "../../Atoms/Container/Container";
import { Button, Select } from "../../Atoms";
import { FilterBarProps } from "./FilterBar.types";

export const FilterBar: React.FC<FilterBarProps> = (
  props: FilterBarProps
): JSX.Element => {
  return (
    <FilterBarContainer>
      <Item flex={2}>
        <div id="filter-label">Filter By:</div>
        <ValueContainer>
          <input
            onChange={(e) => props.onFilter({ isOpenNow: e.target.checked })}
            type="checkbox"
            id="checkbox-open-now"
            value={0}
          />
          <label htmlFor="checkbox-open-now">Open Now</label>
        </ValueContainer>
        <Select filterType="price" onChange={props.onFilter} label="Price" options={props.priceOptions} />
        <Select filterType="categories" onChange={props.onFilter} label="Categories" options={props.categoriesOptions} />
      </Item>
      <Item flex={1} justifyContent="flex-end">
        <Button onClick={() => props.onClearAll()}>Clear All</Button>
      </Item>
    </FilterBarContainer>
  );
};
