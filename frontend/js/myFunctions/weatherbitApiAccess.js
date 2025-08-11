import { projData } from "../app.js";
import axios from "axios";

export default async function callWeatherbitApi(lat,lng) {
  console.log(`lat: ${lat}`);
  console.log(`lng: ${lng}`);
  const apiKey = '7bcbccd81e84418d8552d07ba5baf291';
  const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}`;

  const allData = await axios.get(url);
  const {weather, temp} = allData.data.data[0];
  projData.weather.description = weather.description;
  projData.weather.high = temp;
}
