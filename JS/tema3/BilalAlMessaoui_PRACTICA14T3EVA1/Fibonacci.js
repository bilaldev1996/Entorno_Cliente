

let n = prompt("Introducir un número: ");



function fibonacci(n) {
    /* recogemos los dos primeros números y emepezamos por el tercero */
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

alert(fibonacci(n));

