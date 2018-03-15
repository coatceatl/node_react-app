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

//const fetchProduct;
//fetch('/api/products/product.json)
//  console.log(product.json);
//  .then(function(response) {
//    alert(response.headers.get('Content-Type'));
//    alert(response.status);
//
//    return response.json();
//  })
//  .then(function(product) {
//    alert(product.title);
//  })
//  .catch( alert );

/*
export const fetchProduct = () => {
  return dispatch => {
    axios
    .get('/api/products')
    .then(res => res.json())
    .then(json => console.log(json));
    //(res => dispatch({ type: FETCH_)
    //(res => dispatch({ type: FETCH_PRODUCT, payload: res.data }));
  };
};
*/
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
