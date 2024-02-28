import axios from 'axios';
import {
  ADD_CATEGORY,
  ADD_SUB_CATEGORY,
  API_ROUTE_PUB,
  GET_CATEGORY,
  GET_SUB_CATEGORY,
} from '../../common/apiContants';
import { DANGER, SUCCESS } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { addCategory, addSubCategory, fetching, getCategory, getSubCategory } from './categorySlice';
import { API_CONFIG } from '../../common/constants';

export const addNewCategory = (body) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${API_ROUTE_PUB}${ADD_CATEGORY}`,
      body,
      API_CONFIG
    );
    dispatch(addCategory(res?.data));
    dispatch(displayAlert('Category added !!', SUCCESS));
  } catch (error) {
    dispatch(displayAlert('Category Can not be added !!', DANGER));
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_CATEGORY}`,
      API_CONFIG
    );
    dispatch(getCategory(res?.data));
  } catch (error) {
    dispatch(displayAlert('Category Can not be fetched !!', DANGER));
  }
};

export const addNewSubCategory = (body) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${API_ROUTE_PUB}${ADD_SUB_CATEGORY}`,
      body,
      API_CONFIG
    );
    dispatch(addSubCategory(res?.data));
    dispatch(displayAlert('Category added !!', SUCCESS));
  } catch (error) {
    dispatch(displayAlert('Category Can not be added !!', DANGER));
  }
};

export const getSubCategories = (id) => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_SUB_CATEGORY}/${id}`,
      API_CONFIG
    );
    dispatch(getSubCategory(res?.data));
  } catch (error) {
    dispatch(displayAlert('Sub Category not fetched !!', DANGER));
  }
};

export const getSubCategoriesReturn = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_ROUTE_PUB}${GET_SUB_CATEGORY}/${id}`,
      API_CONFIG
    );
    return res.data;
  } catch (error) {
    dispatch(displayAlert('Sub Category not fetched !!', DANGER));
  }
};
