/* Ejercicio 2 Imprime el número y la suma de todos los múltiplos de 7 entre 1-100 */

let suma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        suma += i;
        console.log(i);
    }
}

console.log(suma);

