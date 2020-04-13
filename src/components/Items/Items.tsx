import React from "react";
import { Grid } from "@material-ui/core";

import { CartItem } from "../../store/cart/cart";
import { Item } from "../Item";

// Normally we'd want to asynchronously load these from somewhere, but for simplicity's sake we'll just define fake data
const fakeItems: CartItem[] = [
  {
    id: "1",
    name: "Apples",
    description: "Juicy & Sweet",
    image: "./apple.jpg",
    price: 49,
  },
  {
    id: "2",
    name: "Bananas",
    description: "Bendy & Yellow",
    image: "./bananas.jpg",
    price: 20,
  },
  {
    id: "3",
    name: "Oranges",
    description: "Round & Orange",
    image: "./orange.jpg",
    price: 99,
  },
  {
    id: "4",
    name: "Pineapple",
    description: "Spiky!",
    image: "./pineapple.jpg",
    price: 175,
  },
];

const Items: React.FC = () => (
  <Grid container spacing={2}>
    {fakeItems.map((item) => (
      <Grid item xs={3} key={item.name}>
        <Item item={item} />
      </Grid>
    ))}
  </Grid>
);

export default Items;
