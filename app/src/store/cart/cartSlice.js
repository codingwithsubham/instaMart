import { createSlice, current } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartLoading: true,
    cart: null
  },
  reducers: {
    fetching: (state) => {
      return {
        ...state,
        cartLoading: true,
      };
    },
    addtoCart: (state, { payload }) => {
      const currState = current(state);
      const cart = {...currState.cart, products: [...currState.cart.products, payload.product]};
      return {
        ...state,
        cart: cart,
        cartLoading: false,
      };
    },
    removeFromCart: (state, { payload }) => {
      const currState = current(state);
      let products = [...currState.cart.products];
      const index = products.findIndex(x => x._id === payload.product._id)
      products.splice(index, 1)
      const cart = {...currState.cart, products: products};
      return {
        ...state,
        cart: cart,
        cartLoading: false,
      };
    },
    getCart: (state, { payload }) => {
      return {
        ...state,
        cart: payload,
        cartLoading: false,
      };
    },
  },
});

export const { addtoCart, removeFromCart, getCart, fetching } =
  cartSlice.actions;
export default cartSlice.reducer;
