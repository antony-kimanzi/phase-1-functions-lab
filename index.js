function distanceFromHqInBlocks(pickup) {
    const hqBlock = 42;
    return Math.abs(hqBlock - pickup);
}

console.log(distanceFromHqInBlockss(50));

function distanceFromHqInFeet(pickup) {
    const blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264;
}

console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}

console.log(distanceTravelledInFeet(34, 38));

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <=400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}

