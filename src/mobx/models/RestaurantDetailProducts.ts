/* eslint-disable no-param-reassign */
import { types } from "mobx-state-tree";
import { Product } from "../../db/restaurants";

export const RestaurantDetailProduct = types.model("RestaurantDetailProduct", {
  name: types.string,
  description: types.string,
  imageUrl: types.string,
  price: types.number,
  quantity: types.optional(types.number, 1),
  orderDate: types.optional(types.Date, new Date())
});

const RestaurantDetailProductsStore = types
  .model("RestaurantDetailProductsStore", {
    products: types.array(RestaurantDetailProduct)
  })
  .actions(self => ({
    setProducts(products: Product[]) {
      self.products = products;
    }
  }));

export default RestaurantDetailProductsStore;
