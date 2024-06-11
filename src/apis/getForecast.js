import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Brisbane&days=5&aqi=yes`
const getForecast = async()=>{
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('error fetching get forecast',error)
    throw new Error('Fail to fetch forecast data')
  }
}

export default getForecast