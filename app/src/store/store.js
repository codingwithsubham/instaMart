import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import alertSlice from './alert/alertSlice';
import categorySlice from './category/categorySlice';

export default configureStore({
  reducer: {
    auth: authSlice,
    alert: alertSlice,
    category: categorySlice
  },
});