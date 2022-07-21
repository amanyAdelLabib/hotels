import {
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_FAIL
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    authLoading: false,
    errors: '',
  };
  
  export const AuthReducer = (
    state = initialState,
    action: {type: String; payload: any},
  ) => {
    switch (action.type) {
      // ************************ pending  *****************
  
      case LOGIN_PENDING: {
        return {
          ...state,
          authLoading: true,
        };
      }
  
      // ************************  success *****************
      case LOGIN_SUCCESS: {
        const {response} = action.payload;
        return {
          ...state,
          data: response,
          authLoading: false,
        };
      }
  
      // ************************ error *****************
  
      case LOGIN_FAIL: {
        const {err} = action.payload;
        return {
          ...state,
          errors: err,
          authLoading: false,
        };
      }
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
  