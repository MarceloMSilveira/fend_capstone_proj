import axios from "axios";
import { trip } from "../../app.js";
import showTripImg from "../gui/showTripImg.js";

function getRandomNr(totalHits) {
  if (totalHits>10){
    return Math.floor((10)*Math.random());
  } else {
    return Math.floor((totalHits)*Math.random());
  }
    
}

export default async function getImage(place) {
  const url = `https://pixabay.com/api/?key=36921349-37b715f1fda946c5428d9d405&q=${place}&image_type=photo`;
  const result = await axios.get(url);
  const randomImg = getRandomNr(result.data.totalHits);
  const imgUrl = result.data.hits[randomImg].largeImageURL;
  trip.imgUrl = imgUrl;
  showTripImg(trip);
}