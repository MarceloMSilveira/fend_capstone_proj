import {trip} from "../../app.js";
import axios from "axios";
import getDaysToGo from "../utils/setDaysToGo.js";
import setPreviewUI from "../gui/previewUISettings.js";

function calculateDaysBetween(initialDate, finalDate) {
    
  // Convert the target date to milliseconds
  const init = new Date(initialDate);
  const final = new Date(finalDate);
  
  // Calculate the time difference in milliseconds
  const timeDifference = final.getTime() - init.getTime();
  
  // Define the number of milliseconds in one day
  const msInOneDay = 1000 * 60 * 60 * 24;
  
  // Convert the millisecond difference to days and round down
  const daysBetween = Math.floor(timeDifference / msInOneDay);
  
  return daysBetween;
}
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

  async function travelNextFewDays() {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${apiKey}`;
    const allData = await axios.get(url);
    const {weather, temp} = allData.data.data[0];
    trip.weather.description = weather.description;
    trip.weather.temp = temp;
  }

  async function travelInTheFuture() {
    const start_date = document.querySelector('#departure-date').value;
    const end_date = addSevenDays(new Date(start_date));

    //Parece que tenho que usar um ano qualquer do passado para obter o histórico
    //assim sendo vou usar o ano anterior para consultar a api de históricos
    //isso funcionou. Agora consigo acessar min_temp e max_temp. Antes, com datas no futuro
    //não tinha nada (undefined) nesse campos
    const start_date_1YearAgo = subtractOneYear(start_date);
    const end_date_1YearAgo = subtractOneYear(end_date);
    const city = `${encodeURIComponent(trip.city)},${trip.country}`;
    const url = `https://api.weatherbit.io/v2.0/history/daily?city=${city}&start_date=${start_date_1YearAgo}&end_date=${end_date_1YearAgo}&key=${apiKey}`;
    const allData = await axios.get(url);
    const {max_temp, min_temp, clouds} = allData.data.data[0];
    trip.weather.high = max_temp;
    trip.weather.low = min_temp;
    trip.weather.description = Number(clouds)>50 ? "Mostly cloudy" : "Clear skies";
  }

  const apiKey = '7bcbccd81e84418d8552d07ba5baf291';
  trip.tripLength = calculateDaysBetween(trip.departureDate,trip.returnDate);
  const daysToGo = getDaysToGo(trip);

  if (daysToGo<8){
    await travelNextFewDays()
  } else {
    await travelInTheFuture()
  }

  setPreviewUI(trip)
}
