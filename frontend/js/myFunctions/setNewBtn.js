export default function addSettingsToNewBtn() {
  $("#save-trip").on('click', function () {
  const htmlString = $("#weather").html();
  console.log(htmlString);
  $(".saved-trips").html(htmlString);
});
}