import callGeonamesApi from "./geonamesApiAccess.js";
import callWeatherbitApi from "./weatherbitApiAccess.js";
import getImage from "./pixabayApiAcess.js";
import setPreviewUI from "./previewUISettings.js";
import { trip } from "../app.js";

export default async function onSubmitForm(evt) {
  evt.preventDefault();
  const placeToGo = document.querySelector('#place-to-go').value;
  trip.departureDate = document.querySelector('#departure-date').value;
  trip.returnDate = document.querySelector('#return-date').value;
  const {lat, lng} = await callGeonamesApi(placeToGo);
  await callWeatherbitApi(lat,lng);
  await getImage(placeToGo);
  setPreviewUI(trip);
}