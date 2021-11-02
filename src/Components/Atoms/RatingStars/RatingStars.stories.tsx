import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RatingStars } from "./RatingStars";
import { RatingStarsProps } from "./RatingStars.types";

export default {
  title: "Atoms/RatingStars",
  component: RatingStars,
} as ComponentMeta<typeof RatingStars>;

const Template: ComponentStory<typeof RatingStars> = ({
  children,
  ...args
}) => <RatingStars {...args}></RatingStars>;

export const starsFilledOne = Template.bind({});
starsFilledOne.args = {
  stars: 1,
} as RatingStarsProps;
