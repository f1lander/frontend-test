import { RestaurantCardProps } from "../../Molecules/RestaurantCard/RestaurantCard.types";

export interface CardsSectionProps {
    cards: Array<RestaurantCardProps>;
    title: string;
    loading?: boolean;
    children?: any;
}