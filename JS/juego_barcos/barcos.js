/*  Crear juego guerra barcos acorazados  */

/* Se pedirá al usuario el tamaño del tablero y las minas a colocar. La validación de
datos consistirá en:
o */

let filas = 7
let columnas = 7
let barcos = 2

/* La entrada de datos serán números enteros superiores o iguales a 2.
o Las filas y/o columnas no podrán ser superiores a 20.
o El número de barcos nunca podrá ser igual o superior a columnas x filas /2.  */
function validarDatos(filas, columnas, barcos) {
    if (filas < 2 || columnas < 2 || barcos < 2) {
        return false;
    }
    if (filas > 20 || columnas > 20) {
        return false;
    }
    if (barcos >= (filas * columnas) / 2) {
        return false;
    }
    return true;
}


/* Funcion para crear el tablero devuelve un array bidimensional */

function crearTablero(filas, columnas) {
    let tablero = [];
    for (let i = 0; i < filas; i++) {
        tablero[i] = [];
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = '';
        }
    }
    return tablero;
}

/* Dibuja el tablero en la pagina web */
function dibujarTablero(tablero) {
    let html = '<table>';
    for (let i = 0; i < filas; i++) {
        html += '<tr>';
        for (let j = 0; j < columnas; j++) {
            html += '<td>' + tablero[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.write(html);
}

/* Funcion dibujar barcos con fondo negro sobre las celdas de la tabla */
function dibujarBarcos(tablero, barcos) {
    let contador = 0;
    while (contador < barcos) {
        let fila = Math.floor(Math.random() * filas);
        let columna = Math.floor(Math.random() * columnas);
        if(fila === 0) {
            fila++;
        }else if(fila >=6) {
            fila--;
        }

        /* hacer que las filas y las columnas no coincidan */
        if(columna === 0) {
            columna++;
        }else if(columna >=6) {
            columna--;
        }

        

        if(hayBarcos(tablero, fila, columna) == false){
            
            tablero[fila][columna] = '<div class="barco">h</div>';
            tablero[fila+1][columna] = '<div class="barco">h</div>';
            tablero[fila-1][columna] = '<div class="barco">h</div>';
            contador++;
        }
        //console.log(fila);
        /* Para que no se salga del tablero  */
    }
}

/* si hay barcos dibujados a la izquierda o derecha, arriba o abajo o en diagonal */
function hayBarcos(tablero, fila, columna) {
    if (tablero[fila][columna] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila][columna - 1] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila][columna + 1] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila - 1][columna] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila + 1][columna] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila - 1][columna - 1] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila - 1][columna + 1] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila + 1][columna - 1] == '<div class="barco">h</div>') {
        return true;
    }
    if (tablero[fila + 1][columna + 1] == '<div class="barco">h</div>') {
        return true;
    }
    return false;
}





/* Ejecutar codigo */
if (validarDatos(filas, columnas, barcos)) {
    let tablero = crearTablero(filas, columnas);
    dibujarBarcos(tablero, barcos);
    dibujarTablero(tablero);
}



