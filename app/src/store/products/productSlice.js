import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    productLoading: true,
    products: []
  },
  reducers: {
    fetching: (state) => {
      return {
        ...state,
        productLoading: true,
      };
    },
    addProduct: (state, { payload }) => {
      return {
        ...state,
        products: [payload, ...state.products],
        productLoading: false,
      };
    },
    getProducts: (state, { payload }) => {
      return {
        ...state,
        products: payload,
        productLoading: false,
      };
    },
  },
});

export const { addProduct, getProducts, fetching } =
  productSlice.actions;
export default productSlice.reducer;
