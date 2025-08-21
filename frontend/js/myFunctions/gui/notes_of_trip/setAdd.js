import onCloseNote from "../../utils/notes_of_trip/onCloseNote.js";

export default function setAdd(evt,trip) {

  function checkBtnType(classList) {
    const arrayOfClasses = Array.from(classList);
    if (arrayOfClasses.includes('notes')) {
      return 'notes'
    } else if (arrayOfClasses.includes('packing')) {
      return 'packing'
    } else {
      return 'lodging'
    }
  }

  function setNotes() {
    $('p.trip-preview').text(`My Notes for ${trip.city}`);
    let prevNote = '';
    if (trip.notes) {
      prevNote = trip.notes; 
    } else {
      prevNote = '';
    }
    return prevNote;
  }

  function setPacking() {
    $('p.trip-preview').text(`My Packing List for ${trip.city}`);
    let prevNote = '';
    if (trip.packingList) {
      prevNote = trip.packingList; 
    } else {
      prevNote = '';
    }
    return prevNote;
  }

  function setLodgingInfo() {
    $('p.trip-preview').text(`Lodging Info for ${trip.city}`);
    let prevNote = '';
    if (trip.lodgingInfo) {
      prevNote = trip.lodgingInfo; 
    } else {
      prevNote = '';
    }
    return prevNote;
  }

  function setTextArea(textAreaContent) {
    const noteDiv = `
      <div>
        <textarea class="note-content" rows="7" cols="50">${textAreaContent}</textarea>
        <div class = "add-btns">
          <button class="btn btn-success close-note"> Close </button>
        </div>
      </div>
    `;
    $('#weather').html(noteDiv);
  }

  const classList = evt.target.classList;
  const btnType = checkBtnType(classList);
  const weatherDivContent = $('#weather').html();
  let textAreaContent = '';
  switch (btnType) {
    case 'notes':
      textAreaContent = setNotes();
      break;
    case 'packing':
      textAreaContent = setPacking();
      break;
    case 'lodging':
      textAreaContent = setLodgingInfo();
      break;
    default:
      break;
  }
  setTextArea(textAreaContent);
  $('button.close-note').on('click',()=> onCloseNote(weatherDivContent,trip,btnType));
}