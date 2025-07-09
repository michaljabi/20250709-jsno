
console.log('Hello stranger... shall we start?')


// PROVIDER:
function giveMeTheNumber(mistery) {
    mistery(100)
    mistery(100)
    setTimeout(() => {
         mistery(100)
    }, 3000)
}

/**
 * 1
 *
 * Poniżej odbierz liczbę 300 i pokaż ją na ekranie:
 * */





















setTimeout(() => {
    // CONSUMER #1:
    giveMeTheNumber((value) => {
        console.log(value);
    })
}, 2000)






// CONSUMER #2:
giveMeTheNumber((value) => {
    console.log(value);
})


setTimeout(() => {
         console.log(1002)
    }, 5000)