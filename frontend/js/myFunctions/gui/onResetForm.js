export default function onResetForm() {
  const weatherDiv = document.querySelector('#weather');
  weatherDiv.innerHTML = '';
  const daysToGoParagraph = document.querySelector('#daysToGo');
  daysToGoParagraph.innerHTML = '';
}