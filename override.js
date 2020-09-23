// Sikh Tab
// Amarpreet singh's code
// This is just 4 lines of code, but have big impact on sikh community.

import JAPJISAHIB from '/gurbani.js';

const random = Math.floor(Math.random() * JAPJISAHIB.length);
document.getElementById("line").innerText = JAPJISAHIB[random].line;
document.getElementById("meaning").innerText = JAPJISAHIB[random].meaning;





