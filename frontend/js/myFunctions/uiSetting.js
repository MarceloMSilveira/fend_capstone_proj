import { projData } from "../app.js";

export default function setUI(travelIsInComingDays) {
  const place = document.querySelector('#place');
  const weatherDiv = document.querySelector('#weather');
  if (travelIsInComingDays) {
    weatherDiv.innerHTML =
      `<p>Current weather: </p>
       <p>Temp: ${projData.weather.temp} degrees</p>  
       <p>Weather: ${projData.weather.description}</p>`;
  } else {
       weatherDiv.innerHTML =
      `<p>Typical weather for then is: </p>
       <p>High: ${projData.weather.high}, Low: ${projData.weather.low} </p>  
       <p>Weather: ${projData.weather.description}</p>`;
  }
}