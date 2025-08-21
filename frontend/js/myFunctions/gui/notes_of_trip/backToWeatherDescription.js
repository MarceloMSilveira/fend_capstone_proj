import setAdd from "./setAdd.js";

export default function backToWeatherDescription(divContent,trip) {
  $('p.trip-preview').text(`Trip preview:`);
  $('#weather').html(divContent);
  $('div.add-btns').on('click', (evt) => setAdd(evt,trip));
}