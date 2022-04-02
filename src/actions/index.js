// Coloque aqui suas actions
import getCurrencies from '../services/CurrencyAPI';

export const USER_EMAIL = 'USER_EMAIL';

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const RECEIVE_CURRENCY_SUCCESS = 'RECEIVE_CURRENCY_SUCCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';

export const userEmailRequest = (email) => ({
  type: USER_EMAIL,
  email,
});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const receiveCurrencySuccess = (currencies) => ({
  type: RECEIVE_CURRENCY_SUCCESS,
  currencies,
});

export const receiveWalletCurrencyFailure = (error) => ({
  type: RECEIVE_CURRENCY_FAILURE,
  error,
});

export const fetchWalletCurrency = () => (
  async (dispatch) => {
    dispatch(requestCurrency());
    const apiCurrenciesFillter = await getCurrencies();
    try {
      dispatch(receiveCurrencySuccess(apiCurrenciesFillter));
    } catch (error) {
      dispatch(receiveWalletCurrencyFailure(error));
    }
  }
);
