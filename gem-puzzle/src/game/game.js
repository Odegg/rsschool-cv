require(['../game/game.css', '../game/p.css']);
const template = require('./game.html');
const { field } = require('../test/service');

const oninit = () => {
    document.getElementsByTagName('app')[0].innerHTML = template;
    console.log('start game');
    field();
}

module.exports = {
    template: template,
    oninit: oninit
}