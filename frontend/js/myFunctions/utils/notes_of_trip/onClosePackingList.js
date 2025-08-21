import backToWeatherDescription from "../../gui/notes_of_trip/backToWeatherDescription.js";
import showAllTrips from "../../gui/showUserTrips.js";

export default function onClosePackingList(weatherDivContent,trip) {
  const noteContent = $('textarea.note-content').val();
    trip.packingList = noteContent;
    console.log(`O conteúdo inserido foi: ${noteContent}`);
    const trips = JSON.parse(localStorage.getItem('tripsOnLocalStorage'));
    const tripIndex = trips.findIndex(savedTrip => savedTrip.id === trip.id);
    if (tripIndex !== -1) {
      trips[tripIndex].packingList = noteContent;
      console.log("Viagem atualizada:", trips[tripIndex]);
      //saving trips no localstorage:
      localStorage.setItem('tripsOnLocalStorage', JSON.stringify(trips));
      //atualizar as viagens salvas:
      showAllTrips();
    } else {
      onsole.error('Viagem não encontrada no array.');
    }
    backToWeatherDescription(weatherDivContent,trip);
}