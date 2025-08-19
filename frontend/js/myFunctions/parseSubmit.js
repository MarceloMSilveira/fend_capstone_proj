import callGeonamesApi from "./apis/geonamesApiAccess.js";
import callWeatherbitApi from "./apis/weatherbitApiAccess.js";
import getImage from "./apis/pixabayApiAcess.js";
import setPreviewUI from "./gui/previewUISettings.js";
import { trip } from "../app.js";

export default async function onSubmitForm(evt) {
  evt.preventDefault();
  trip.id = '';
  const placeToGo = document.querySelector('#place-to-go').value;
  trip.departureDate = document.querySelector('#departure-date').value;
  trip.returnDate = document.querySelector('#return-date').value;
  try {
    const {lat, lng} = await callGeonamesApi(placeToGo);
    await callWeatherbitApi(lat,lng);
    await getImage(placeToGo);
    setPreviewUI(trip);  
  } catch (error) {
    console.log(error);
  }
  
}