'use strict';

console.log('działa');

var li = document.querySelector('li');

var li = document.querySelectorAll('li');

var _4thli = document.querySelectorAll('li:nth-child(4)');

console.log(_4thli);

var elementFromID = document.getElementById('id-element');

console.log(elementFromID);

var elementFromClass = document.getElementsByClassName('class-element');

console.log(elementFromClass);

var lastLi = document.querySelector('#last') //--- szukamy po ID

var secondLi = document.querySelector('.second-li'); //--- szukamy po klasie

console.log(secondLi);

var ul = document.querySelector('[name="first"]'); //--- szukamy po nazwie

var ul = document.querySelector('ul'); //--- szukammy całego ul

console.log(ul);

document.querySelector('h2').innerText = 'Nowy Nagłówek';

var btn = document.querySelector('.my-btn');

btn.setAttribute('disabled', true); // wyłączenie click


btn.removeAttribute('disabled', true); // włączenie click

//================

//Metoda Dataset

var user = {

    name: 'John',

    age: 12,

    active: true,

};

var btnTwo = document.querySelector('button');

btn.dataset.user = JSON.stringify(user); //dodanie elementów -- tablicy, widać w konsoli w elementach

//----

var parsedUser = JSON.parse(btn.dataset.user);

console.log(parsedUser);

//=========================

var btnThree = document.querySelector('button');

btnThree.classList.replace('my-btn', 'default');

btnThree.classList.add('btn-active', 'btn-new', 'foo-bar');

btnThree.classList.item(2);

//=================

//Modyfikacja elementów/Style

btn.style.backgroundColor = 'green';

btn.style.border = '3px dashed blue';

document.body.style.backgroundColor = 'rgba(105, 81, 129, 0.7)'; //dodanie do elementu body koloru rgba w js

//Tworzenie elementów / Metody

//Nowy guzik - tworzymy

var newBtn = document.createElement('button');

newBtn.setAttribute('disabled', 'false');

newBtn.classList.add('nowy-guzik');

newBtn.innerText = 'To jest nowy guzik';

console.log(newBtn);

//======================

var newLi = document.createElement('li');

newLi.textContent = "START";

var findUl = document.querySelector('ul');

findUl.prepend(newLi);

//========================

//OnClick

function alertMe() {
    
    alert('Uwaga');
    
}

//---

var btnTwo = document.querySelector('.my-btn-two');

function alertMeTwo(event) {
    
  console.log(event);
  
  if (event.target.style.backgroundColor === 'green') {
      
    event.target.style.backgroundColor = 'red';
      
  } else {
      
    event.target.style.backgroundColor = 'green';
      
  }
    
}

btnTwo.addEventListener('click', alertMeTwo);

//======================

//Zadanie z formularzem

var myForm = document.querySelector('form');

function onSubmit(eventX) {
    
    eventX.preventDefault(); //--- odbierze przedlądarce automatyczne działanie w tej funkcji (Sprawdzić!!!)
    
    
    console.log('formularz wysłany');
    
}

myForm.addEventListener('submit', onSubmit);

//=======================


