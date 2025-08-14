import { trip, trips } from "../app.js";

export default function saveNewTrip() {
  const userTripsDiv = document.querySelector('.saved-trips');
  userTripsDiv.innerHTML = '';
  console.log(`Current trip to be saved: ${trip.city}`);
  
  //add a new trip in the array of trips
  //é necessário criar um novo obj com os valores da nova viagem
  trips.push({...trip});

  //rendering the saved trips
  trips.forEach(
    (userTrip) => {
      console.log(`criando um div para ${userTrip.city}`)
      const newDiv = document.createElement('div');
      newDiv.classList.add('user-trip');
      const htmlString = 
      `<p>Travel to ${userTrip.city}, ${userTrip.country}</p> 
      <p>Departure: ${userTrip.departureDate}</p>
      <p>Trip length: ${userTrip.tripLength}</p>
      <div class='trip-buttons'>
        <button id='show-trip'>Show</button>
        <button id='delete-trip'>Remove</button>
      </div>
      `;
      newDiv.innerHTML = htmlString;
      userTripsDiv.appendChild(newDiv);
    }
  )
}