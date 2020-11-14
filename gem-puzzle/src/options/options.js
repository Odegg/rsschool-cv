require('./options.css');
const template = require('./options.html');

const generalProps = {
    puzzleClear: {
        x: 0,
        y: 0
    },
    matrix: [],
    timer: 0,
    moves: [],
    win: false,
    solution: [],
    pause: false,
    stop: false,

}