import { projData } from "../app.js";
import axios from "axios";
import getDaysToGo from "./setDaysToGo.js";
import setUI from "./uiSetting.js";

function subtractOneYear(dateString) {
  // Quebra a string em partes
  const [year, month, day] = dateString.split('-').map(Number);

  // Cria a nova data com o ano diminuído
  const newDate = new Date(year - 1, month - 1, day);

  // Formata novamente para 'yyyy-mm-dd'
  const newYear = newDate.getFullYear();
  const newMonth = String(newDate.getMonth() + 1).padStart(2, '0');
  const newDay = String(newDate.getDate()).padStart(2, '0');

  return `${newYear}-${newMonth}-${newDay}`;
}

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
    //console.log(projData);
    setUI(travelIsInComingDays)
  }

  async function travelInTheFuture() {
    const travelIsInComingDays = false;
    const start_date = document.querySelector('#departure-date').value;
    const end_date = addSevenDays(new Date(start_date));

    //Parece que tenho que usar um ano qualquer do passado para obter o histórico
    //assim sendo vou usar o ano anterior para consultar a api de históricos
    //isso funcionou. Agora consigo acessar min_temp e max_temp. Antes, com datas no futuro
    //não tinha nada (undefined) nesse campos
    const start_date_1YearAgo = subtractOneYear(start_date);
    const end_date_1YearAgo = subtractOneYear(end_date);
    const city = `${encodeURIComponent(projData.city)},${projData.country}`;
    const url = `https://api.weatherbit.io/v2.0/history/daily?city=${city}&start_date=${start_date_1YearAgo}&end_date=${end_date_1YearAgo}&key=${apiKey}`;
    const allData = await axios.get(url);
    console.log(allData.data.data[0])
    const {max_temp, min_temp, clouds} = allData.data.data[0];
    projData.weather.high = max_temp;
    projData.weather.low = min_temp;
    projData.weather.description = Number(clouds)>50 ? "Mostly cloudy" : "Clear skies";
    setUI(travelIsInComingDays)
  }

  if (daysToGo<8){
    travelNextFewDays()
  } else {
    travelInTheFuture()
  }
}
