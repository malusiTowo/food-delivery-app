import { types } from "mobx-state-tree";
import BasketStore from "./models/BasketStore";
import OrdersStore from "./models/OrdersStore";
import RestaurantDetailProducts from "./models/RestaurantDetailProducts";
import User from "./models/User";

const RootStore = types
  .model("RootStore", {
    user: types.optional(User, {}),
    restaurantProducts: types.optional(RestaurantDetailProducts, {}),
    basket: types.optional(BasketStore, {}),
    orders: types.optional(OrdersStore, {})
  })
  .views(self => ({
    get isLoggedIn() {
      return self.user.name.length >= 0;
    }
  }));

const store = RootStore.create();

export default store;
