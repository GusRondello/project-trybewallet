// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY_FAILURE, RECEIVE_CURRENCY_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { currencies, expenses, error } = action;

  switch (action.type) {
  case RECEIVE_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies,
      expenses,
    };
  case RECEIVE_CURRENCY_FAILURE:
    return {
      ...state,
      error,
    };
  default:
    return state;
  }
};

export default wallet;
