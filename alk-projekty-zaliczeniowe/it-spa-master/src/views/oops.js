import $ from "jquery";

export const oops = () => {
  const fragment = $(new DocumentFragment());
  //DocumentFragment kontener służący do dostawiania elementów

  const h1 = $("<h1>Oops...</h1>");
  const p = $("<p>Coś poszło nie tak.</p>");

  fragment.append(h1).append(p);

  return fragment;
};
