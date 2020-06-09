/* eslint-disable no-param-reassign */
import { types } from "mobx-state-tree";

const User = types
  .model({
    name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    picture: types.optional(types.string, "")
  })
  .actions(self => ({
    setUser(name: string) {
      self.name = name;
    },
    logoutUser() {
      self.name = "";
    }
  }));

export default User;
