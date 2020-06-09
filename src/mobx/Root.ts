import { types } from "mobx-state-tree";

import User from "./models/User";

const RootStore = types
  .model({
    user: types.optional(User, {})
  })
  .views(self => ({
    get isLoggedIn() {
      return self.user.name.length >= 0;
    }
  }));

const store = RootStore.create();

export default store;
