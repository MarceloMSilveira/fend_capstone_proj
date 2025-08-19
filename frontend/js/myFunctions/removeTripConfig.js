import { trips } from "../app.js";
import showAllTrips from "../myFunctions/gui/showUserTrips.js";

export default function removeTripConfig() {
  const deleteBtns = document.querySelectorAll('.delete-trip');
  deleteBtns.forEach( (deleteBtn)=>{
    deleteBtn.addEventListener('click',(evt)=>{
      const id = evt.target.parentElement.getAttribute('id');
      const cityToRemove = trips.filter(trip => trip.id === id)[0].city;
      const newTrips = trips.filter(trip => trip.id !== id);
      trips.length=0;
      trips.push(...newTrips);
      alert(`${cityToRemove} was removed!`)
      //console.log(trips);
      //agora eu tenho que substituir o array que está no local storage.

      //saving trips no localstorage:
      localStorage.setItem('tripsOnLocalStorage', JSON.stringify(trips));

      //mandar imprimir as viagens do usuário
      showAllTrips()
    });
  })
}