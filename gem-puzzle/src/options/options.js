require('./options.css');
const template = require('./options.html');

generalProps = {
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

module.exports = {
    template: template,
    generalProps: generalProps
}