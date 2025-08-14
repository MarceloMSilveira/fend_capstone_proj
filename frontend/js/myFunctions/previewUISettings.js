import saveNewTrip from "./saveTrip.js";
import getDaysToGo from "./setDaysToGo.js";

export default function setPreviewUI(trip) {
  const daysToGo = getDaysToGo(trip);
  const travelIsInComingDays = daysToGo < 8;
  const weatherDiv = document.querySelector('#weather');
  const daysToGoParagraph = document.querySelector('#daysToGo');
  daysToGoParagraph.textContent = `${trip.city}, ${trip.country} is ${daysToGo} days away. Your stay is for ${trip.tripLength} days! `
  if (travelIsInComingDays) {
    weatherDiv.innerHTML =
      `<p>Current weather: </p>
       <p>Temp: ${trip.weather.temp} degrees</p>  
       <p>Weather: ${trip.weather.description}</p>
       <input id="save-trip" type="submit" value="save">
       <input id="clear-trip" type="reset" value="clear">`;
      
  } else {
    weatherDiv.innerHTML =
      `<p>Typical weather for then is: </p>
       <p>High: ${trip.weather.high}, Low: ${trip.weather.low} </p>  
       <p>Weather: ${trip.weather.description}</p>
       <input id="save-trip" type="submit" value="save">
       <input id="clear-trip" type="reset" value="clear">`;
  }

  $('#save-trip').on('click', saveNewTrip);
}