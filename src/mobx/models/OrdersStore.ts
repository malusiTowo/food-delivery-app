/* eslint-disable no-param-reassign */
import { types } from "mobx-state-tree";
import moment from "moment";
import { Product } from "../../db/restaurants";
import { RestaurantDetailProduct } from "./RestaurantDetailProducts";

const OrdersStore = types
  .model("OrdersStore", {
    products: types.array(RestaurantDetailProduct),
    currentOrders: types.array(RestaurantDetailProduct),
    pastOrders: types.array(RestaurantDetailProduct)
  })
  .actions(self => ({
    setProducts(products: Product[]) {
      self.products = products;
    }
  }))
  .views(self => ({
    get currentOrders() {
      return self.products.filter(({ orderDate }) =>
        moment().isSameOrAfter(orderDate, "minute")
      );
    },
    get pastOrders() {
      return self.products.filter(({ orderDate }) =>
        moment().isSameOrBefore(orderDate, "minute")
      );
    }
  }));

export default OrdersStore;
