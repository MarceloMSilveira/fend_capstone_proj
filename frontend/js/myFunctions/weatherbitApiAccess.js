import { projData } from "../app.js";
import axios from "axios";
import getDaysToGo from "./setDaysToGo.js";
import setUI from "./uiSetting.js";

function addSevenDays(initialDate) {
  // Create a copy of the initial date to avoid modifying the original
  const newDate = new Date(initialDate);

  // Add 7 days. The setDate() method automatically handles month and year
  // transitions (e.g., from Jan 28 to Feb 4).
  newDate.setDate(newDate.getDate() + 7);

  const year = newDate.getFullYear();
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // meses começam em 0
  const day = String(newDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default async function callWeatherbitApi(lat,lng) {
  
  const apiKey = '7bcbccd81e84418d8552d07ba5baf291';
  projData.departureDate = document.querySelector('#departure-date').value;
  const daysToGo = getDaysToGo();
  console.log(`faltam : ${daysToGo} dias`);

  async function travelNextFewDays() {
    const travelIsInComingDays = true;
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}`;
    const allData = await axios.get(url);
    const {weather, temp} = allData.data.data[0];
    projData.weather.description = weather.description;
    projData.weather.temp = temp;
    console.log(projData);
    //setUI(travelIsInComingDays, projData)
  }

  async function travelInTheFuture() {
    const travelIsInComingDays = false;
    const start_date = document.querySelector('#departure-date').value;
    const end_date = addSevenDays(new Date(start_date));
    const url = `https://api.weatherbit.io/v2.0/history/daily?&lat=${lat}&lon=${lng}&start_date=${start_date}&end_date=${end_date}&key=${apiKey}`;
    const allData = await axios.get(url);
    console.log(`Country code: ${allData.data.country_code}`);
    console.log(allData.data.data[0])
    const {max_temp, min_temp, clouds} = allData.data.data[0];
    console.log(`max temp: ${max_temp}`);
    console.log(`min temp: ${min_temp}`);
    console.log(`clouds: ${clouds}`);
    //setUI(travelIsInComingDays, projData)
  }

  if (daysToGo<8){
    travelNextFewDays()
  } else {
    travelInTheFuture()
  }
}
