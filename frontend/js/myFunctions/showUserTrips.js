import removeTripConfig from "./removeTripConfig.js";

//rendering the saved trips
export default function showAllTrips() {
  const removeAllBtn = document.querySelector('#remove-all');
  const userTripsDiv = document.querySelector('.saved-trips');
  userTripsDiv.innerHTML = '';
  const trips = JSON.parse(localStorage.getItem('tripsOnLocalStorage'));
  if (trips) {
    trips.forEach(
      (userTrip) => {
        console.log(`criando um div para ${userTrip.city}, id: ${userTrip.id}`)
        const newDiv = document.createElement('div');
        newDiv.classList.add('user-trip');
        const htmlString = 
        `<p>Travel to ${userTrip.city}, ${userTrip.country}</p> 
        <p>Departure: ${userTrip.departureDate}</p>
        <p>Trip length: ${userTrip.tripLength}</p>
        <div id=${userTrip.id} class='trip-buttons'>
          <button class='show-trip'>Show</button>
          <button class='delete-trip'>Remove</button>
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
    removeTripConfig()
  } else {
    console.log('nenhuma viagem salva no local storage');
    removeAllBtn.setAttribute('hidden','');
  }  
}

