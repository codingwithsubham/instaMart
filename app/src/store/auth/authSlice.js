import { createSlice } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from '../../common/appConstants';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem(AUTH_TOKEN),
    isAuthenticated: null,
    loading: false,
    user: null,
    userLocation: null,
  },
  reducers: {
    fetching: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    login: (state, { payload }) => {
      localStorage.setItem(AUTH_TOKEN, payload.token);
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    getUser: (state, { payload }) => {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    },
    saveUserLocation: (state, { payload }) => {
      return {
        ...state,
        userLocation: payload,
      };
    },
    authError: (state) => {
      localStorage.removeItem(AUTH_TOKEN);
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
    logout: (state) => {
      localStorage.removeItem(AUTH_TOKEN);
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    },
  },
});

export const { login, getUser, authError, fetching, logout, saveUserLocation } =
  authSlice.actions;
export default authSlice.reducer;
