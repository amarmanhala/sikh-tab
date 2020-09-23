// L U  C   I    D
// Amarpreet singh's code
// He also happened to write this ode
// To focus, clarity, rest, and joy
// Which, I hope, you find in this toy

import GURBANI from '/gurbani.js';

const random = Math.floor(Math.random() * GURBANI.length);

document.getElementById("greeting").innerText = GURBANI[random].line;
document.getElementById("meaning").innerText = GURBANI[random].meaning;





