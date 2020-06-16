/* eslint-disable max-len */
export interface Product {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}
export interface Restaurant {
  reviewRating: number;
  totalReviews: number;
  orderMinValue: number;
  distance: number;
  weekDayOpeningHours: string;
  weekEndOpeningHours: string;
  foodCategories: string[];
  address: string;
  name: string;
  coverImage: string;
  products: Product[];
}

export interface Orders {
  restaurantImage: string;
  restaurantName: string;
  orderDate: Date;
  orderPrice: number;
  orderStatus: "DELIVERING" | "DELIVERED" | "CANCELLED" | "PROCESSING";
}

export const restaurants: Restaurant[] = [
  {
    name: "Burger King",
    coverImage:
      "https://media-cdn.tripadvisor.com/media/photo-s/11/0f/6d/9c/burger-king.jpg",
    distance: 13,
    totalReviews: 432,
    address: "12 Jean Jaures",
    orderMinValue: 13,
    reviewRating: 4,
    weekDayOpeningHours: "9am - 19pm",
    weekEndOpeningHours: "9am - 23pm",
    foodCategories: ["Burgers", "Fast Food", "American"],
    products: [
      {
        name: "Double Steak house",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 10,
        quantity: 1
      },
      {
        name: "Double Whopper",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 8,
        quantity: 1
      },
      {
        name: "Big King XXL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/1841108/pexels-photo-1841108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 12,
        quantity: 1
      }
    ]
  },
  {
    name: "Pizza Hut",
    coverImage: "https://upload.wikimedia.org/wikipedia/fr/4/40/Ph2016.png",
    distance: 54,
    totalReviews: 273,
    address: "12 Compans Caffarelli",
    orderMinValue: 5,
    reviewRating: 3,
    weekDayOpeningHours: "9am - 19pm",
    weekEndOpeningHours: "9am - 23pm",
    foodCategories: ["Pizza", "Fast Food", "American"],
    products: [
      {
        name: "Margherita",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 10,
        quantity: 1
      },
      {
        name: "Samouraï",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 8,
        quantity: 1
      },
      {
        name: "Noridque",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 12,
        quantity: 1
      }
    ]
  },
  {
    name: "Subway",
    coverImage:
      "https://www.enpaysdelaloire.com/sites/default/files/styles/ogimage/public/sit/images/RESPDL085V503N53/Subway-Logo.jpg?itok=AAouaVzy",
    distance: 100,
    totalReviews: 122,
    address: "1 place de la Trinite",
    orderMinValue: 4.49,
    reviewRating: 4,
    weekDayOpeningHours: "9am - 19pm",
    weekEndOpeningHours: "9am - 23pm",
    foodCategories: ["Sandwiches", "Fast Food", "American"],
    products: [
      {
        name: "Menu sub30 Smoky chicken",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 10,
        quantity: 1
      },
      {
        name: "Menu Sub30 Beef Pastrami",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 8,
        quantity: 1
      },
      {
        name: "Menu Sub30 chicken Teriyaki",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, purus iaculis blandit imperdiet, ex neque pharetra ligula, ut viverra est nibh a neque. Nunc vel imperdiet lacus. ",
        imageUrl:
          "https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        price: 12,
        quantity: 1
      }
    ]
  }
];
