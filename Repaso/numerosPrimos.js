/* Imprimir todos los numeros primos entre 1-100 */

let numero = 1;

const esPrimo = numero =>{
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}
while (numero <= 100) {
    if(esPrimo(numero)) {
        console.log(numero);
    }
    numero++;
}


