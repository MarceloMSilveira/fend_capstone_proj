import removeTripConfig from "../removeTripConfig.js";
import getDaysToGo from "../utils/setDaysToGo.js";
import showOneTripConfig from "./showOneSavedTrip.js";
import sortTrips from "../utils/sortTrips.js";

//rendering the saved trips
export default function showAllTrips() {
  const removeAllBtn = document.querySelector('#remove-all');
  const userTripsDiv = document.querySelector('.saved-trips');
  userTripsDiv.innerHTML = '';
  const trips = JSON.parse(localStorage.getItem('tripsOnLocalStorage'));
  if (trips) {
    sortTrips(trips);
    trips.forEach(
      (userTrip) => {
        //console.log(userTrip.city)
        const newDiv = document.createElement('div');
        newDiv.classList.add('user-trip');
        const htmlString = 
        `<p>Travel to ${userTrip.city}, ${userTrip.country} in ${getDaysToGo(userTrip)} day(s)</p> 
        <p>Departure: ${userTrip.departureDate}</p>
        <p>Trip length: ${userTrip.tripLength}</p>
        <div id=${userTrip.id} class='trip-buttons'>
          <button class='btn btn-success show-trip'>Show</button>
          <button class='btn btn-warning delete-trip'>Remove</button>
        </div>
        `;
        newDiv.innerHTML = htmlString;
        userTripsDiv.appendChild(newDiv);
      }
    )
    removeAllBtn.removeAttribute('hidden');      
    //tenho que adicionar funcionalidade para os botões remove
        //quando esse botão for clicado eu vou remover a trip correspondente
        //remover do local storage e da variável trips
        //e depois renderizar as viagens do usuário.
        //inicialmente vou mostrar o id correspondente.
    removeTripConfig();
    showOneTripConfig();
  } else {
    console.log('nenhuma viagem salva no local storage');
    removeAllBtn.setAttribute('hidden','');
  }  
}

