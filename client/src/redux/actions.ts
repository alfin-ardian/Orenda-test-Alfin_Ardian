import { Customer } from "./types";

export const FETCH_CUSTOMERS_REQUEST = "FETCH_CUSTOMERS_REQUEST";
export const FETCH_CUSTOMERS_SUCCESS = "FETCH_CUSTOMERS_SUCCESS";
export const FETCH_CUSTOMERS_FAILURE = "FETCH_CUSTOMERS_FAILURE";
export const ADD_CUSTOMER_REQUEST = "ADD_CUSTOMER_REQUEST";
export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const ADD_CUSTOMER_FAILURE = "ADD_CUSTOMER_FAILURE";

interface FetchCustomersRequestAction {
  type: typeof FETCH_CUSTOMERS_REQUEST;
}

interface FetchCustomersSuccessAction {
  type: typeof FETCH_CUSTOMERS_SUCCESS;
  payload: Customer[];
}

interface FetchCustomersFailureAction {
  type: typeof FETCH_CUSTOMERS_FAILURE;
  payload: string;
}

interface AddCustomerRequestAction {
  type: typeof ADD_CUSTOMER_REQUEST;
}

interface AddCustomerSuccessAction {
  type: typeof ADD_CUSTOMER_SUCCESS;
  payload: Customer;
}

interface AddCustomerFailureAction {
  type: typeof ADD_CUSTOMER_FAILURE;
  payload: string;
}

export type CustomerAction =
  | FetchCustomersRequestAction
  | FetchCustomersSuccessAction
  | FetchCustomersFailureAction
  | AddCustomerRequestAction
  | AddCustomerSuccessAction
  | AddCustomerFailureAction;

export const fetchCustomersRequest = (): FetchCustomersRequestAction => ({
  type: FETCH_CUSTOMERS_REQUEST,
});

export const fetchCustomersSuccess = (
  customers: Customer[]
): FetchCustomersSuccessAction => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const fetchCustomersFailure = (
  error: string
): FetchCustomersFailureAction => ({
  type: FETCH_CUSTOMERS_FAILURE,
  payload: error,
});

export const addCustomerRequest = (): AddCustomerRequestAction => ({
  type: ADD_CUSTOMER_REQUEST,
});

export const addCustomerSuccess = (
  customer: Customer
): AddCustomerSuccessAction => ({
  type: ADD_CUSTOMER_SUCCESS,
  payload: customer,
});

export const addCustomerFailure = (
  error: string
): AddCustomerFailureAction => ({
  type: ADD_CUSTOMER_FAILURE,
  payload: error,
});
