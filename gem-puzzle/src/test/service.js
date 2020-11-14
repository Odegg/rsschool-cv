const { options } = require("../module");
const { generalProps } = require('../options/options');

exports.field = () => {
    const canv = document.createElement('canvas');
    canv.width = 1000 / 4;
    canv.height = 1000 / 4;
    let context = canv.getContext('2d');
    let ImageObj = new Image();

    const gemField = document.getElementById('gemField');
    // let matrix = undefined;
    const size = 16;
    gemField.style.gridTemplateColumns = `repeat(4, 1fr)`;
    gemField.style.gridTemplateRows = `repeat(4, 1fr)`;

    let axisX = 0;
    let axisY = 0;

    ImageObj.onload = function() {
        if (ImageObj.height >= ImageObj.width) {
            var sourceWidth = 1000;
            var sourceHeigth = 1000 * ImageObj.height / ImageObj.width
        } else {
            var sourceWidth = 1000 * ImageObj.width / ImageObj.height
            var sourceHeigth = 1000;
        }

        for (let index = 1; index <= 16; index++) {
            const puzzleDiv = document.createElement('div');
            puzzleDiv.classList.add('puzzle-element');
            puzzleDiv.id = `P${index}`;

            context.drawImage(ImageObj, axisX, axisY, sourceHeigth, sourceWidth);

            let dataUrl = canv.toDataURL('image/png');
            puzzleDiv.style.backgroundImage = `url(${dataUrl})`;


            gemField.appendChild(puzzleDiv);

            if (index % 4 == 0) {
                axisX = 0;
                axisY -= 1000 / 4;
            } else {
                axisX -= 1000 / 4;
            }
        }

        // generalProps.puzzleClear = {
        //     x: randInt(0, 4 - 1),
        //     y: randInt(0, 4 - 1)
        // }

        // generalProps.timer = 0;
        // generalProps.matrix = createMatrix();
        // generalProps.moves = [];
        // generalProps.solution = createMatrix();
        // generalProps.win = false;
        // // Randomizer()
        document.getElementById(generalProps.matrix[generalProps.puzzleClear.y][generalProps.puzzleClear.x]).classList.add('clear-puzzle');
        // generalProps.pause = false,
        //     generalProps.stop = false,
        //     reven
    }
    ImageObj.src = 'quadre.png';
}

function randInt(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function createMatrix() {
    matrix = [];
    let lineArray;
    let id = 1;
    for (let index = 0; index < 16; index++) {
        lineArray = [];
        for (let i = 0; i < 16; i++) {
            lineArray.push(`P${id}`);
            id++;
        }
        matrix.push(lineArray);
    }
    console.log(matrix);
    return matrix;
}