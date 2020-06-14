/* eslint-disable no-param-reassign */
import { types } from "mobx-state-tree";
import { Product } from "../../db/restaurants";
import { RestaurantDetailProduct } from "./RestaurantDetailProducts";

const BaksetStore = types
  .model("BaksetStore", {
    products: types.array(RestaurantDetailProduct)
  })
  .actions(self => ({
    addNewProduct(product: Product) {
      self.products.push({ ...product });
    },
    removeProduct(product: Product) {
      const removeProductFilter = ({ name }: { name: string }) =>
        name !== product.name || {};
      self.products = self.products.filter(removeProductFilter);
    },
    findProduct(product: Product) {
      const selectedProduct = self.products.find(
        ({ name }: { name: string }) => name === product.name
      );
      return selectedProduct;
    },
    upateProductQuantity(product: Product, newQuantity: number) {
      const selectedProduct = this.findProduct(product);
      selectedProduct.quantity = newQuantity;
    },
    clearBasket() {
      self.products = [];
    }
  }))
  .views(self => ({
    get basketTotal() {
      return self.products.reduce(
        (acc, val) => acc + val.price * val.quantity,
        0
      );
    }
  }));

export default BaksetStore;
