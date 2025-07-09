// @ts-check
import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";

import { makeBanner } from './make-banner.js';

const rl = createInterface({
  input,
  output,
});

export function start() {
  rl.question("Podaj zdanie jakie chcesz zamienić w banner:", (answer = "") => {
    makeBanner(answer);
    askWhatNext();
  });
}

export function askWhatNext() {
  rl.question(`Co robimy dalej - wpisz odpowiednią literę:
  [k]oniec
  [n]astępny banner
  _ `, (letter) => {
    if(letter === 'k') {
      console.log('Kończę działanie, żegnam...')
      rl.close();
    } else if(letter === 'n') {
      start();
    } else {
      console.log(`Nieobsługiwany wybór "${letter}"!`)
      askWhatNext();
    }
  })
}