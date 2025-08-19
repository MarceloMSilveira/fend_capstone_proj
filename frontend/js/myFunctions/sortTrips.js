import getDaysToGo from "./setDaysToGo.js";

export default function sortTrips(trips) {
  //console.log(trips)
  trips.forEach(trip => {
    //console.log(trip.city);
    trip.missingDays = getDaysToGo(trip);
  });
  trips.sort((a,b)=>a.missingDays - b.missingDays);
  console.log('after sort:')
  console.log(trips);
}