export default function onResetForm() {
  const weatherDiv = document.querySelector('#weather');
  weatherDiv.innerHTML = '';
  $("#get-data-form").trigger('reset');
}