import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_PRODUCT } from './types';

export const fetchUser = () => {
  return dispatch => {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const fetchProduct = () => {
  return dispatch => {
    axios
      .get('/api/products/:id')
    .then(res => res.json())
    .then(json => console.log(json));
    //(res => dispatch({ type: FETCH_PRODUCT, payload: res.data }));
  };
};

/*
export const fetchUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/current_user');
      dispatch({ type: FETCH_USER, payload: res.data });
    }
    catch (error) {
      console.error("can't get current user from axios: " + error);
    }
  };
};
*/
