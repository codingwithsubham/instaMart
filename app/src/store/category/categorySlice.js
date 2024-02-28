import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'alert',
  initialState: {
    categoryLoading: false,
    categories: [],
    subCategories: [],
  },
  reducers: {
    fetching: (state) => {
      return {
        ...state,
        categoryLoading: true,
      };
    },
    addCategory: (state, { payload }) => {
      return {
        ...state,
        categories: [payload, ...state.categories],
        categoryLoading: false,
      };
    },
    getCategory: (state, { payload }) => {
      return {
        ...state,
        categories: payload,
        categoryLoading: false,
      };
    },
    addSubCategory: (state, { payload }) => {
      return {
        ...state,
        subCategories: [payload, ...state.subCategories],
        categoryLoading: false,
      };
    },
    getSubCategory: (state, { payload }) => {
      return {
        ...state,
        subCategories: payload,
        categoryLoading: false,
      };
    },
  },
});

export const { addCategory, getCategory, addSubCategory, getSubCategory, fetching } =
  categorySlice.actions;
export default categorySlice.reducer;
