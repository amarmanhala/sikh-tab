// Amarpreet singh's code

import GURBANI from '/gurbani.js';

const random = Math.floor(Math.random() * GURBANI.length);

document.getElementById("greeting").innerText = GURBANI[random].line;
document.getElementById("meaning").innerText = GURBANI[random].meaning;





