import { configureStore, combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./cart/cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type StoreDispatch = typeof store.dispatch;
