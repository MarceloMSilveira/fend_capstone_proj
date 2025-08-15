//rendering the saved trips
export default function showAllTrips() {
  const userTripsDiv = document.querySelector('.saved-trips');
  userTripsDiv.innerHTML = '';
  const trips = JSON.parse(localStorage.getItem('tripsOnLocalStorage'));
  if (trips) {
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
  } else {
    console.log('nenhuma viagem salva no local storage');
  }  
}

