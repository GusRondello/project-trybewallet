// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY_SUCCESS, REQUEST_EXPENSE_SUCCES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const { currencies, expenses } = action;

  switch (action.type) {
  case RECEIVE_CURRENCY_SUCCESS:
    return {
      ...state,
      currencies,
    };
  /* case RECEIVE_CURRENCY_FAILURE:
    return {
      ...state,
      error,
    }; */
  case REQUEST_EXPENSE_SUCCES:
    return {
      ...state,
      expenses: [...state.expenses, expenses],
    };
  default:
    return state;
  }
};

export default wallet;
