import axios from "axios";

function getRandomNr(totalHits) {
  if (totalHits>10){
    return Math.floor((10)*Math.random());
  } else {
    return 0;
  }
    
}

export default async function getImage(place) {
  const url = `https://pixabay.com/api/?key=36921349-37b715f1fda946c5428d9d405&q=${place}&image_type=photo`;
  const result = await axios.get(url);
  const randomImg = getRandomNr(result.data.totalHits);
  console.log(`O nr é : ${randomImg}`);
  const imgUrl = result.data.hits[randomImg].largeImageURL;
  console.log(imgUrl);
  const altForImg = `a random image from pixabay site for ${place}`;
  const image = document.querySelector("#show-image img");
  image.setAttribute('alt',altForImg);
  image.setAttribute('src',imgUrl);
}