const url = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencies = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const filterData = Object.keys(data).filter((obj) => obj !== 'USDT');
  return filterData;
};

export default getCurrencies;
