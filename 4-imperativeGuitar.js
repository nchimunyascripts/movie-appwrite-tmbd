import { createElement } from "react";

const strings = ["E", "A", "D", "G", "B", "E"];

function Guitar(params) {
  //create head and pegs
  const head = createElement("head");
  for (let i = 0; i < 6; i++) {
    const peg = createElement("peg");
    head.append(peg);
  }

  //neck
  const neck = createElement("neck");
  for (let i = 0; i < 19; i++) {
    const fret = createElement("fret");
    neck.append(fret);
  }

  // create body an add strings
  const body = createElement("body");
  strings.forEach((tone) => {
    const string = createElement("string");
    string.tune(tone);
    body.append(string);
  });
}
