export default function placeNotFound(placeToGo) {
  const daysToGoParagraph = document.querySelector('#daysToGo');
  daysToGoParagraph.textContent = `Sory, no data found to ${placeToGo}. Let's try again? `;
}