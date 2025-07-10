
/**
 * Usuń wszystkie Promise. / .then() i .catch()
 * 
 * przepisz na async / await
 */

function giveMeTheNumber() {
    return Promise.resolve(300)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */ 

giveMeTheNumber().then(num => {
    console.log(num);
})


function giveMeTheNumber2() {
    return Promise.reject(456)
}

/**
 * 2
 *
 * Poniżej odbierz liczbę 456 i pokaż ją na ekranie:
 * */ 

giveMeTheNumber2().catch(num => {
    console.log(num);
})