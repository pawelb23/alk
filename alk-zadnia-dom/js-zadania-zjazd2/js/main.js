"use strict";

//Reverse

console.log("Reverse".toUpperCase());

var ourWord = "Alfabet";

console.log("Start: " + ourWord);

function reverse(ourString) {
  var reverseString = ourString.split("").reverse().join("");

  return reverseString;
}

var newWord = reverse(ourWord);

console.log("Wstecz: " + newWord);

//drugi spsób

function reverseTwo(ourStringTwo) {
  var reverseStringTwo = ourStringTwo.split("").reverse().join("");

  console.log("I z powrotem: " + reverseStringTwo);
}

reverseTwo(newWord);

console.log("");
//========================================
//========================================

//Title Case

console.log("Title Case".toUpperCase());

var phraseToChange = "młoDzieżoWy DoM StaRCów";

function toTitleCase(toChangeSentence) {
  var arraySentence = toChangeSentence.split(" ");

  // console.log(arraySentence);

  var upLowSentence = [];

  for (var i = 0; arraySentence.length > i; i++) {
    //        console.log(arraySentence.length);

    //        console.log(arraySentence[i]);

    arraySentence[i] =
      arraySentence[i].substring(0, 1).toUpperCase() +
      arraySentence[i].substring(1).toLowerCase();

    // console.log(arraySentence[i]);

    upLowSentence.push(arraySentence[i]);

    var readyPhrase = upLowSentence.join(" ");

    // console.log(upLowSentence);

    // console.log(readyPhrase);

    //
    //                console.log(changedSentence);
    //console.log(emptyArray);
  }

  return readyPhrase;
}

//toTitleCase(phraseToChange);

console.log("Fraza przed zmianą --- " + '"' + phraseToChange + '"');

console.log("Fraza po zmianie --- " + '"' + toTitleCase(phraseToChange) + '"');

console.log("");
//=========================================
//=========================================

//Tell Time

console.log("Tell Time".toUpperCase() + " --- widać na stronie");

setInterval(function () {
  //wszystko co poniżej musi być w funkcji, aby funkcja                    dziłała prawidłowo i aby strona w console.log odliczała co sekundę

  document.write("<b>" + "Tell Time: " + "</b>");

  var dateNow = new Date();

  // console.log(dateNow);

  var h = dateNow.getHours();

  // console.log(h);

  var m = dateNow.getMinutes();

  var s = dateNow.getSeconds();

  function rightTime(oneShot) {
    if (oneShot < 10) {
      var twoSpotsTime = 0 + "" + oneShot;
    } else {
      twoSpotsTime = oneShot;
    }

    return twoSpotsTime;
  }

  var hh = rightTime(h);

  var mm = rightTime(m);

  var ss = rightTime(s);

  var trueClockNow = hh + ":" + mm + ":" + ss;

  //        console.log(trueClockNow);

  document.write("<b>" + trueClockNow + "</b>" + "<br>");

  document.body.style.backgroundColor = "rgba(89, 94, 154, 0.7)";
}, 1000);

console.log("");

//====================================
//====================================

//Shuffle

console.log("Shuffle".toUpperCase());

var numberArray = [12, 34, 56, 67, 85, 102];

function shuffle(arrayToChange) {
  var randomArray = [];

  var ghostArrayToChange = arrayToChange.slice(0);

  //    console.log(ghostArrayToChange);

  var randomNumberForIndeks;

  for (var i = 0; arrayToChange.length > i; i++) {
    if (arrayToChange.length === randomArray.length) {
      return randomArray;
    } else {
      randomNumberForIndeks = Math.floor(
        Math.random() * ghostArrayToChange.length
      );

      var changingArray = ghostArrayToChange[randomNumberForIndeks];

      // randomArray.push(changingArray);

      // console.log(randomArray);

      //            console.log(changingArray);

      console.log(randomNumberForIndeks);

      ghostArrayToChange.splice(randomNumberForIndeks, 1);

      //            console.log(ghostArrayToChange);
    }
  }

  return randomArray;
}

console.log("Tablica przed zmianami:");

console.log(numberArray);

console.log("Tablica po zmianach:");

console.log(shuffle(numberArray));

console.log("");

//=============================
//=============================

//Union

console.log("Union".toUpperCase());

var arrayNumberOne = [0, 80, 10, 40, 20];

var arrayNumberTwo = [5, 35, 15, 95, 55];

var arrayLetterOne = ["a", "z", "g", "r", "h"];

var arrayLetterTwo = ["b", "k", "p", "m", "w"];

function union(arrayOne, arrayTwo) {
  var unionArray = [];

  var arrayNumberOneGhost = arrayOne.slice(0);

  var arrayNumberTwoGhost = arrayTwo.slice(0);

  for (var i = 0; i < arrayNumberOneGhost.length - 1; i++);

  for (var j = 0; j < arrayNumberTwoGhost.length - 1; j++);
  {
    while (unionArray.length !== arrayOne.length + arrayTwo.length) {
      //            console.log(i);

      unionArray.push(arrayNumberOneGhost[arrayNumberOneGhost.length - 1]);

      unionArray.push(arrayNumberTwoGhost[arrayNumberTwoGhost.length - 1]);

      //console.log(arrayNumberOneGhost.length);

      //unionArray.push(arrayNumberOneGhost[i], arrayNumberTwoGhost[j]);

      arrayNumberOneGhost.splice(arrayNumberOneGhost.length - 1, 1);

      arrayNumberTwoGhost.splice(arrayNumberTwoGhost.length - 1, 1);

      //            arrayNumberOneGhost.splice(i, 1);
      //
      //            arrayNumberTwoGhost.splice(j, 1);
      //
      //            i--;
      //
      //            j--;

      //            console.log(unionArray);

      for (var n = 0; n < unionArray.length; n++) {
        //aby posortować muszą być dwie pętle --- to 1 Pętla

        for (var m = 0; m < unionArray.length - 1; m++) {
          // --- to 2 Pętla

          //                    console.log(n);

          //                    console.log(m);

          while (unionArray[m] > unionArray[m + 1]) {
            //                        console.log(unionArray[m]);
            //
            //                        console.log(unionArray);

            var timeVariable = unionArray[m];

            unionArray[m] = unionArray[m + 1];

            unionArray[m + 1] = timeVariable;

            //                        console.log(unionArray);
          }
        }
      }
    }
  }

  return unionArray;
}

//union(arrayNumberOne, arrayNumberTwo);

//union(arrayLetterOne, arrayLetterTwo);

console.log(
  "Tablice liczb przed połączeniem: I Tablica [" +
    arrayNumberOne +
    "], II Tablica [" +
    arrayNumberTwo +
    "]"
);

console.log(
  "Tablica po połączeniu i posortowaniu: [" +
    union(arrayNumberOne, arrayNumberTwo) +
    "]"
);

console.log("");

console.log(
  "Tablice liter przed połączeniem: I Tablica [" +
    arrayLetterOne +
    "], II Tablica [" +
    arrayLetterTwo +
    "]"
);

console.log(
  "Tablica po połączeniu i posortowaniu: [" +
    union(arrayLetterOne, arrayLetterTwo) +
    "]"
);

console.log("");

//=========================
//=========================

//Intersection

console.log("Intersection".toUpperCase());

var arrayToInterOne = ["a", "b", "c", "d", "e"];

var arrayToInterTwo = ["a", "c", "e", "g", "i"];

function intersection(arrayInterOne, arrayInterTwo) {
  var interArray = [];

  var arrayInterGhostOne = arrayInterOne.slice(0);

  while (arrayInterGhostOne.length > 0) {
    for (var i = 0; i < arrayInterGhostOne.length - 1; i++);

    for (var j = 0; j < arrayInterTwo.length - 1; j++) {
      if (arrayInterGhostOne[i] === arrayInterTwo[j]) {
        //
        //                console.log(arrayInterGhostOne);
        //
        //                console.log(arrayInterGhostOne[i]);

        interArray.push(arrayInterOne[i]);

        //                console.log(arrayInterGhostOne);
        //
        //                console.log(interArray);

        for (var n = 0; n < interArray.length; n++) {
          //aby posortować muszą być dwie pętle --- to 1 Pętla

          for (var m = 0; m < interArray.length - 1; m++) {
            // --- to 2 Pętla

            //                    console.log(n);

            //                    console.log(m);

            while (interArray[m] > interArray[m + 1]) {
              //                        console.log(interArray[m]);
              //
              //                        console.log(interArray);

              var timeVariableInter = interArray[m];

              interArray[m] = interArray[m + 1];

              interArray[m + 1] = timeVariableInter;
            }
          }
        }
      }
    }

    //         console.log('Indeks: ' + i + '\n' + 'Wartość: ' + arrayInterGhostOne[i]);

    //        console.log(arrayInterGhostOne);

    arrayInterGhostOne.splice(i, 1);
  }

  return interArray;
}

console.log(
  "Tablice, w których szukamy wspólnych wartości: I Tablica [" +
    arrayToInterOne +
    "], II Tablica [" +
    arrayToInterTwo +
    "]"
);

console.log(
  "Tablica wartości wspólnych: [" +
    intersection(arrayToInterOne, arrayToInterTwo) +
    "]"
);

console.log("");

//========================
//========================

//Secret Number

console.log("Secret Number".toUpperCase());

//Napisz funkcję secretNumber, która losuje liczbę od 1 do 100, a następnie prosi gracza o odgadnięcie tej liczby. Wykorzystaj wbudowaną w przeglądarkę funkcję prompt , aby umożliwić graczowi podanie zgadywanej liczby. Po każdej próbie odgadnięcia liczby informuj gracza przy pomocy wbudowanej w przeglądarkę funkcji alert o tym, czy zgadywana liczba jest większa, czy mniejsza od tej podanej przez gracza.

var searchingNumber;

var weNeedTrue = false;

var tryNumber = 0;

var secretRandomNumber;

function secretNumber() {
  secretRandomNumber = Math.floor(Math.random() * 101);

  if (secretRandomNumber === 0) {
    secretRandomNumber = 1;

    //        console.log(secretRandomNumber);
  }

  while (weNeedTrue === false) {
    if (
      (searchingNumber = prompt(
        "Aby dostać się na stronę wpisz szukaną wartość (z przedziału od 1 do 100)"
      ))
    ) {
      //            console.log(typeof (searchingNumber));

      tryNumber = tryNumber + 1;

      if (searchingNumber == " ") {
        alert(
          "Brak wpisania czegokolwiek, również nie załatwi sprawy! Proszę podać wartość od 1 do 100"
        );
      } else if (searchingNumber < 1 || searchingNumber > 100) {
        alert("Proszę podać wartość od 1 do 100");
      } else if (searchingNumber >= 1 && searchingNumber <= 100) {
        if (secretRandomNumber > searchingNumber) {
          if (secretRandomNumber - 35 > searchingNumber) {
            alert("dużo za mało!");
          } else if (secretRandomNumber - 15 > searchingNumber) {
            alert("za mało!");
          } else {
            alert("blisko, blisko, ale jeszcze trochę za mało!");
          }
        } else if (secretRandomNumber < searchingNumber) {
          if (secretRandomNumber + 35 < searchingNumber) {
            alert("dużo za dużo!");
          } else if (secretRandomNumber + 15 < searchingNumber) {
            alert("za dużo!");
          } else {
            alert("blisko, blisko, ale jeszcze trochę za dużo!");
          }
        } else if (secretRandomNumber == searchingNumber) {
          //Tutaj koniecznie '==', bo z '===' nie będzie działać.

          if (tryNumber === 1) {
            alert(
              "Brawo! Potrzebowałeś tylko" +
                tryNumber +
                " próby by odgadnąć szukaną wartość"
            );

            alert("Szukana wartość to: " + secretRandomNumber);
          } else if (tryNumber <= 5) {
            alert(
              "Brawo! Potrzebowałeś tylko: " +
                tryNumber +
                " prób by odgadnąć szukaną wartość"
            );

            alert("Szukana wartość to: " + secretRandomNumber);
          } else {
            alert(
              "Brawo! Potrzebowałeś: " +
                tryNumber +
                " prób by odgadnąć szukaną wartość"
            );

            alert("Szukana wartość to: " + secretRandomNumber);
          }

          //                    console.log(weNeedTrue);

          //                    console.log(secretRandomNumber);

          alert("W nagrodę możesz wejść na stronę! :)");

          weNeedTrue = true;

          //                    console.log(weNeedTrue);

          //                                        return secretRandomNumber;
        }
      } else {
        alert(
          "Nawet nie będę tego komentował :(, Proszę podać wartość z zakresu od 1 do 100!"
        );

        //                console.log(typeof (searchingNumber));
      }
    }
  }
}

secretNumber();

console.log("Sekretny Numer to: " + secretRandomNumber);

//console.log(typeof (searchingNumber));

//===============
//===============
