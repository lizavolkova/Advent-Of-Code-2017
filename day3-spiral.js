const _ = require('lodash');

let direction = 'right';
let points = {
    1: {
        coords: [0,0],
        value: 1
    }
}

let steps = 1;
let maxSteps = 1;
let stepsIteration = 1;
let directionIndex = 0;
const directions = ['right', 'up', 'left', 'down'];
let numberTimesRun = 0;
let finalValue;

const getKeys = (object, value) => {
    const test = _.find(object, (point) => {
        return point.coords.toString() === value.toString()
    })

    return test ? parseInt(test.value) : 0;
}

for (let i = 2; i < 265149; i++) {
    const length = i - 1;
    const currentPoint = points[length].coords
    const currentX = currentPoint[0];
    const currentY = currentPoint[1];
    let newPoint;

    const currentDirection = directions[directionIndex];

    switch(currentDirection) {
        case 'right':
            newPoint = [currentX + 1, currentY];
            break;
        case 'up':
            newPoint = [currentX, currentY + 1];
            break;
        case 'left':
            newPoint = [currentX - 1, currentY];
            break;
        case 'down':
            newPoint = [currentX, currentY - 1];
    }

    if (maxSteps === stepsIteration) {
        stepsIteration = 1;
        directionIndex = directionIndex === 3 ? 0 : directionIndex + 1;
        if (numberTimesRun === 1) {
            maxSteps++;
        }

        if (numberTimesRun === 0) {
            numberTimesRun++;
        } else {
            numberTimesRun = 0;
        }


    } else {
        stepsIteration++;
    }

    const p1 = [newPoint[0] - 1, newPoint[1]];
    const p2 = [newPoint[0] - 1, newPoint[1] - 1];
    const p3 = [newPoint[0], newPoint[1] - 1];
    const p4 = [newPoint[0] + 1, newPoint[1] - 1];
    const p5 = [newPoint[0] + 1, newPoint[1]];
    const p6 = [newPoint[0] + 1, newPoint[1] + 1];
    const p7 = [newPoint[0], newPoint[1] + 1];
    const p8 = [newPoint[0] - 1, newPoint[1] + 1];

    const pointSum = getKeys(points, p1) + getKeys(points, p2) + getKeys(points, p3) + getKeys(points, p4) + getKeys(points, p5) + getKeys(points, p6) + getKeys(points, p7) + getKeys(points, p8);
    // console.log(points.getKey(p2));
    // console.log(points.getKey(p3));
    // console.log(points.getKey(p4));
    // console.log(points.getKey(p5));
    // console.log(points.getKey(p6));
    // console.log(points.getKey(p7));
    // console.log(points.getKey(p8));

    // console.log(p1, p2, p3, p4, p5, p6, p7, p8);
    if (pointSum > 265149) {
        finalValue = pointSum
        break;
    }
    points[i] = {
        coords: newPoint,
        value: pointSum
    };

    //if (i=2) then steps = 1, direction = 'right', length = 1 directions[0] max = 1, iteration = 1, numberTimesRun = 0
    //if (i=3) then steps = 1, direction = 'up', length = 2 directions[1] max = 1, iteration = 1, numberTimesRun = 1
    //if (i=4) then steps = 2, direction = 'left', length = 3 directions[2] max = 2, iteration = 1, numberTimesRun = 0
    //if (i=5) then steps = 1, direction = 'left', length = 4 directions[2] max = 2, iteration = 2, numberTimesRun = 0
    //if (i=6) then steps = 2, direction = 'down', length = 5 directions[3] max = 2, iteration = 1, numberTimesRun = 1
    //if (i=7) then steps = 1, direction = 'down', length = 6 directions[3] max = 2, iteration = 2, numberTimesRun = 1
    //if (i=8) then steps = 3, direction = 'right', length = 7 directions[0] max = 3, iteration = 1, numberTimesRun = 0
    //if (i=9) then steps = 2, direction = 'right', length = 8 directions[0] max = 3, iteration = 2, numberTimesRun = 0
    //if (i=10) then steps= 1, direction = 'right', length = 9 directions[0] max = 3, iteration = 3, numberTimesRun = 0
    //if (i=11) then steps= 3, direction = 'up', length = 10 directions[1] max = 3, iteration = 1, numberTimesRun = 1
    //if (i=12) then steps= 2, direction = 'up', length = 11 directions[1] max = 3 , iteration = 2, numberTimesRun = 1
    //if (i=13) then steps= 1, direction = 'up', length = 12 directions[1] max = 3, iteration = 3, numberTimesRun = 1
}
//console.log(points)
console.log(finalValue)

// const origin = [0,0];
// const point = points[265149];
// const distance = Math.abs(origin[0] - point[0]) + Math.abs(origin[1] - point[1]);
//
// console.log(distance);