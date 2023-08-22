console.log("Hello World");

import css from "../css/style.css";

import * as allInformations from "./asidejs.js";

let h1Demo = document.querySelector("#demo"),
  h1demoTwo = document.querySelector("#demo2"),
  sumNumbers = allInformations.addingNumbers(2, 3),
  sumNumbersTwo = allInformations.addingNumbers(9, 16);

document.body.insertAdjacentHTML("afterbegin", '<h2 id="from-js-file"></h2>');

document.getElementById(
  "from-js-file"
).innerText = allInformations.addingNumbers(4, 11);

h1Demo.innerHTML = `2 + 3 = ${sumNumbers}`; //znak dolara $ zapewnia to, że otrzymamy wynik = 5, bez dolara otrzymamy po prostu stringa czyli {sumNumbers} na stronie

h1demoTwo.innerHTML = "9 + 16 = " + sumNumbersTwo; //To samo co wyżej, tylko "stary" sposób zapisu ---> ale wciąż działa

console.log(allInformations.addingNumbers(3, 7));

console.log("Webpack production development!!!");
