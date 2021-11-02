import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RestaurantCard } from "./RestaurantCard";
import { RestaurantCardProps } from "./RestaurantCard.types";

export default {
  title: "Molecules/Restaurant Card",
  component: RestaurantCard,
} as ComponentMeta<typeof RestaurantCard>;

const Template: ComponentStory<typeof RestaurantCard> = (args) => (
  <RestaurantCard {...args} />
);

const headerProps: RestaurantCardProps = {
  heading: "Restaurants",
  category: "Seafood",
  imageSrc: "https://www.w3schools.com/css/img_5terre.jpg",
  isOpen: true,
  priceCategory: "$$$",
  rating: 5,
};
export const Principal = Template.bind({});
Principal.args = headerProps;
