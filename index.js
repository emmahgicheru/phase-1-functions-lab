// Scuber HQs is on 42nd Street
const headquarters = 42;
const blockLengthInFeet = 264;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * blockLengthInFeet;
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * blockLengthInFeet;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

// Logging results
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));
console.log(distanceTravelledInFeet(34, 38));
console.log(calculatesFarePrice(34, 38));
