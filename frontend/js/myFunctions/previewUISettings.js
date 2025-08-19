import saveNewTrip from "./saveTrip.js";
import getDaysToGo from "./setDaysToGo.js";
import getIcons from "./getIcons.js";

export default function setPreviewUI(trip) {
  const daysToGo = getDaysToGo(trip);
  const travelIsInComingDays = daysToGo < 8;
  const weatherDiv = document.querySelector('#weather');
  const daysToGoParagraph = document.querySelector('#daysToGo');
  daysToGoParagraph.textContent = `${trip.city}, ${trip.country} is ${daysToGo} days away. Your stay is for ${trip.tripLength} days! `;
  if (travelIsInComingDays) {
    weatherDiv.innerHTML =
      `<p>Current weather: </p>
       <p>Temp: ${trip.weather.temp} degrees</p>  
       <p>Weather: ${trip.weather.description} ${getIcons(trip.weather.description)}</p>
       <div class = "save-btn-div">
        <input id="save-trip" type="submit" value="save">
        <input id="clear-trip" type="reset" value="clear"> 
       </div>
       `;
      
  } else {
    weatherDiv.innerHTML =
      `<p>Typical weather for then is: </p>
       <p>High: ${trip.weather.high}, Low: ${trip.weather.low} </p>  
       <p>Weather: ${trip.weather.description} ${getIcons(trip.weather.description)}
       </p>
       <div class = "save-btn-div">
        <input id="save-trip" type="submit" value="save">
        <input id="clear-trip" type="reset" value="clear"> 
       </div>
       `;
  }

  const saveBtnDiv = document.querySelector('.save-btn-div');
  //caso a viagem já esteja salva (ou seja ela já possui um id) eu não mostro o btn de save e o btn clear
  if (trip.id) {
    saveBtnDiv.setAttribute('hidden','')
  } else {
    saveBtnDiv.removeAttribute('hidden')
  }

  $('#save-trip').on('click', saveNewTrip);
}