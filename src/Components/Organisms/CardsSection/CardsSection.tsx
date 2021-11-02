import React from "react";

import { RestaurantCard } from "../../Molecules/RestaurantCard/RestaurantCard";
import { CardsSectionProps } from "./CardsSection.types";
import { Container, Heading, Item } from "../../Atoms";

export const CardsSection: React.FC<CardsSectionProps> = (
  props: CardsSectionProps
): JSX.Element => {
  return (
    <Container direction="column">
      <Heading fontSize="34px">{props.title}</Heading>
      <Item>
        {props.cards.map((item) => (
          <RestaurantCard {...item} />
        ))}
      </Item>
      <Item justifyContent="center">
      {props.children}
      </Item>
    </Container>
  );
};
