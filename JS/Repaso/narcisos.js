/*  El número de narcisos se refiere a un número de 3 dígitos y la suma de los dígitos a la potencia de 3 es igual a sí mismo. (Por ejemplo: 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 153), imprima todos los números de narcisos. */

let suma = 0;

for (let i = 100; i <= 999; i++) {
    let centenas = Math.floor(i / 100);
    let decenas = Math.floor(i / 10) % 10;
    let unidades = i % 10;

    if (i == Math.pow(centenas, 3) + Math.pow(decenas, 3) + Math.pow(unidades, 3)) {
        console.log(i);
    }
}
