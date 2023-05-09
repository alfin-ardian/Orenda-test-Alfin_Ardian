import {
  CustomerState,
  CustomerAction,
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  ADD_CUSTOMER_FAILURE,
} from "./types";
import { combineReducers } from "redux";

const initialState: CustomerState = {
  customers: [],
  loading: false,
  error: null,
};

export const customersReducer = (
  state = initialState,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };
    case FETCH_CUSTOMERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: [...state.customers, action.payload],
      };
    case ADD_CUSTOMER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  customers: customersReducer,
});
