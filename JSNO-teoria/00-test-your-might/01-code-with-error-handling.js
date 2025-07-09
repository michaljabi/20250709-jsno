/**
 * 1
 *
 * Zrób funkcję, która dzieli 2 liczby
 * i rzuca błąd "Cannot divide by 0" jeśli 2 liczba to "0"
 * */

function divide(a = 0, b = 1) {
 
    if(b === 0) {
        throw new Error("Cannot divide by 0")
    }
    return a / b;
}

try {
    divide(10, 1) //=
    divide(0, 1) //=
    divide(10, 5) //=
    divide(10, 0) //=
    divide(10, 0) //=
} catch (e) {
    console.log(e.message)
}