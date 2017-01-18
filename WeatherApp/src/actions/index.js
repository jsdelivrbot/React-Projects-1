import axios from 'axios';

const API_KEY = '2aadb711f16b2a81f53dd15454b668cb';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  // console.warn('url',url);

  const request = axios.get(url);

  // console.log('Request',request);

  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
