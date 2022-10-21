/* Crear una aplicación web que muestre un mapa del popular juego Buscaminas.
Entrada:
✓ Se pedirá al usuario el tamaño del tablero y las minas a colocar. La validación de
datos consistirá en:
o La entrada de datos serán números enteros superiores o iguales a 2.
o Las filas y/o columnas no podrán ser superiores a 20.
o El número de minas nunca podrá ser igual o superior a columnas x filas /2. */

let filas = 0
let columnas = 0
let minas = 0

while ((filas < 2) | (columnas < 2) | (filas > 20) | (columnas > 20)) {
    alert('Datos incorrectos, vuelve a intentarlo')
    filas = parseInt(prompt('Introduce numero de filas.'))
    columnas = parseInt(prompt('Introduce numero de columnas.'))
}


/* Una función dibujaTablero() que dibuje el tablero en una página web. Recibe como
argumentos las filas y columnas. Rellenará el tablero de ceros o falses. */

function dibujaTablero(filas,columnas){
    let tablero = new Array();
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = 0;
        }
    }
    console.log(tablero);
    return tablero;
}

dibujaTablero(filas,columnas);

