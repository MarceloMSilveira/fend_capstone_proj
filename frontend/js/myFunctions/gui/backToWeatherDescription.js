import setNotes from "./setNotes.js";

export default function backToWeatherDescription(divContent,trip) {
  $('p.trip-preview').text(`Trip preview:`);
  $('#weather').html(divContent);
  $('button.notes').on('click', () => setNotes(trip));
}