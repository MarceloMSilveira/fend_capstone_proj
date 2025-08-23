import { trip } from "../../app.js";
import axios from "axios";
import placeNotFound from "../gui/placeNotFound.js";

export default async function callGeonamesApi(placeToGo) {
  const place = encodeURIComponent(placeToGo);
  const url = `https://secure.geonames.org/searchJSON?q=${place}&maxRows=10&username=MarceloMSilveira`;
  
  try {
    const allData = await axios.get(url);
    const {countryCode, name:cityName, lng, lat} = allData.data.geonames[0];
    trip.city = cityName;
    trip.country = countryCode;
    return {lat, lng};    
  } catch (error) {
    console.log(error);
    placeNotFound(placeToGo);
  }

}