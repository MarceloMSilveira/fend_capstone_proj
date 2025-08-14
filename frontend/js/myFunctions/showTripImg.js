export default function showTripImg(trip) {
  console.log(`Show the img of ${trip.city}`);
  const altForImg = `a random image from pixabay site for ${trip.city}`;
  const image = document.querySelector("#show-image img");
  image.setAttribute('alt',altForImg);
  image.setAttribute('src',trip.imgUrl);
}
  