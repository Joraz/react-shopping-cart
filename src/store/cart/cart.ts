import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItemWithQuantity extends CartItem {
  quantity: number;
}

export type CartState = {
  items: CartItemWithQuantity[];
  discountCodes: string[];
};

export const initialCartState: CartState = {
  items: [],
  discountCodes: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(({ id }) => id === payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...payload, quantity: 1 });
      }
    },
    removeItem: (state, { payload }: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(({ id }) => id === payload.id);
      if (!existingItem) {
        throw new Error(`No item with id ${payload.id} exists in cart`);
      }

      const { quantity } = existingItem;

      if (quantity === 1) {
        // Remove the item by filtering it out
        state.items = state.items.filter(({ id }) => id !== payload.id);
      } else {
        existingItem.quantity -= 1;
      }
    },
    addDiscount: (state, { payload }: PayloadAction<string>) => {
      if (!state.discountCodes.includes(payload)) {
        state.discountCodes.push(payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.discountCodes = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  addDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
