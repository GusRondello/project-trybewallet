// Coloque aqui suas actions
import { fetchCurrencies, getExchange } from '../services/CurrencyAPI';

export const USER_EMAIL = 'USER_EMAIL';

export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const RECEIVE_CURRENCY_SUCCESS = 'RECEIVE_CURRENCY_SUCCESS';
export const RECEIVE_CURRENCY_FAILURE = 'RECEIVE_CURRENCY_FAILURE';

export const REQUEST_EXPENSE_SUCCES = 'REQUEST_EXPENSE_SUCCES';
export const REQUEST_EXPENSE_FAILURE = 'REQUEST_EXPENSE_FAILURE';

export const userEmailRequest = (email) => ({
  type: USER_EMAIL,
  email,
});

export const receiveExpenseSuccess = (expenses) => ({
  type: REQUEST_EXPENSE_SUCCES,
  expenses,
});

export const receiveExpenseFailure = (error) => ({
  type: REQUEST_EXPENSE_FAILURE,
  error,
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

export const getWalletCurrency = () => (
  async (dispatch) => {
    dispatch(requestCurrency());
    const apiCurrenciesFillter = await fetchCurrencies();
    try {
      dispatch(receiveCurrencySuccess(apiCurrenciesFillter));
    } catch (error) {
      dispatch(receiveWalletCurrencyFailure(error));
    }
  }
);

export const getWalletExpenses = (expenses) => (
  async (dispatch, getState) => {
    const state = getState();
    const id = state.wallet.expenses.length;
    const getCurrency = await getExchange();
    const currencyArray = Object.entries(getCurrency);
    const newExpenses = {
      id,
      ...expenses,
      exchangeRates: {
        ...Object.fromEntries(currencyArray),
      },
    };
    try {
      dispatch(receiveExpenseSuccess(newExpenses));
    } catch (error) {
      dispatch(receiveExpenseFailure(error));
    }
  }
);

/* export const fetchWalletExpenses = (expenses) => (
  async (dispatch, getState) => {
    const { currency, value } = expenses;
    const state = getState();
    const id = state.wallet.expenses.length;
    const getExchangeCurrency = await getExchange(currency);
    const currencyExchange = `${currency}BRL`;
    const exchangeValue = getExchangeCurrency[currencyExchange].ask;
    const newObject = {
      id,
      ...expenses,
      exchangeRates:
    }
    console.log(value);
    console.log(exchangeValue);
    console.log(value * exchangeValue);
  }
);
 */
