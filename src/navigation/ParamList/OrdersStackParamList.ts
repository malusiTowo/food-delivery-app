import { Orders } from "../../db/restaurants";

export type OrdersStackParamList = {
  Orders: undefined;
  OrdersDetail: { order: Orders };
};
