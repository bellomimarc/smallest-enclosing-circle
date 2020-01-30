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

const NUMBER_OF_ITERATION = 5
let results = []

for (let i = 0; i < NUMBER_OF_ITERATION; i++) {
    let startTime = new Date();
    const points = generateRandomPoints(program.numberOfPoints ? program.numberOfPoints : 2);
    console.log(new Date() - startTime)

    startTime = new Date();
    console.log(makeCircle(points))
    let diffTime = new Date() - startTime;
    console.log(diffTime)

    results.push(diffTime);
    
}

console.log(results.reduce((a, b) => a + b, 0) / NUMBER_OF_ITERATION)