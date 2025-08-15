import { trip, trips } from "../app.js";
import showAllTrips from "./showUserTrips.js";
import { nanoid } from "nanoid";

export default function saveNewTrip() {
  trip.id = nanoid();
  //add a new trip in the array of trips
  //é necessário criar um novo obj com os valores da nova viagem
  trips.push({...trip});

  //saving trips no localstorage:
  localStorage.setItem('tripsOnLocalStorage', JSON.stringify(trips));

  //mandar imprimir as viagens do usuário
  showAllTrips()

}