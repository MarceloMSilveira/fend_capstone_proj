import { projData } from "../app.js";

function calculateDaysRemaining(targetDate) {
  // Convert today's date to milliseconds
  const today = new Date();
  
  // Convert the target date to milliseconds
  const target = new Date(targetDate);
  
  // Calculate the time difference in milliseconds
  const timeDifference = target.getTime() - today.getTime();
  
  // Define the number of milliseconds in one day
  const msInOneDay = 1000 * 60 * 60 * 24;
  
  // Convert the millisecond difference to days and round down
  const daysRemaining = Math.floor(timeDifference / msInOneDay);
  
  return daysRemaining;
}

export default function getDaysToGo() {
  const travelDate = projData.departureDate;
  const daysToGo = calculateDaysRemaining(travelDate);
  const daysToGoParagraph = document.querySelector('#daysToGo');
  daysToGoParagraph.textContent = `${projData.city}, ${projData.country} is ${daysToGo} days away.`
  return daysToGo;
}