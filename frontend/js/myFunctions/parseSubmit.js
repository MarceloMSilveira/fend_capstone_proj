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

function getRandomNr(totalHits) {
  if (totalHits>10){
    return Math.floor((10)*Math.random());
  } else {
    return 0;
  }
    
}

async function getImage(place) {
  const url = `https://pixabay.com/api/?key=36921349-37b715f1fda946c5428d9d405&q=${place}&image_type=photo`;
  const result = await axios.get(url);
  const randomImg = getRandomNr(result.data.totalHits);
  console.log(`O nr é : ${randomImg}`);
  const imgUrl = result.data.hits[randomImg].largeImageURL;
  console.log(imgUrl);
  const altForImg = `a random image from pixabay site for ${place}`;
  const image = document.querySelector("#show-image img");
  image.setAttribute('alt',altForImg);
  image.setAttribute('src',imgUrl);
}


export default async function onSubmitForm(evt) {
  evt.preventDefault();
  const placeToGo = document.querySelector('#place-to-go').value;
  const {lat, lng} = await callGeonamesApi(placeToGo);
  await callWeatherbitApi(lat,lng);
  await getImage(placeToGo);
  setUI()
}