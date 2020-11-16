const { game } = require('./module');

const body = document.body;
const appel = document.createElement('app');
body.appendChild(appel);
console.log('privet');

game.oninit();