import axios from 'axios';
import {
  ADD_PRODUCT,
  API_ROUTE_PUB,
  BY_CATEGORY,
  BY_SUB_CATEGORY,
  GET_PRODUCT,
} from '../../common/apiContants';
import { DANGER, SUCCESS } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { addProduct, fetching, getProducts } from './productSlice';
import { API_CONFIG } from '../../common/constants';

export const addNewProduct = (body) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${API_ROUTE_PUB}${ADD_PRODUCT}`,
      body,
      API_CONFIG
    );
    dispatch(addProduct(res?.data));
    dispatch(displayAlert('Product added !!', SUCCESS));
  } catch (error) {
    dispatch(displayAlert('Product Can not be added !!', DANGER));
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_PRODUCT}`,
      API_CONFIG
    );
    dispatch(getProducts(res?.data));
  } catch (error) {
    dispatch(displayAlert('Product Can not be fetched !!', DANGER));
  }
};

export const fetchProductsByCategory = (id) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_PRODUCT}${BY_CATEGORY}${id}`,
      API_CONFIG
    );
    dispatch(getProducts(res?.data));
  } catch (error) {
    dispatch(displayAlert('Product Can not be fetched !!', DANGER));
  }
};

export const fetchProductsBySubCategory = (id) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_PRODUCT}${BY_SUB_CATEGORY}${id}`,
      API_CONFIG
    );
    dispatch(getProducts(res?.data));
  } catch (error) {
    dispatch(displayAlert('Product Can not be fetched !!', DANGER));
  }
};
