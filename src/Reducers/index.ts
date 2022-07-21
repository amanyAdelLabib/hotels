import {combineReducers} from 'redux';
import {PlacesReducers} from './PlacesReducers';
import {AuthReducer} from './AuthReducer';


export const rootReducer = combineReducers({
  places: PlacesReducers,
  auth:AuthReducer



});

