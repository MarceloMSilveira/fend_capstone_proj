import setNotes from "./setNotes.js";
import setPacking from "./setPacking.js";

export default function backToWeatherDescription(divContent,trip) {
  $('p.trip-preview').text(`Trip preview:`);
  $('#weather').html(divContent);
  $('button.notes').on('click', () => setNotes(trip));
  $('button.packing').on('click',()=>setPacking(trip));
}