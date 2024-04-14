import { ActionTypes } from "../Actions/ActionType";

const initialState = {
  products: [],
  isLoading: true,
  isError: false, // Initially, isError should be set to false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        isError: true, // Set isError to true when there is an error
      };
    default:
      return state; // Always include a default case to return the current state for unknown actions.
  }
};

export default productReducer;
