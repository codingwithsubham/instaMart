import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import alertSlice from './alert/alertSlice';
import categorySlice from './category/categorySlice';
import productSlice from './products/productSlice';
import cartSlice from './cart/cartSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    alert: alertSlice,
    category: categorySlice,
    product: productSlice,
    cart: cartSlice,
  },
});