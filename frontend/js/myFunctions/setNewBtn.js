import { projData } from "../app.js";

export default function addSettingsToNewBtn() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('user-trip');

  $("#save-trip").on('click', function () {
  const htmlString = 
  `<p>Travel to ${projData.city}, ${projData.country}</p> 
   <p>Departure: ${projData.departureDate}</p>
   <p>Trip length: ${projData.tripLength}</p>
   <div class='trip-buttons'>
    <button id='show-trip'>Show</button>
    <button id='delete-trip'>Remove</button>
   </div>
   `
  newDiv.innerHTML = htmlString;
  const div = document.querySelector('.saved-trips');
  div.appendChild(newDiv);
});
}