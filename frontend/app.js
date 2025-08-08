/* zip for tests:  
  miami: 33101 
33125-1234 (Miami)
  Orlando: 32801
32801-5678 (Orlando)

10001-0001 (New York)
10001 (Manhattan)

https://api.openweathermap.org/data/2.5/weather?zip=32801,us&appid=dd6c3ba86f66f547459582b843e14bc8
*/

//imports
import axios from "axios";
import getCurrentDateTime from "./date_time.js";

/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const apikey = 'dd6c3ba86f66f547459582b843e14bc8';

async function setUI() {
  const {data:allResults} = await axios.get('http://localhost:3010/all');
  const allEntriesDiv = document.querySelector("#allEntries")
  allEntriesDiv.innerHTML = '';
  for (const result of allResults) {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entryHolder');
    entryDiv.innerHTML =
    ` <div class ="place">${result.place}</div>
      <div class = "date">${result.date}</div> 
      <div class = "temperature">Temp: ${result.temperature} degres</div>
      <div class = "feelings">${result.feelings}</div>
      <p>-----------</p>
    `
    allEntriesDiv.appendChild(entryDiv);
  }
}

function toCelsius(k) {
  return k - 273.15;
}

async function getUserData(evt) {
  evt.preventDefault();
  const zip = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=dd6c3ba86f66f547459582b843e14bc8`
  const {data:result} = await axios.get(weatherUrl);
  const temperature = toCelsius(result.main.temp);
  const resultObj = {
    feelings: feelings,
    place: result.name,
    temperature: Math.round(temperature),
    date: getCurrentDateTime()
  }
  await axios.post('http://localhost:3010/setData', resultObj);
  await setUI();
}

const form = document.getElementById('entriesForm');
form.addEventListener('submit',getUserData);


function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  //console.log('test');
  //console.log(thisYear);
  spanElement.textContent = thisYear;
}

async function getWeather(zipCode) {
  const fullUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=dd6c3ba86f66f547459582b843e14bc8`;
  const {data:result} = await axios.get(fullUrl);
  //console.log(result.name);
}

setCurrentYearInFooter();
//getWeather(33101);

