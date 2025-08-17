import { trips } from "../app.js";
import setPreviewUI from "./previewUISettings.js";

export default function showOneTripConfig() {
  const showOneTripBtns = document.querySelectorAll('.show-trip');
  showOneTripBtns.forEach((showBtn)=>{
    showBtn.addEventListener('click',(evt)=>{
      const id = evt.target.parentElement.getAttribute('id');
      const trip = trips.filter(trip => trip.id === id)[0];
      const cityToShow = trip.city;
      const urlToShow = trip.imgUrl;
      const altForImg = `a random image from pixabay site for ${cityToShow}`;
      const image = document.querySelector("#show-image img");
      image.setAttribute('alt',altForImg);
      image.setAttribute('src',urlToShow);
      setPreviewUI(trip)
    })
  })
}