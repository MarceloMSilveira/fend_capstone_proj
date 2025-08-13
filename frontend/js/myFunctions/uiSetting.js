import { projData } from "../app.js";
import addSettingsToNewBtn from "./setNewBtn.js";

export default function setUI(travelIsInComingDays) {
  const weatherDiv = document.querySelector('#weather');
  if (travelIsInComingDays) {
    weatherDiv.innerHTML =
      `<p>Current weather: </p>
       <p>Temp: ${projData.weather.temp} degrees</p>  
       <p>Weather: ${projData.weather.description}</p>
       <input id="save-trip" type="submit" value="save">
       <input id="clear-trip" type="reset" value="clear">`;
      
  } else {
       weatherDiv.innerHTML =
      `<p>Typical weather for then is: </p>
       <p>High: ${projData.weather.high}, Low: ${projData.weather.low} </p>  
       <p>Weather: ${projData.weather.description}</p>
       <input id="save-trip" type="submit" value="save">
       <input id="clear-trip" type="reset" value="clear">`;
  }

  addSettingsToNewBtn()
}