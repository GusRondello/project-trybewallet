// Coloque aqui suas actions
export const REQUEST_USER_EMAIL = 'REQUEST_USER_EMAIL';
export const USER_WALLET = 'USER_WALLET';

export function userEmailRequest(email) {
  return {
    type: REQUEST_USER_EMAIL,
    email,
  };
}

export function userWalletRequest(currencies, expenses) {
  return {
    type: USER_WALLET,
    currencies,
    expenses,
  };
}
