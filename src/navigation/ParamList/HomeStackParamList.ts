import { Restaurant } from "../../db/restaurants";

export type HomeStackParamList = {
  Home: undefined;
  RestaurantDetail: { restaurant: Restaurant };
};
