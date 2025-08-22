export default function placeNotFound(placeToGo) {
  $('p.trip-preview').html(`Sory, no data found to ${placeToGo}. Let's try again? `);
  $('#weather').html('')
}