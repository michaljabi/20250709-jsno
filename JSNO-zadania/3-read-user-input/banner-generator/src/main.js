// @ts-check

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

console.log(`
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************    
`)

const rl = readline.createInterface({ input, output });


rl.question('Podaj zdanie jakie chcesz zamienić w banner:', (answer = '') => {

  makeBanner(answer);
  rl.close();

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
