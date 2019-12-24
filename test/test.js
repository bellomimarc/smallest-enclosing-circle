const {makeCircle} = require('../external/smallest-enclosing-circle')

const generateRandomPoints = (n = 2) => {
    let ret = new Array(n)

    for (let i = 0; i < n; i++) {
        ret[i] = {
            x: Math.random() * Math.pow(10, 9),
            y: Math.random() * Math.pow(10, 9),
        }
    }

    return ret;
}


console.time();
const points = generateRandomPoints(Math.pow(10, 8));
console.timeEnd();

console.time();
console.log(makeCircle(points))
console.timeEnd();