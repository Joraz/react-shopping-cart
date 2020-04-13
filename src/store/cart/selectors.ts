import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../store";

const selectCartState = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (cartState) => cartState.items
);

export const selectTotalPrice = createSelector(selectCartState, (cart) => {
  let totalBeforeDiscount = cart.items.reduce((total, { price, quantity }) => {
    total += price * quantity;
    return total;
  }, 0);

  if (cart.discountCodes.includes("FRUITY10")) {
    totalBeforeDiscount -= 10;
  }

  if (cart.discountCodes.includes("FRUITY30")) {
    totalBeforeDiscount -= 30;
  }

  return totalBeforeDiscount;
});

export const selectTotalNumberOfItems = createSelector(
  selectCartItems,
  (items) =>
    items.reduce((total, { quantity }) => {
      total += quantity;
      return total;
    }, 0)
);

export const selectDiscounts = createSelector(
  selectCartState,
  (cartState) => cartState.discountCodes
);
