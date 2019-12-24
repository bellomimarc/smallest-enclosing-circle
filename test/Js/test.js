const { makeCircle } = require('../../external/smallest-enclosing-circle')
const program = require('commander');

program
    .option('--numberOfPoints [value]')
    .parse(process.argv);

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
const points = generateRandomPoints(program.numberOfPoints ? program.numberOfPoints : 2);
console.timeEnd();

console.time();
console.log(makeCircle(points))
console.timeEnd();