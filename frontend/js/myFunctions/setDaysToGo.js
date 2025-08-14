function calculateDaysRemaining(targetDate) {
  const today = new Date();
  const target = new Date(targetDate);
  const timeDifference = target.getTime() - today.getTime();
  const msInOneDay = 1000 * 60 * 60 * 24;
  const daysRemaining = Math.floor(timeDifference / msInOneDay);
  return daysRemaining;
}

export default function getDaysToGo(trip) {
  const daysToGo = calculateDaysRemaining(trip.departureDate);
  return daysToGo;
}