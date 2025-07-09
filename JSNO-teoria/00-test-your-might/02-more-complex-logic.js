/**
 * 2.1
 *
 * Zrób funkcję "divide", która dzieli 2 liczby,
 * ale przesyła do nas wynik, po 3 sekundach.
 * funkcja ta nie powinna w sobie zawierać słowa kluczowego "return".
 * Ma odliczyć 3 sekundy i "wysłać" wynik.
 *
 * Pokaż użycie funkcji divide — udowodnij, że działa poprawnie
 * */


function divideAync(a = 0, b = 1, collect = () => {}) {
 
    setTimeout(() => {

        if(b === 0) {
            return collect(new Error("Cannot divide by 0"), null)
        }

        collect(null, a / b)
    }, 3000)
}



divideAync(10, 2, (err, result) => {
    if(!err) {
        console.log(result)
    }
})

/**
 * 2.2
 *
 * Jak teraz możemy obsłużyć błąd "Cannot divide by 0"?
 * - zaproponuj rozwiązanie
 * 
 * 
 * bo hmmmm try catch nie zadziała ?
 * */

// innymi słowy "jak poinformować Consumera, że coś poszło nie tak."

// To nie zadziała, bo `throw` wewnątrz setTimeout będzie poza naszym `try/catch` 😢
try {
    divideAync(10, 0, (err, result) => {
        console.log(result)
    })
} catch (e) {
    console.log(e.message)
}

// poprawnie obsługujemy błąd :
divideAync(10, 0, (err, result) => {
    if(err) {
        return console.log(err.message);
    }
    console.log(result)
})