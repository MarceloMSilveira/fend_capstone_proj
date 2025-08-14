import { trip } from "../app.js";
import axios from "axios";

export default async function callGeonamesApi(placeToGo) {
  const place = encodeURIComponent(placeToGo);
  const url = `http://api.geonames.org/searchJSON?q=${place}&maxRows=10&username=MarceloMSilveira`;
  const allData = await axios.get(url);
  const {countryCode, name:cityName, lng, lat} = allData.data.geonames[0];
  trip.city = cityName;
  trip.country = countryCode;
  return {lat, lng}
}