import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  value: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    AddToCart: (state, action) => {
        //for adding the cart item to cart
      state.value.push(action.payload);
    },
    RemoveFromCart: (state, action) => {
        //for removig the cart item from cart
        //it takes the index as an argument
        state.value.splice(action.payload, 1);
    },
  },
});

export const { AddToCart, RemoveFromCart } = CartSlice.actions;
export default CartSlice.reducer;
