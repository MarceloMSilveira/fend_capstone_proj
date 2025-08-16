import { trips } from "../app.js";

export default function showOneTripConfig() {
  const showOneTripBtns = document.querySelectorAll('.show-trip');
  showOneTripBtns.forEach((showBtn)=>{
    showBtn.addEventListener('click',(evt)=>{
      const id = evt.target.parentElement.getAttribute('id');
      const cityToShow = trips.filter(trip => trip.id === id)[0].city;
      const urlToShow = trips.filter(trip => trip.id === id)[0].imgUrl;
      console.log(cityToShow);
      console.log(urlToShow);
      const altForImg = `a random image from pixabay site for ${cityToShow}`;
      const image = document.querySelector("#show-image img");
      image.setAttribute('alt',altForImg);
      image.setAttribute('src',urlToShow);
    })
  })
}