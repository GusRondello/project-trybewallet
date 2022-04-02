// Esse reducer será responsável por tratar as informações da pessoa usuária
import { REQUEST_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  const { email } = action;

  switch (action.type) {
  case REQUEST_USER_EMAIL:
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
}

export default user;
