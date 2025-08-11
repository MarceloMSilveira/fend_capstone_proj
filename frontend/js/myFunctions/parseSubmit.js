import { projData } from "../app.js";
import axios from "axios";

async function callGeonamesApi(placeToGo) {
  const place = encodeURIComponent(placeToGo);
  const url = `http://api.geonames.org/searchJSON?q=${place}&maxRows=10&username=MarceloMSilveira`;
  const allData = await axios.get(url);
  const cityName = allData.data.geonames[0].countryName
  //console.log(allData.data.geonames[0].name);
  const spanElement = document.querySelector("#result span");
  spanElement.textContent = cityName;
}


export default function onSubmitForm(evt) {
  evt.preventDefault();
  const placeToGo = document.querySelector('#place-to-go').value;
  callGeonamesApi(placeToGo);
  projData.city = placeToGo;
}