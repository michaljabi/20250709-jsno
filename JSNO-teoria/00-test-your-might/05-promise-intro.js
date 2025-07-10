
console.log('Hello stranger... shall we start?')

// number[]
// Array<number>
const numbers = [1, 2, 3, 4, '', true]

function giveMeTheNumber() {
    return Promise.resolve(300)
}

// await sth();
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