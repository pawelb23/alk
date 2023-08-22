"use strict";

console.log("JS 6 Szkolenie");

const arr = [10, 20, 30, 40, 50];

const [, drugi] = arr; //zawsze na elemencie, który chcemy wyciągnąć, zamykamy naszą tablicę, czyli jeżeli pierwszy element to [elemOne], jeżeli drugi to [, elemTwo], trzeci elem to [, , elemThree]

const [, , , , abc] = arr; //abc ---> w tym przypadku wskazuje piąty element w tablicy bo oczywiście nazwa jest tutaj nieistotna.

console.log(drugi + 50);

console.log(abc);

//const [ com1, com2 ] = arr;
//
const coords = [123.14, 3434.56];

const [x, y] = coords;

const obj = {
    name: "John",
    lastName: "Wick",
    age: 24
};

const { name, lastName } = obj;

console.log(name + "\n" + lastName);

const objTwo = {
    nameTwo: "John",
    lastNameTwo: "Wick",
    ageTwo: 24
};

const { nameTwo: firstNameTwo, lastNameTwo } = objTwo; // zmieniamy nameTwo na firstNameTwo

console.log(firstNameTwo, lastNameTwo);

function add(a, b) {
    var num1 = a || 0; //oznacza, że jeżeli jest wartość do ta wartość, jeżeli nie, to jest 0

    var num2 = b || 0; //oznacza, że jeżeli jest wartość do ta wartość, jeżeli nie to jest 0

    return num1 + num2;
}

const sum = add(12);

console.log(sum);

function greet(name = "Stranger") {
    return "Hello, " + name + "!";
}

greet(); // "Hello, Stranger!"

greet(undefined); // "Hello, Stranger!"

greet(null); // "Hello, null!"

greet(NaN); // "Hello, NaN!"

greet("David"); // "Hello, David!"

const addTwo = (a, b) => {
    //strzałka => działa jak return;

    return a + b;
};

const div = function(a, b) {
    return a / b;
};

console.log(addTwo(1, 2), div(10, 5));

const isAdult = (wiek) => wiek >= 18;

console.log(isAdult(15));

//Funkcje strzałkowe - wyjątek w zwraceniu obiektu

//const returnObject = () => ({ foo: 'bar' });

function foo() {
    console.log(this);
}

const bar = foo.bind(window);

const context = {
    myFn: bar
};

context.myFn();

//----------------

function barAnother() {
    console.warn(arguments);
}

console.log(barAnother(10, "Dave", null));

//----------------

function barFive() {
    let sum = 0;

    for (let val in arguments) {
        sum += arguments[val];
    }

    return sum;
}

console.log(barFive(10, 20, 30));

//Operator reszty koniecznie musi być na końcu

//Operator rozproszenia

const objCustomer = {
    name: "Jim",
    age: 17,
    accountBalance: 100
};

const unknownCustomer = {
    ...objCustomer,
    name: "****"
};

console.log(unknownCustomer);

//------------------

const anotherArr = ["Dave", null, 100, NaN];

const anotherNewArr = ["Albert", ...anotherArr, 10];

console.log(anotherNewArr);

const bigArr = [...anotherArr, ...anotherArr, ...anotherArr];

console.log(bigArr);

//Jeden sposób

const concatArr = [].concat(anotherArr);

//Drugi sposób

const sliceArr = anotherArr.slice(0);

//Trzeci sposób

const newArr3 = [...anotherArr];

console.log(newArr3);

//----------

const dateParams = [2020, 0, 2]; //miesiące lecą od zera

new Date(dateParams[0], dateParams[1], dateParams[2]);

const [year, month, day] = dateParams;

new Date(year, month, day);

new Date(...dateParams);

console.log(new Date(...dateParams));

//-----------------

//Szablony ciągów znaków

const myStr = `Abc 123 null ${20 + 3}`; //zapis --- ${20+3} sprawi, że część tekstu zachowa się jak zwykły JS --- a więc obliczy nam działanie 20 + 3 czyli będzie 23

console.log(myStr);

//Map

const myMap = new Map();

myMap.set(123, "Joe");

myMap.set("Foo", null);

console.warn(myMap);

console.log(myMap);

console.log(myMap.has(123));

myMap.delete(123);

console.log(``);

var objProp = {
    bar: 12
};

//objProp.bar --- nie wiem jak to było dokładnie, ale chodziło o sprawdzenie czy jest w objekcie  dany klucz (chyba)
Object.hasOwnProperty(objProp, "bar"); // --> undefined
if ("bar" in objProp) {
    console.log(`Szukana właściwość znajduje się w obiekcie!`);
} else {
    console.log("Nie ma takiej właściwości w obiekcie!");
}

Object.hasOwnProperty(objProp, "notBar"); // --> undefined
if ("notBar" in objProp) {
    console.log(`Szukana właściwość znajduje się w obiekcie!`);
} else {
    console.log("Nie ma takiej właściwości w obiekcie!");
}

console.log(``);
//-------------

class User {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    getName() {
        return this.name;
    }

    isAdult() {
        return this.age >= 18;
    }
}

const myUser = new User("Joe", 21, "dev");

console.log(myUser.getName());

console.log(myUser.isAdult());

//--------------

// PO ZMIANACH
/*           
         <---- PremiumOffer 
               + allInclusive
               + discounts
         
  Offer  <---- LimitedTimeOffer
  + nazwa      + deadline
  + cena
*/

class Offer {
    constructor(nazwa, cena) {
        this.nazwa = nazwa;
        this.cena = cena;
    }

    //  foo() {
    //    console.log('foo');
    //  }
}

class LimitedTimeOffer extends Offer {
    constructor(nazwa, cena, deadline) {
        super(nazwa, cena); // new Offer(nazwa, cena)
        //    this.nazwa = "INNA NAZWA";
        this.deadline = deadline;
    }

    //  foo() {
    //    super.foo();
    //    console.log('NADPISUJE FOO');
    //  } //wbudowane fukcje --- jakby były

    //  bar() {
    //    console.log('bar')
    //  }
}

const lto = new LimitedTimeOffer("Tokyo", 999, "1d");

console.log(lto.nazwa, lto.deadline);

// lto.foo();
// lto.bar();

//------------

//class samochód {
//
//    constructor(kolor, drzwi, silnik, cena) {
//
//        this.kolor = kolor;
//        this.drzwi = drzwi;
//        this.silnik = silnik;
//        this.cena = cena;
//
//    }
//
//}
//
//class osobowy extends samochód {
//
//    constructor(kolor, drzwi, silnik, cena) {
//
//        super(kolor,drzwi,silnik,cena);
//
//
//    }
//
//}
//---------------

//Moduły

//https://stackblitz.com/edit/js-mzw5rs?file=index.js