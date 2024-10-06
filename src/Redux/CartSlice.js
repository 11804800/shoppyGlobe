import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddToCart: (state, action) => {
      state.value.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
      state.value.slice(action.payload, 1);
    },
  },
});

export const { AddToCart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;
