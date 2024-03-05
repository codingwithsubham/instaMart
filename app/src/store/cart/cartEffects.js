import axios from 'axios';
import { ADD_TO_CART, API_ROUTE_PUB, GET_CART, REMOVE_FROM_CART } from '../../common/apiContants';
import { DANGER, SUCCESS } from '../../common/appConstants';
import { displayAlert } from '../alert/alertEffects';
import { API_CONFIG } from '../../common/constants';
import { addtoCart, fetching, getCart, removeFromCart } from './cartSlice';

export const addToBag = (body) => async (dispatch) => {
  try {
    dispatch(addtoCart(body));
    await axios.post(`${API_ROUTE_PUB}${ADD_TO_CART}`, body, API_CONFIG);
  } catch (error) {
    dispatch(displayAlert('Item Can not be added !!', DANGER));
  }
};

export const removeFromBag = (body) => async (dispatch) => {
  try {
    dispatch(removeFromCart(body));
    await axios.post(`${API_ROUTE_PUB}${REMOVE_FROM_CART}`, body, API_CONFIG);
  } catch (error) {
    dispatch(displayAlert('Item Can not be added !!', DANGER));
  }
};

export const getMyBag = () => async (dispatch) => {
  try {
    dispatch(fetching());
    const res = await axios.get(`${API_ROUTE_PUB}${GET_CART}`, API_CONFIG);
    dispatch(getCart(res?.data));
  } catch (error) {
    dispatch(displayAlert('Bag data Can not be fetched !!', DANGER));
  }
};
