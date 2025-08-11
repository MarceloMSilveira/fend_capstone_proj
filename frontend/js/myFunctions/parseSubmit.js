import { projData } from "../app.js";
import axios from "axios";

async function callGeonamesApi(placeToGo) {
  const place = encodeURIComponent(placeToGo);
  const url = `http://api.geonames.org/searchJSON?q=${place}&maxRows=10&username=MarceloMSilveira`;
  const allData = await axios.get(url);
  const {countryCode, name:cityName, lng, lat} = allData.data.geonames[0];
  projData.city = cityName;
  projData.country = countryCode;
  return {lat, lng}
}

async function callWeatherbitApi(lat,lng) {
  console.log(`lat: ${lat}`);
  console.log(`lng: ${lng}`);
  const apiKey = '7bcbccd81e84418d8552d07ba5baf291';
  const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}`;

  const allData = await axios.get(url);
  const {weather, temp} = allData.data.data[0];
  projData.weather.description = weather.description;
  projData.weather.high = temp;
}

function setUI() {
  document.querySelector('#result .place').textContent = `${projData.city}, ${projData.country}`;
  document.querySelector('#result .temp').textContent = `${projData.weather.high} degrees`;
  document.querySelector('#result .description').textContent = `${projData.weather.description}, ${projData.country}`
}


export default async function onSubmitForm(evt) {
  evt.preventDefault();
  const placeToGo = document.querySelector('#place-to-go').value;
  const {lat, lng} = await callGeonamesApi(placeToGo);
  await callWeatherbitApi(lat,lng);
  setUI()
}