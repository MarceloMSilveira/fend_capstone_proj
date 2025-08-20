import getImageFromCache from "../utils/getImgFromCache.js";
import saveImageToCache from "../utils/saveImgInCache.js";

export default function showTripImg(trip) {
  const altForImg = `a random image from pixabay site for ${trip.city}`;
  const image = document.querySelector("#show-image img");
  image.setAttribute('alt',altForImg);
  //image.setAttribute('src',trip.imgUrl);
  
  // 1. Tenta recuperar a imagem do cache primeiro
  getImageFromCache(trip.imgUrl).then(blob => {
    if (blob) {
        const blobUrl = URL.createObjectURL(blob);
        image.src = blobUrl;
    } else {
        // 2. Se não encontrar, busca na rede e salva no cache para a próxima vez
        image.src = trip.imgUrl;
        saveImageToCache(trip.imgUrl);
    }
  });
}
  