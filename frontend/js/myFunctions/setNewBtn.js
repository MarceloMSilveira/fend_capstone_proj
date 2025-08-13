export default function addSettingsToNewBtn() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('user-trip');

  $("#save-trip").on('click', function () {
  const htmlString = $("#weather").html();
  console.log(htmlString);
  newDiv.innerHTML = htmlString;
  const div = document.querySelector('.saved-trips');
  div.appendChild(newDiv);
});
}