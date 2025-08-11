export default function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  spanElement.textContent = thisYear;
}