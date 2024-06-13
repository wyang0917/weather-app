import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;

const getCurrent = async (cityName) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=1`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Fail to fetch forecast data');
  }
};
export default getCurrent;
