import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";
import { CheckBoxSelectProps } from "./Select.types";

export default {
  title: "Atoms/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const checkBoxSelectProps: CheckBoxSelectProps = {
 label: 'Categories',
 options: [
     {
         value: 'all',
         label: 'All'
     },
     {
        value: 'italian',
        label: 'Italian'
    },
    {
        value: 'italian',
        label: 'Seafood'
    },
    {
        value: 'Steakhouses',
        label: 'Steakhouses',
    }
 ]
};
export const checkBoxSelect = Template.bind({});
checkBoxSelect.args = checkBoxSelectProps;
