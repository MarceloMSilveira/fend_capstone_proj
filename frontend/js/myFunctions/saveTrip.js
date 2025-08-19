import { trip, trips } from "../app.js";
import showAllTrips from "./gui/showUserTrips.js";
import { nanoid } from "nanoid";
import saveImageToCache from "./utils/saveImgInCache.js";

export default function saveNewTrip() {
  trip.id = nanoid();
  //add a new trip in the array of trips
  //é necessário criar um novo obj com os valores da nova viagem
  trips.push({...trip});
  //saving trips no localstorage:
  localStorage.setItem('tripsOnLocalStorage', JSON.stringify(trips));
  //saving img to cache
  saveImageToCache(trip.imgUrl);
  //mandar imprimir as viagens do usuário
  showAllTrips()

}