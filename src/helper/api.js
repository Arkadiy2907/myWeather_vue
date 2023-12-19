import axios from 'axios';

export function fetchWeatherNow(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecbaa67ba7bece31be9e96bd8181180a`;
  return axios.get(url);
}

export function fetchWeatherNextDays(lat, lon) {
  // console.log(lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=ecbaa67ba7bece31be9e96bd8181180a`;
  return axios.get(url);
}

export function fetchNearMyCity(lat, lon) {
  // console.log(lat, lon);
  const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=ecbaa67ba7bece31be9e96bd8181180a`;
  return axios.get(url);
}
