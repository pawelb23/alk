"use strict";

console.log("JS 6 - Zadania dodatkowe");

console.log(``);

//Zadanie 1.

//Point

//Napisz klasę Point , która ma pola x i y ustawiane na podstawie argumentów
//przekazywanych w konstruktorze. Klasa Point powinna mieć metodę plus , która
//przyjmuje obiekt typu Point jako argument. Metoda plus zwraca nowy obiekt klasy
//Point , którego pole x jest sumą wartości x obu obiektów, a pole y sumą wartości y
//obu obiektów

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(otherPoint) {
    const { x, y } = otherPoint;

    //tworze nowy obiekt Point, którego x i y są sumami this.x i x / this.y i y
    //const newX = this.x + x;
    //const newY = this.y + y;

    console.log(x);
    console.log(``);

    return new Point(this.x + x, this.y + y);
  }
}

const pA = new Point(2, 1);
const pB = new Point(8, 9);
console.log(pA.plus(pB));
console.log(pA);
console.log(pB);

console.log(``);

//Zadanie 2.

//Katastrofa
//
//Wykorzystaj domyślne wartości, aby uniknąć katastrofy.

// Poniżej zadanie (zakomentowane) - po odkomentowaniu wywali błąd w konsoli bez poprawnego rozwiązania

// function go(options) {
//     let {
//       speed = 4,
//       enable: { hyperdrive = false, frobnifier = true }
//     } = options;
//     console.log(speed, hyperdrive, frobnifier);
//   }
//   // TypeError: options.enable is undefined
//   go({ speed: 5 });
//   // TypeError: options is undefined
//   go();

// Poniżej rozwiązanie

function go(options = {}) {
  let {
    speed = 4,

    enable: { hyperdrive = false, frobnifier = true } = {}
  } = options;

  console.log(options);

  console.log(speed + "\n" + hyperdrive + "\n" + frobnifier);
}
// TypeError: options.enable is undefined
go({ speed: 5 });
// TypeError: options is undefined
go();

console.log(``);

//Zadanie 3.

//Księgowość
//
//Przypisz do stałej valueOfMachines kod obliczający sumę wszystkich elementów
//typu machine. Wykorzystaj odpowiednie metody tablicowe i funkcje strzałkowe.

const inventory = [
  {
    type: "machine",
    value: 5000
  },
  {
    type: "machine",
    value: 650
  },
  {
    type: "plant",
    value: 20
  },
  {
    type: "furniture",
    value: 1200
  },
  {
    type: "machine",
    value: 250
  }
];

const valueOfMachines = inventory
  .filter(item => item.type === "machine") //wybieramy tylko elemnt typu "machine"
  .map(item => item.value) //mamy tablicę z [5000, 650, 250]
  .reduce((a, b) => a + b); //dostajemy wynik dodawania wszystkich machine

console.log(valueOfMachines);

//console.log(inventory[1].type, inventory[1].value);//moje sprawdzanie

console.log(``);

//----------
