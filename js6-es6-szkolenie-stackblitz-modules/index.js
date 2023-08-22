// Import stylesheets
import './style.css';

import { generateSecret } from './secret.js';//pojedyńcze funkcje

import * as WSZYSTKO from './secret.js'; //wszystko importujemy

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

appDiv.innerHTML = generateSecret();

const appDivTwo = document.getElementById('appTwo');
appDivTwo.innerHTML = WSZYSTKO.PI;

// appDiv.innerHTML = `<h1>`WSZYSTKO.PI`<h1>`;

// appDiv.innerHTML = PI();

console.log(WSZYSTKO.PI);

console.log(WSZYSTKO.generateSecret());
