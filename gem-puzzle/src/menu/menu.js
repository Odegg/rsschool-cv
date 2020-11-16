require('./menu.css');
const template = require('./menu.html');

const oninit = () => {
    console.log('start menu');
}

module.exports = {
    template: template,
    oninit: oninit
}