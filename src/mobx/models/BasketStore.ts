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
        name !== product.name;
      self.products = self.products.filter(removeProductFilter);
    },
    findProduct(product: Product) {
      return self.products.find(
        ({ name }: { name: string }) => name === product.name
      );
    },
    upateProductQuantity(product: Product, newQuantity: number) {
      const selectedProduct = this.findProduct(product);
      if (selectedProduct) selectedProduct.quantity = newQuantity;
    },
    clearBasket() {
      self.products = [];
    },
    removeFromBasket(product: Product) {
      const filteredProducts = self.products.filter(
        ({ name }: { name: string }) => name !== product.name
      );
      self.products = filteredProducts;
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
