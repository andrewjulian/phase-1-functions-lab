// Code your solution in this file!

function distanceFromHqInBlocks(originalData){
    return Math.abs(originalData - 42);
}

function distanceFromHqInFeet(originalData){
    distanceFromHqInBlocks(originalData);
    let distance = distanceTravelledInFeet(originalData,42);
    return distance;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
  }

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance > 400 && distance< 2000){
        return (((distance - 400) * 2)/100);
    } else if (distance >= 2000 && distance <= 2500){
        return 25;
    } else if (distance < 400){
        return 0
    } else {
        return 'cannot travel that far'
    }
}