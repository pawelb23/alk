"use strict";

console.log("hello, elo!!!");

var num = 2;

//preinkrementacja ++num

//postinkrementacja num++

console.log(num++); // będzie 2 w console.log --- ale musi być powyżej ++num bo on zmieni num na stałe na 3 !

console.log(++num); // będzie 3 w console.log

var name = "Onufry";
var lastName = "Pucybut";
var job = "Konserwator powierzchni płaskich";

console.log(name + "\n" + lastName + "\n" + job);

console.log(name + ", " + lastName + ", " + job);

var num = 2;

console.log(++num);

var a = 5;

var b = 3;

var area = a * b;

console.log(area);

function add(a, b) {
    return a + b;
}

console.log(add(12, 4));

//========================

function toFahrenheit(degC) {
    var Fahrenheit;

    return (degC * 9) / 5 + 32;
}

console.log(toFahrenheit(-2));

//=========================

function toFahrenheitTwo(degCtwo) {
    var degFtwo = (degCtwo * 9) / 5 + 32;

    return degFtwo;
}

console.log(toFahrenheitTwo(-2));

//==============================

//Ciągi znaków - Metody

var text = "asd alsda dagd gewwe";

var result = text.replace("alsda", ""); //replace

console.log(result);

var text1 = "asd alsda dagd gewwe";

var text2 = "AFFDSFG ERWEG TDBE"; //konkatenacja

var result1 = text1.concat(text2).concat("!!!");

//łączenie kilku metod nazywa się czeining (chaining)

console.log(result1);

var result2 = text1
    .concat(text2)
    .concat("!!!")
    .substring(0, 3);

console.log(result2);

var result3 = text1.charAt(5);

console.log(result3);

var result4 = text.indexOf("l");

console.log(result4);

// camelCase
// PascalCase

var woman = false;

var title = woman ? "Pan" : "Pani";

console.log(title);

//===================

//Ciąg znaków z np. użycie cudzysłowia " "

var result = 'He said: "That\'s his cat."';

console.log(result);

//===================

//Użycie \n

var result = "Abc\nDef\nGhi";

console.log(result);

//===================

//Ćwiczenie 4

var sent = "At vero eos et accusamus";

function shortQuote(str) {
    var halfOfStr = str.substring(0, str.length / 2);

    var withEllipsis = halfOfStr + "...";

    var withQuotes = '"' + withEllipsis + '"';

    var result = withQuotes;

    return result;
}

console.log(shortQuote(sent));

//===================

//Wyrażenia Regular Expression

//RegExp
//RegEx

var pattern = /\d{2}/;

var result = pattern.test("as78d fgh"); // są dwie cyfry będzie true w konsoli

console.log(result);

var result = pattern.exec("as78d fgh45 56"); // zwróci wartość czyli "78" w konsoli

console.log(result);

var pattern2 = /^\d{2}/;

var result2 = pattern2.exec("as78d fgh45 56"); // ^ oznacza czy na początku będzie szukany element tutaj dwie cyfry w konsoli null - gdyż nie ma dwóch cyfr na początku

console.log(result2);
var pattern2 = /\d{2}/g; //  /g oznacza globalnie czyli wszystkie, w tym przykładzie coś nie działa

var result2 = pattern2.exec("tutu78 dytfy55 98tuyt");

console.log(result2);

var result3 = pattern2.exec("as78d fgh45 56");

console.log(result3);

//==================

//Ćwiczenie 5

var sentence = "The cat is the cat problem";

function countHits(text) {
    var pattern = /cat/g; // szukamy takiej frazy cat - globalnie

    var hits = text.match(pattern);

    console.log(hits);

    return hits.length;
}

console.log(countHits(sentence));

console.log(``);

//==================

//Ćwiczenie 6

function isAdult(age) {
    if (typeof age === "number") {
        if (age >= 18) {
            return true;
        } else {
            return false;
        }
    } else {
        console.log("Oops...");

        return false;
    }
}
console.log(isAdult("abc"));

//==================

//Drugi sposób Ćwiczenie 6

function isAdult1(age1) {
    if (typeof age1 === "number") {
        return age1 >= 18;
    } else {
        console.log("Oopsaa...");

        return false;
    }
}

console.log(isAdult1(17));

//==================

//Tablice

var empty = [];

var newArray = [1, 2, 3];

newArray.push(4);
newArray.pop(4);

newArray.unshift(0);
newArray.shift();

console.log(newArray);

var newString = newArray.join(" + ");

console.log(newString);

var otherArray = newString.split(" + ");

console.log(otherArray);

console.log(``);

//==================

//Ćwiczenie 7

var arrayToEx = ["foo", "bar"];

var arrayToEx2 = [10, 20, 30, 40];

var search = 2;

function skip(n, array) {
    return array.splice(n);
}

var result = skip(2, [2, 4, 10, 16]);

console.log(result);

console.log(``);

//==================

//Ćwiczenie 8

var allNumb = [1, 4, 5, 6, 8, 7];

function addAll(array8) {
    var total = 0;

    for (var i = 0; array8.length > i; i++) {
        console.log(array8[i]);

        total += array8[i];
    }

    return total;
}

console.log(addAll(allNumb));

// Ćwiczenie 8.

function addAll(array) {
    var total = 0;

    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }

    return total;
}

console.log(addAll([1, 2, 5]));

console.log(``);

//==================

//Obiekty

//var fixedCircleArea = circleArea.toFixed(2); // oznacza do dwóch miejsc po przecinku

//===================

//Ćwiczenie 9

function toPairs(object) {
    var pairs = [];

    for (var key in object) {
        // Stały zapis key (ale nazwę można zmienić na cokolwiek - np. abc) odnosi się do obiektu, który chcemy zbadać
        //
        //        key --- to "klucz"
        //        a po dwukropku mamy "wartość"
        //        czyli object = {
        //
        //            klucz : wartość
        //            klucz : wartość
        ////
        //        }

        //
        //console.log(key)

        var value = object[key];

        pairs.push([key, value]);

        // console.log(object[key]);
    }

    return pairs;
}

var result = toPairs({
    name: "John",
    age: 44,
    a: null,
    b: undefined,
    c() {
        return 123;
    }
});

console.log(result);

console.log(``);

// let objectZero = { one: 1, two: 2, three: 3 };

// console.log(toPairs(objectZero)); //tak też moglibyśmy wywołać powyższą funkcję

//----

// let pairsABC = [];

// for (var key in objectZero) {
//     // Stały zapis key (ale nazwę można zmienić na cokolwiek - np. abc) odnosi się do obiektu, który chcemy zbadać
//     //
//     //        key --- to "klucz"
//     //        a po dwukropku mamy "wartość"
//     //        czyli object = {
//     //
//     //            klucz : wartość
//     //            klucz : wartość
//     ////
//     //        }
//     //
//     //console.log(key)

//     var value = objectZero[key];

//     pairsABC.push([key, value]);

// }

// console.log(pairsABC);

// console.log(``);
//=====================

function User(name, age) {
    this.name = name;
    this.age = age;
}

var result = new User("James", 56);

console.log(result);

User.prototype.sayHello = function() {
    console.log("I'm " + this.name + "!");
};

var userHere = new User("Leon", 42);

console.log(userHere.sayHello());

console.log(``);

//======================

//Ćwiczenie 10

function anotherNum() {
    return this;
}

console.log(anotherNum());

anotherNum = anotherNum.bind(5);

console.log(anotherNum());

var total = 20 + anotherNum();

//w konsoli będzie 25
console.log(total);

console.log(``);

//=======================

//Napisz funkcję shuffle, która przyjmuje tablicę, a następnie zwraca nową tablicę z przemieszanymi elementami.

//Wykorzystaj Math.random()
//

//Math.floor(Math.random() * array.length);

function shuffle(array) {
    var a = array.slice(); // sprawia, że jest cała tablica zostaje zapisana i zabezpieczona przed kopiowaniem

    var b = [];

    while (a.length > 0) {
        var randomIndex = Math.floor(Math.random() * a.length);

        console.log(randomIndex);

        var arrayItem = a[randomIndex];

        b.push(arrayItem);

        console.log(b);

        a.splice(randomIndex, 1);

        console.log(a);
    }

    return b;
}

console.log(shuffle([12, 34, 56, 78]));

console.log(``);

//============================

//    //Ćwiczenie 11 / Chaining
//
var arrayPromise = ["c", "a", "b"];

function upperCaseAll(words) {
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }
    // console.log(words);
    return Promise.resolve(words);
}

// console.log(upperCaseAll(arrayPromise));

function alphabetize(words) {
    var alphabetizedWords = words.sort();

    return Promise.resolve(alphabetizedWords);

}

upperCaseAll(arrayPromise)
    .then(alphabetize)

.then(console.log); // === odpowiedź bez adresu linii w console.log(3) ["A", "B", "C"]

console.log("");

//==============================

//Zadanie przyjęcie do pracy
//
console.log("111");

setTimeout(function() {
    console.log(``);
    console.log("222");
}, 1000);

console.log("333");

console.log(``);

//==============================

//JSON

var ob = {
    foo: undefined, //kiedy użyejmy JSON.stringify ---> ta wartość zostanie usunięta (ponieważ jest pusta)

    bar: function() {}, //kiedy użyejmy JSON.stringify ---> ta wartość zostanie usunięta (ponieważ jest to pusta funkcja)

    baz: [1, 2, 3, 4],

    taz: "abc"
};

// console.log(ob.bar);

var stringified = JSON.stringify(ob); //zamieniamy obiekt 'ob' na obiekt JSON ---> puste wartości zostaną usunięte (u nas foo i bar) ---> tak ja to rozumiem

console.log(stringified);

var object = JSON.parse(stringified);

console.log(object);

// console.log(object.baz[1]);

// console.log(object.taz);

console.log(``);

//============================

//fetch/Przykład

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(res) {
        return res.json();
    })

.then(function(users) {
    console.log(users);
    // console.log(users[0].name);
})

.catch(function(err) {
    console.error(err);
});

// console.log(``);

//==============================

//Ćwiczenie 12/Integracja z API

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(res) {
        return res.json();
    })

.then(function(posts) {
    //    20 elementów --- od 0 do `19`

    return posts.splice(0, 20);
})

.then(function(posts) {
    for (var i = 0; i < posts.length; i++) {
        console.log(posts[i].title);
    }
});

// console.log(``);

//============================