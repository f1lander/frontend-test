import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { RatingStarsProps } from "./RatingStars.types";

export const RatingStars: React.FC<RatingStarsProps> = (
  props: RatingStarsProps
): JSX.Element => {
  const stars = Number(props.stars);
  const isDecimal = Number.isNaN(stars)
    ? false
    : stars - Math.floor(stars) !== 0;
  const filledStars = Number.isNaN(Math.floor(stars))
    ? []
    : Array(Math.floor(stars)).fill(0);
  const halfStar = isDecimal ? 1 : 0;
  const emptyStars = Number.isNaN(Math.floor(stars))
    ? Array(5).fill(0)
    : Array(Math.floor(5 - Math.floor(stars) - halfStar)).fill(0);
  return (
    <div>
      {filledStars.map(() => (
        <FaStar />
      ))}
      {isDecimal && <FaStarHalfAlt />}
      {emptyStars.map(() => (
        <FaRegStar />
      ))}
    </div>
  );
};
