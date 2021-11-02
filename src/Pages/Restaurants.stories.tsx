import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilterBar } from "../Components/Organisms/FilterBar/FilterBar";
import { FilterBarProps } from "../Components/Organisms/FilterBar/FilterBar.types";

import { Header } from "../Components/Molecules/Header/Header";
import { HeaderProps } from "../Components/Molecules/Header/Header.types";

export default {
  title: "Templates/Restaurants",
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const headerProps: HeaderProps = {
  heading: "Restaurants",
  subHeading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

const filterBarProps: FilterBarProps = {
  onFilter: (filter) => filter,
};

const Template: ComponentStory<typeof FilterBar> = (args) => (
  <>
    <Header {...headerProps} />
    <FilterBar {...filterBarProps} />
  </>
);

export const filterBar = Template.bind({});
filterBar.args = {};
