import {
  GET_PLACES_PENDING,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAIL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from './types';
import {GetPlaces} from '../Services';
import { AuthInfo } from '../Constants';


export const getPlaces = ( data : object) =>(dispatch: Function) => {
    dispatch({type: GET_PLACES_PENDING});
    GetPlaces(data)
      .then(res => {
        if (res.status == 200) {
          if(res.data.results.length !== 0)
          dispatch({
            type: GET_PLACES_SUCCESS,
            payload: {response: res.data},
          });
          else
          {
            dispatch({type: GET_PLACES_FAIL,payload:{err:res.data}});
          }
        } else {
          dispatch({type: GET_PLACES_FAIL,payload:{err:res.data}});
        }
      })
      .catch(err => {
        dispatch({type: GET_PLACES_FAIL,payload:{err:res.data}});
      });
};
export const authAction = ( data : object) =>(dispatch: Function) => {
  dispatch({type: LOGIN_PENDING});
  console.log('in auth action')
  console.log(data)
  if(AuthInfo.userName == data.userName && AuthInfo.password == data.password)
  {
    console.log('in auth action success')

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {response: data},
    });
  }
  else
  {
    console.log('in auth action err')

    dispatch({
      type: LOGIN_FAIL,
      payload: {err: "User Name or Password are wrong "},
    });
  }
};
