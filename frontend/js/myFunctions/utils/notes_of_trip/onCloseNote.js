import backToWeatherDescription from "../../gui/notes_of_trip/backToWeatherDescription.js";
import showAllTrips from "../../gui/showUserTrips.js";
//salvar o conteudo da nota
//atualizar o array de trips
//restaurar a gui

export default function onCloseNote(weatherDivContent,trip,btnType) {
  
  function setTrip(index) {
    switch (btnType) {
    case 'notes':
      trip.notes = noteContent;
      trips[index].notes = noteContent;
      break;
    case 'packing':
      trip.packingList = noteContent;
      trips[index].packingList = noteContent;
      break;
    case 'lodging':
      trip.lodgingInfo = noteContent;
      trips[index].lodgingInfo = noteContent;
      break;
    default:
      break;
  }
  }
  
  const noteContent = $('textarea.note-content').val();
  const trips = JSON.parse(localStorage.getItem('tripsOnLocalStorage'));
  const tripIndex = trips.findIndex(savedTrip => savedTrip.id === trip.id);
  if (tripIndex !== -1) {
    setTrip(tripIndex);
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
