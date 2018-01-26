import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return dispatch => {
    axios
      .get('/api/current_user')
      .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
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
