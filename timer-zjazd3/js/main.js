'use strict';

console.log('Zadanie Timer');

var timerForm = document.querySelector('form');

var minutes = timerForm.minutes;

var seconds = timerForm.seconds;

//console.log(minutes, seconds);

//Inicjalizacja kontrolek

minutes.value = 0;

seconds.value = 0;

function countdown(event) {

    event.preventDefault();

    console.log('Odliczam...')

    minutes.setAttribute('disabled', true);

    seconds.setAttribute('disabled', true);

    var m = Number(minutes.value); //--- funkcja pozwalająca zamienić nam np. stringa na liczby

    var s = Number(seconds.value); //--- funkcja pozwalająca zamienić nam np. stringa na liczby

    //    console.warn(typeof m, typeof s);  //---- inny sposób korzystania z console.log

    var then = new Date();

    then.setMinutes(then.getMinutes() + m);

    then.setSeconds(then.getSeconds() + s);

    var intervalId = setInterval(function tick() {

        var now = new Date();

        var timeLeft = then.getTime() - now.getTime();

        if (timeLeft > 0) {

            var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            var secondsLeft = Math.ceil((timeLeft % (1000 * 60)) / 1000);

            minutes.value = minutesLeft;

            seconds.value = secondsLeft;

        } else {

            minutes.removeAttribute('disabled');

            seconds.removeAttribute('disabled');

            clearInterval(intervalId);

            //usuwa atrybut disabled z inputów
            //clearInterval(intervalId);

        }

    }, 1000);

}

timerForm.addEventListener('submit', countdown);