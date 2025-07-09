const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

console.log(`
****************************************
*   WITAJ W GENERATORZE BANNERÓW [!]   *
****************************************    
`)
// const test = "to jest moje zdanie";
// makeBanner(test);

function makeBanner(sentence) {
    const words = sentence.toUpperCase().split(' ');
    for(const word of words) {
        console.log('*'.repeat(word.length + 4))
        console.log('*', word, '*');
        console.log('*'.repeat(word.length + 4))
    }
    return words;
}

const rl = readline.createInterface({ input, output });

rl.question('Podaj zdanie jakie chcesz zamienić w banner:', (answer) => {

  makeBanner(answer);
  rl.close();
  
});
