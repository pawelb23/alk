import $ from "jquery";
// import { Router, routes } from "../router";
// import * as allFile from "../it-spa";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

const todayDate = `${yyyy}-${mm}-${dd}`;

const sevenDaysAdd = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

const dd7 = String(sevenDaysAdd.getDate()).padStart(2, "0");

const mm7 = String(sevenDaysAdd.getMonth() + 1).padStart(2, "0");

const yyyy7 = today.getFullYear();

const dateBySeven = `${yyyy7}-${mm7}-${dd7}`;

// const yearMaxDate = `${yyyy}-${mm}-${dd + 7}`;

// const todayDate = `<div class="input-group date" data-provide="datepicker">
// <input type="text" class="form-control">
// <div class="input-group-addon">
//     <span class="glyphicon glyphicon-th"></span>
// </div>
// </div>`;

// $('.datepicker').datepicker();

export const showBookings = () => {
  if (window.location.href.match(/\/bookings$/)) {
    const showAllBookings = $(
      `<div id="bookings-container"><div class="arrival-date-container"><div class="arrival-info"><h4 class="arrival-span-info">Data przyjazdu</h4></div><format class="arrival-form"><input id="input-arrival-date" type="date" value=${todayDate} min=${todayDate}><input class="submit-arrival" type="submit" value="Zatwierdź"></form></div><div class="departure-date-container"><div class="departure-info"><h4 class="departure-span-info">Data wyjazdu</h4></div><format class="arrival-form"><input id="input-arrival-date" type="date" value=${dateBySeven} min=${dateBySeven}><input class="submit-arrival" type="submit" value="Zatwierdź"></form></div><div class="summary-whole-basket"><button class="button-basket-summary" disabled=true>Podsumowanie</button></div></div>`
    );

    $("#main-section").append(showAllBookings);
  }
};
