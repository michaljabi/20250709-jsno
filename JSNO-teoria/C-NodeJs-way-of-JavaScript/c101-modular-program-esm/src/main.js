/**
 * Dobrą praktyką w pisaniu nowych projektów / programów w Node.js
 * jest utworzenie katalogu /src
 *
 * to w środku niego będą znajdowały się wszystkie pliki z kodem.
 * Natomiast pozostałe pliki konfiguracyjne — będą znajdowały się w katalogu głównym projektu.
 * */

import Car, {many, things} from './Car.js';

const car1 = new Car()
const car2 = new Car('Bugatti', 'Veyron')

car1.makeSomeNoise()
car2.makeSomeNoise()

console.log(many);
console.log(things);
