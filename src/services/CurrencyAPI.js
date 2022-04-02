const urlAll = 'https://economia.awesomeapi.com.br/json/all';

export const fetchCurrencies = async () => {
  const response = await fetch(urlAll);
  const data = await response.json();
  const filterData = Object.keys(data).filter((obj) => obj !== 'USDT');
  return filterData;
};

export const getExchange = async () => {
  const response = await fetch(urlAll);
  const data = await response.json();
  return data;
};
