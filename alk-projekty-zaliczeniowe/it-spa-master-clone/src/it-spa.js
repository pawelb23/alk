"use strict";

import database from "../database.json";
import "bootstrap/dist/css/bootstrap.css";
import "./it-spa.scss";
import $ from "jquery";
import { Router, routes } from "./router";
import { nav } from "./navigation/nav";
import * as allRoomsContent from "./cart/room-cart.js";
import * as allTreatmentsContent from "./cart/treatments-cart.js";
import {
  showBookings,
  showRooms,
  actuallGuestsInfo,
  showHome,
  showTreatments,
  showRegistrationForm,
  findCookieLogin,
  registrationLoginHoversOff,
  loginRemove,
  showLoginForm,
} from "./views";
import { Cart } from "./cart/cart.js";
// import { roomCart } from "./cart/room-cart.js";
// import { showHome } from "./views/show-Home.js";
// import { showTreatments } from "./views/show-treatments.js";
// import { showBookings } from "./views/show-bookings.js";

// database.users.push(infoPush);

console.log(database.users[0]);

// console.log(database.users);

// var infoPush = JSON.stringify({ b: "hej" });

// var finished = () => {
//   console.log("działa");
// };

// var fs = require("file-system");

// fs.appendFile("../database.json", infoPush, finished());

// var words = fs.readFile("../database.json");

// console.log(JSON.parse(words));

// fs.writeFile("../database.json", infoPush, finished);

// database.users.push(infoPush);

// const roomClass = new RoomClass();

const main = $("main");

// const cart = new Cart(); //moje

const router = new Router(routes); //router.js
// console.log(router); //moje
main.before(nav);

//element main będzie 'outletem' na nasze widoki
router.mount(main); //router.js ---> po prostu wywołujemy metodę .mount() na router z pliku router.js class Router
// console.log(router.mount); //moje
// router.navigate("/rooms");

router.init(); //router.js ---> po prostu wywołujemy metodę init() na router z pliku router.js class Router
//przy uruchomieniu strony pierwszy raz nawigujemy do ścieżki z paska adresu

//----------------

// console.log(router.mount(main));

// console.log(router.init());

// var oldHref = window.location.href;
// console.log(oldHref);
// var newHref = window.location;
// console.log(newHref);
console.log(window.location.origin); //Początkowy adres strony

//-----------------

// Podstrony

showHome(); //Podstrona
showRooms();
showTreatments(); //Podstrona (musi być przed findCookieTreatment)
showBookings(); //Podstrona

//----------------

//Home

showRegistrationForm();
showLoginForm();

findCookieLogin();
loginRemove();

//-----------

// Rooms

// Przy przaładowaniu strony wczytujemy wartości Rooms do kosza

allRoomsContent.findCookieRoom1();
allRoomsContent.findCookieRoom2();
allRoomsContent.findCookieRoom3();
allRoomsContent.findCookieRoom4();

actuallGuestsInfo();

//Podstrona (musi być po findCookieRoom)

//---dodawanie i odejmowanie osób (Rooms)

allRoomsContent.roomId1Add();
allRoomsContent.roomId2Add();
allRoomsContent.roomId3Add();
allRoomsContent.roomId4Add();

allRoomsContent.roomId1Remove();
allRoomsContent.roomId2Remove();
allRoomsContent.roomId3Remove();
allRoomsContent.roomId4Remove();

//-----------

allRoomsContent.room1ReloadInfo(); //info kosz grafika
allRoomsContent.room2ReloadInfo(); //info kosz grafika
allRoomsContent.room3ReloadInfo(); //info kosz grafika
allRoomsContent.room4ReloadInfo(); //info kosz grafika

allRoomsContent.allZeroRoomsDisabled(); //wyłączenia przy zerowej liczbie osób w database

//------------

allRoomsContent.allRoomsDisablesAndHovers(); //wszelkie hovery, wyłączenia przy wczytaniu strony

//------------

//Treatments

//------------
// Przy przaładowaniu strony wczytujemy wartości Treatments do kosza

allTreatmentsContent.findCookieTreatment1();
allTreatmentsContent.findCookieTreatment2();
allTreatmentsContent.findCookieTreatment3();
allTreatmentsContent.findCookieTreatment4();
allTreatmentsContent.findCookieTreatment5();
allTreatmentsContent.findCookieTreatment6();
allTreatmentsContent.findCookieTreatment7();

//-------------

//---dodawanie i odejmowanie zabiegów (Treatments)

allTreatmentsContent.addTreatment1();
allTreatmentsContent.addTreatment2();
allTreatmentsContent.addTreatment3();
allTreatmentsContent.addTreatment4();
allTreatmentsContent.addTreatment5();
allTreatmentsContent.addTreatment6();
allTreatmentsContent.addTreatment7();

allTreatmentsContent.removeTreatment1();
allTreatmentsContent.removeTreatment2();
allTreatmentsContent.removeTreatment3();
allTreatmentsContent.removeTreatment4();
allTreatmentsContent.removeTreatment5();
allTreatmentsContent.removeTreatment6();
allTreatmentsContent.removeTreatment7();

//-------------

//Bookings

//-------------

// Zdarzenia dla podstron wszystkich podstron

$(".text-light").on({
  click: () => {
    if (
      window.location.href.match(/\/$/) &&
      window.location.href.length - 1 === window.location.origin.length
    ) {
      // console.log("działa");
      //(window.location.href.match(/\/{1}$/))
      $("#main-section").empty();
      showHome();

      showRegistrationForm();
      showLoginForm();
      registrationLoginHoversOff();
    } else if (window.location.href.match(/\/rooms$/)) {
      $("#main-section").empty();
      showRooms();

      actuallGuestsInfo();

      // window.location.reload(false);

      // allRoomsContent.addInsideRoomAddId1();

      allRoomsContent.roomId1Add();
      allRoomsContent.roomId2Add();
      allRoomsContent.roomId3Add();
      allRoomsContent.roomId4Add();

      allRoomsContent.roomId1Remove();
      allRoomsContent.roomId2Remove();
      allRoomsContent.roomId3Remove();
      allRoomsContent.roomId4Remove();

      allRoomsContent.allZeroRoomsDisabled(); //wyłączenia przy zerowej liczbie osób w database (w Rooms)

      allRoomsContent.allRoomsDisablesAndHovers(); //wszelkie hovery, wyłączenia na przy wczytaniu strony (w Rooms)
    } else if (window.location.href.match(/\/treatments$/)) {
      $("#main-section").empty();
      showTreatments();

      allTreatmentsContent.addTreatment1();
      allTreatmentsContent.addTreatment2();
      allTreatmentsContent.addTreatment3();
      allTreatmentsContent.addTreatment4();
      allTreatmentsContent.addTreatment5();
      allTreatmentsContent.addTreatment6();
      allTreatmentsContent.addTreatment7();

      allTreatmentsContent.removeTreatment1();
      allTreatmentsContent.removeTreatment2();
      allTreatmentsContent.removeTreatment3();
      allTreatmentsContent.removeTreatment4();
      allTreatmentsContent.removeTreatment5();
      allTreatmentsContent.removeTreatment6();
      allTreatmentsContent.removeTreatment7();

      allTreatmentsContent.allstateTreatmentsInfo(); //ifnormacje przy zmianie zakładki co dodano co nie (do hoverów i aktywnych, nieaktywnych przycisków)
    } else if (window.location.href.match(/\/bookings$/)) {
      $("#main-section").empty();
      showBookings();
    } else {
      $("#main-section").empty();
      // return $("#main-section").empty();
    }
    // console.log($("#main-section"));
  },
});

//--------------

// $(".button-add-id1").click((e) => {
//   e.stopPropagation();
//   console.log("xxxxxxxxxxxxxxxxxxxxxxxxx");
// });

// if (
//   window.location.href.match(/\/$/) &&
//   window.location.href.length - 1 === window.location.origin.length
// ) {
//   // console.log("działa");
//   //(window.location.href.match(/\/{1}$/))
//   $("#main-section").empty();
//   showHome();
// } else
// if (window.location.href !== window.location.href.match(/\/rooms$/)) {
//   $(".not-empty").empty();
//   console.log("działa");
// }
// else if (window.location.href.match(/\/treatments$/)) {
//   $("#main-section").empty();
//   // let newHref = window.location.href;
//   // console.log(newHref);
//   // if (newHref !== oldHref) {
//   showTreatments();
// } else if (window.location.href.match(/\/bookings$/)) {
//   $("#main-section").empty();
//   showBookings();
// } else {
//   $("#main-section").empty();
//   // return $("#main-section").empty();
// }
// console.log($("#main-section"));

//------------

// console.log(document.cookie);

// console.log(document);

// var myInit = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   mode: "cors",
//   cache: "default",
// };

// let myRequest = new Request(
//   "C:/Users/PB/Desktop/repo-git/projekty-2020/it-spa-master-clone/src/database/database-json.json",
//   myInit
// );
// $.getJSON("./database/database-json.json", (data) => {
//   console.log(data);
// });
// let data = require("../database.json");

// fetch("local").then((response) => {
//   console.log("działa");
//   return response.json();
// });
//   .then((answer) => console.log(answer));
// const jsonInfo = $.getJSON(
//   "C/:UsersPBDesktop/repo-git/projekty-2020/it-spa-master-clone/database.json"
// );

// console.log(database.rooms[0].name);

// console.log(JSON.parse(jsonInfo));

// cart.setItSpaCart("abc");
// cart.setItSpaCart("abc");
// cart.setItSpaCart("def");

// console.log(document.cookie);

//----------

// cart.add(database.rooms[0]);

// database.rooms[0].beds = 5;

// cart.add(database.rooms[0]);

// cart.add({ name: "value" });

// cart.remove(database.rooms[0]);

// cart.setItSpaCart(database.rooms[0]);

// cart.setItSpaCart("stach");

// cart.setItSpaCart("aar55:<JJ");

// console.log(document.cookie);

//----------

// console.log($("room-id2"));

// console.log(cart.add());

// const databaseStringify = JSON.stringify(database);

// const databaseParse = JSON.parse(databaseStringify);

// console.log(databaseParse);

// const databaseStringify = JSON.stringify(database);

// const databaseParse = JSON.parse(databaseStringify);

// console.log(databaseParse);

// console.log($("#main-section div div.room-id4 .one-room-info").text());

// fetch("http://localhost:1234/database.json").then((response) => {
//   console.log(response.url);
//   console.log(database.rooms[0]);
// });

// console.log(allRoomsContent.roomOneWithChanging);

// $(window).on("click", () => {
//   if (
//     window.location.href.match(/\/$/) &&
//     window.location.href.length - 1 === window.location.origin.length
//   ) {
//     // console.log("działa");
//     //(window.location.href.match(/\/{1}$/))
//     return showHome();
//   } else if (window.location.href.match(/\/rooms$/)) {
//     allRoomsContent.roomId1Add();
//   }
//   //  else if (window.location.href.match(/\/treatments$/)) {
//   //   $("#main-section").empty();
//   //   // let newHref = window.location.href;
//   //   // console.log(newHref);
//   //   // if (newHref !== oldHref) {
//   //   return showTreatments();
//   // } else if (window.location.href.match(/\/bookings$/)) {
//   //   // $("#main-section").empty();
//   //   return showBookings();
//   // } else {
//   //   $("#main-section").empty();
//   //   // return $("#main-section").empty();
//   // }
//   // // console.log($("#main-section"));
// });

// console.log($("#info-section div:empty").length);
// $(document).ready(() => {
//   $("#info-section").unload(() => {
//     // // e.stopPropagation();
//     // const addText = $("<div>ABC</div>");

//     // $("#info-section").append(addText);
//     console.log("działa");
//   });
// });
// $(window).on("beforeunload", function () {
//   e.stopPropagation();
//   const addText = $("<div>ABC</div>");

//   console.log("działa");

//   $("#info-section").append(addText);
// });

// divSectionText;
