// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { USER_WALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  const { currencies, expenses } = action;

  switch (action.type) {
  case USER_WALLET:
    return {
      ...state,
      currencies,
      expenses,
    };
  default:
    return state;
  }
}

export default wallet;
