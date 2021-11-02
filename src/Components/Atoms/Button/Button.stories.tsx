import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({children, ...args}) => <Button {...args}>{children}</Button>;

export const button = Template.bind({})
button.args = {
    children: 'Clear All',
}
export const buttonFilled = Template.bind({});

buttonFilled.args = {
    variant: 'filled',
    children: 'Learn More'
} as ButtonProps;