import $ from "jquery";
import { home, rooms, treatments, bookings } from "../views";
import { routes } from "../router";
import { navItem } from "./nav-item";

export const nav = () => {
  const fragment = $(new DocumentFragment());

  const navBar = $(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
    <span class="navbar-brand">IT SPA</span> <ul class="navbar-nav mr-auto"></ul>
    </nav>`);

  //uzupełnij <ul> elementami <li>
  const navBarItems = routes.map(route => navItem(route)); //navItem --> odnośnik do pliku nav-item.js

  navBar.find("ul").append(navBarItems);

  fragment.append(navBar);

  return fragment;
};
