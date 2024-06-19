import axios from 'axios'

const apiKey = process.env.REACT_APP_API_KEY;

const getIpAddress = async()=>{
  try {
    const url = 'https://api.ipify.org?format=json'
    const response = await axios.get(url)
    console.log('ip:',response);
    return response.data
  } catch (error) {
    throw new Error('Fetching IP address fail')
  }
}

const getIpCity = async()=>{
  try {
    const data = await getIpAddress()
    const ip = data.ip
    const url = `https://api.weatherapi.com/v1/ip.json?key=${apiKey}&q=${ip}`
    const response = await axios.get(url)
    console.log('weatherApiIp:',response.data);
    return response.data
  } catch (error) {
    throw new Error('Fetching IP address fail')
  }
}

export default getIpCity