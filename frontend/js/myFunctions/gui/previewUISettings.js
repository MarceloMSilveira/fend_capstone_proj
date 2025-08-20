import saveNewTrip from "../saveTrip.js";
import getDaysToGo from "../utils/setDaysToGo.js";
import getIcons from "../utils/getIcons.js"
import onResetForm from "./onResetForm.js";
import setNotes from "./setNotes.js";

export default function setPreviewUI(trip) {
  let descriptionContent = '';
  const daysToGo = getDaysToGo(trip);
  const travelIsInComingDays = daysToGo < 8;
  const weatherDiv = document.querySelector('#weather');
  const svgPlus = `<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-plus-circle' viewBox='0 0 16 16'>
      <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'/>
      <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/>
    </svg>`
  //daysToGoParagraph.textContent = `${trip.city}, ${trip.country} is ${daysToGo} days away. Your stay is for ${trip.tripLength} days! `;
  if (travelIsInComingDays) {
    descriptionContent =
      ` <p>${trip.city}, ${trip.country} is ${daysToGo} days away. Your stay is for ${trip.tripLength} days!</p>
        <p>Current weather: </p>
        <p>Temp: ${trip.weather.temp} degrees</p>  
        <p>Weather: ${trip.weather.description} ${getIcons(trip.weather.description)}</p>
        <div class = "add-btns">
          <button class="btn btn-info notes"> ${svgPlus} notes </button>
          <button class="btn btn-info"> ${svgPlus} packing list </button>
          <button class="btn btn-info"> ${svgPlus} lodging info </button>
        </div>
        <div class = "save-btn-div">
          <input id="save-trip" type="submit" value="save">
          <input id="clear-trip" type="reset" value="clear"> 
        </div>
       `;
      
  } else {
    descriptionContent =
      ` <p>${trip.city}, ${trip.country} is ${daysToGo} days away. Your stay is for ${trip.tripLength} days!</p>
        <p>Typical weather for then is: </p>
        <p>High: ${trip.weather.high}, Low: ${trip.weather.low} </p>  
        <p>Weather: ${trip.weather.description} ${getIcons(trip.weather.description)}
        </p>
        <div class = "add-btns">
          <button class="btn btn-info notes"> ${svgPlus} notes </button>
          <button class="btn btn-info"> ${svgPlus} packing list </button>
          <button class="btn btn-info"> ${svgPlus} lodging info </button>
        </div>
        <div class = "save-btn-div">
          <input id="save-trip" type="submit" value="save">
          <input id="clear-trip" type="reset" value="clear"> 
        </div>
       `;
  }

  weatherDiv.innerHTML = descriptionContent;
  const saveBtnDiv = document.querySelector('.save-btn-div');
  const addBtnsDiv = document.querySelector('.add-btns');
  //caso a viagem já esteja salva (ou seja ela já possui um id) eu não mostro o btn de save e o btn clear
  //E eu só mostro add-btns se a viagem já estiver salva.
  if (trip.id) {
    saveBtnDiv.setAttribute('hidden','');
    addBtnsDiv.removeAttribute('hidden');
  } else {
    saveBtnDiv.removeAttribute('hidden');
    addBtnsDiv.setAttribute('hidden','');
  }

  $('#save-trip').on('click', saveNewTrip);
  $('#clear-trip').on('click', onResetForm);
  $('button.notes').on('click', () => setNotes(trip));
}