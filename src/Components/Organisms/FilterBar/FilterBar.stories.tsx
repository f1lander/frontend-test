import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilterBar } from "./FilterBar";
import { FilterBarProps } from "./FilterBar.types";

export default {
  title: "Molecules/FilterBar",
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const Template: ComponentStory<typeof FilterBar> = (args) => (
  <FilterBar {...args} />
);

const filterBarProps: FilterBarProps = {
  onFilter: (filter) => filter,
};
export const filterBar = Template.bind({});
filterBar.args = filterBarProps;
