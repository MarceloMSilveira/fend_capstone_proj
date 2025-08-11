import { projData } from "../app.js";

export default function setUI() {
  document.querySelector('#result .place').textContent = `${projData.city}, ${projData.country}`;
  document.querySelector('#result .temp').textContent = `${projData.weather.high} degrees`;
  document.querySelector('#result .description').textContent = `${projData.weather.description}, ${projData.country}`
}