/* eslint-disable max-len */
import { inject, observer } from "mobx-react";
import moment from "moment";
import React from "react";
import { StyleSheet, View } from "react-native";
import OrderCard from "../../../../components/Orders/OrderCard";
import { Orders } from "../../../../db/restaurants";
import Root from "../../../../mobx/Root";

interface RestaurantTabProps {
  root: typeof Root;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9FB"
  }
});

const orders: Orders[] = [
  {
    restaurantName: "Burger King",
    restaurantImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg",
    orderDate: moment().toDate(),
    orderPrice: 12,
    orderStatus: "DELIVERING"
  },
  {
    restaurantImage:
      "https://www.enpaysdelaloire.com/sites/default/files/styles/ogimage/public/sit/images/RESPDL085V503N53/Subway-Logo.jpg?itok=AAouaVzy",
    restaurantName: "Subway",
    orderDate: new Date(),
    orderPrice: 32,
    orderStatus: "DELIVERED"
  },
  {
    restaurantName: "Pizza Hut",
    restaurantImage:
      "https://upload.wikimedia.org/wikipedia/fr/4/40/Ph2016.png",
    orderDate: new Date(),
    orderPrice: 22,
    orderStatus: "PROCESSING"
  },
  {
    restaurantName: "Pizza Hut",
    restaurantImage:
      "https://upload.wikimedia.org/wikipedia/fr/4/40/Ph2016.png",
    orderDate: new Date(),
    orderPrice: 22,
    orderStatus: "CANCELLED"
  }
];

const RestaurantTab: React.FC<RestaurantTabProps> = () => {
  return (
    <View style={styles.container}>
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        data={root.basket.products}
        renderItem={() => (
          <View style={{ margin: 10 }}>
            <OrderCard />
          </View>
        )}
      /> */}
      {orders.map(val => (
        <View key={val.orderPrice} style={{ margin: 10 }}>
          <OrderCard order={val} />
        </View>
      ))}
    </View>
  );
};

export default inject("root")(observer(RestaurantTab));
