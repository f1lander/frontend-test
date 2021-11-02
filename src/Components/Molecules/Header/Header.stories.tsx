import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";
import { HeaderProps } from "./Header.types";

export default {
  title: "Molecules/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const headerProps: HeaderProps = {
  heading: "Restaurants",
  subHeading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};
export const header = Template.bind({});
header.args = headerProps;
