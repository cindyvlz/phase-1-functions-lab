// Code your solution in this file!

function distanceFromHqInBlocks (blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet (feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(end, start){
    return Math.abs((end-start)*264);
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    }
    else if (distance >= 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance >= 2000 && distance <=2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far'

    }
}