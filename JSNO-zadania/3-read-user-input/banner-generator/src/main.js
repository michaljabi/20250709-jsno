// @ts-check

// CJS => CommonJS
const readline = require('node:readline');
const process = require('node:process');


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
const { stdin: input, stdout } = process;
// const stdin = process.stdin;
// const stdout = process.stdout;

/*
// to samo ale ESM:
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
*/

console.log(`
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************    
`)

const rl = readline.createInterface({ 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#property_definitions
    input, // object property shorthand 
    output: process.stdout 
});


rl.question('Podaj zdanie jakie chcesz zamienić w banner:', (answer = '') => {

  makeBanner(answer);
//   rl.question('Podaj kolejne zdanie:', (answer = '') => {

//     rl.question('Podaj jeszcze jedno zdanie:', (answer = '') => {

//         rl.close();
//     })

//   })

});

// TODO: (zad-4) przenieś do innego pliku

const PADDING = 4;

/**
 * @param {string} sentence 
 */
function makeBanner(sentence) {
    const words = sentence.toUpperCase().split(' ');
    for(const word of words) {
        const line = '*'.repeat(word.length + PADDING);
        console.log(`${line}
* ${word} *
${line}`)
    }
}
