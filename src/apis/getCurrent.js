
const getCurrent=()=>{
  const apiKey = process.env.REACT_APP_API_KEY
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Brisbane`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    const currentWeather = data
    console.log(currentWeather);
  })
  }


export default getCurrent