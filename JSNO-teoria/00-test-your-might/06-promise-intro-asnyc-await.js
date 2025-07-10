
/**
 * Usuń wszystkie Promise. / .then() i .catch()
 * 
 * przepisz na async / await
 */

async function giveMeTheNumber() {
    return 300
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */ 

// giveMeTheNumber().then(num => {
//     console.log(num);
// })

const num = await giveMeTheNumber();
console.log(num);

// CONSUMER #3 (odbierz po 2 sec)
setTimeout(async () => {

    const num = await giveMeTheNumber();
    console.log(num);
}, 2000)

async function giveMeTheNumber2() {
    throw 456
}

/**
 * 2
 *
 * Poniżej odbierz liczbę 456 i pokaż ją na ekranie:
 * */ 

// giveMeTheNumber2().catch(num => {
//     console.log(num);
// })

try {
    await giveMeTheNumber2();
} catch (num) {
    console.log(num);
}


// Jak nie było top level await:
async function run() { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
    await giveMeTheNumber2();
}
run();

// JS koncept: IIFE (Immediately Invoked Function Expression)
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

const r = async function() { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
     await giveMeTheNumber2();
}

;(async function() {
     await giveMeTheNumber2();
})();

;(async () => {
     await giveMeTheNumber2();
})();

// alter:
;(async function () {
     await giveMeTheNumber2();
}());