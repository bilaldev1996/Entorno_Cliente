/*  Ejercicio 1: imprima la suma de todos los números impares entre 1 y 100 */

let suma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
        suma += i;
    }
}

console.log(suma);