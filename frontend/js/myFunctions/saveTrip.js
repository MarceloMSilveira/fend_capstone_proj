import { trip, trips } from "../app.js";
import showAllTrips from "./showUserTrips.js";

export default function saveNewTrip() {
  const userTripsDiv = document.querySelector('.saved-trips');
  userTripsDiv.innerHTML = '';
  console.log(`Current trip to be saved: ${trip.city}`);
  
  //add a new trip in the array of trips
  //é necessário criar um novo obj com os valores da nova viagem
  trips.push({...trip});

  //saving trips no localstorage:
  localStorage.setItem('tripsOnLocalStorage', JSON.stringify(trips));

  //mandar imprimir as viagens do usuário
  showAllTrips()

}