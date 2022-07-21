import {
  GET_PLACES_PENDING,
  GET_PLACES_SUCCESS,
  GET_PLACES_FAIL,
} from '../Actions/types';

const initialState = {
  data: [],
  placesLoading: false,
  errors: [],
};

export const PlacesReducers = (
  state = initialState,
  action: {type: String; payload: any},
) => {
  switch (action.type) {
    // ************************ pending  *****************

    case GET_PLACES_PENDING: {
      return {
        ...state,
        placesLoading: true,
      };
    }

    // ************************ get places success *****************
    case GET_PLACES_SUCCESS: {
      const {response} = action.payload;
      return {
        ...state,
        data: response.results,
        placesLoading: false,
      };
    }

    // ************************ error *****************

    case GET_PLACES_FAIL: {
      const {err} = action.payload;
      return {
        ...state,
        errors: err.error_message,
        placesLoading: false,
      };
    }
    // ************************ default  *****************

    default:
      return state;
  }
};
