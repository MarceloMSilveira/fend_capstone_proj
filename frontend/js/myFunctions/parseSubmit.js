import callGeonamesApi from "./geonamesApiAccess.js";
import callWeatherbitApi from "./weatherbitApiAccess.js";
import getImage from "./pixabayApiAcess.js";
import setUI from "./uiSetting.js";
import getDaysToGo from "./setDaysToGo.js";

export default async function onSubmitForm(evt) {
  evt.preventDefault();
  const placeToGo = document.querySelector('#place-to-go').value;
  const {lat, lng} = await callGeonamesApi(placeToGo);
  await callWeatherbitApi(lat,lng);
  const daysToGo = getDaysToGo();
  await getImage(placeToGo);
  setUI();
}