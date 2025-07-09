// @ts-check

import { createInterface } from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { makeBanner, wrapWithBorder } from './make-banner.js';

wrapWithBorder("WITAJ W GENERATORZE BANNERÓW [!]")

const rl = createInterface({
  input,
  output,
});


function app() {
  rl.question("Podaj zdanie jakie chcesz zamienić w banner:", (answer = "") => {
    makeBanner(answer);
    askWhatNext();
  });
}

function askWhatNext() {
  rl.question(`Co robimy dalej - wpisz odpowiednią literę:
  [k]oniec
  [n]astępny banner
  _ `, (letter) => {
    if(letter === 'k') {
      console.log('Kończę działanie, żegnam...')
      rl.close();
    } else if(letter === 'n') {
      app();
    } else {
      console.log(`Nieobsługiwany wybór "${letter}"!`)
      askWhatNext();
    }
  })
}

app();