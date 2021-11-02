import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StatusIndicator } from "./StatusIndicator";
import { StatusIndicatorProps } from "./StatusIndicator.types";

export default {
  title: "Atoms/Status Indicator",
  component: StatusIndicator,
} as ComponentMeta<typeof StatusIndicator>;

const Template: ComponentStory<typeof StatusIndicator> = ({
  children,
  ...args
}) => <StatusIndicator {...args}></StatusIndicator>;

export const starsFilledOne = Template.bind({});
starsFilledOne.args = {
  status: true
} as StatusIndicatorProps;
