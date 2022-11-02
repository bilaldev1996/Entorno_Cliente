/*  Crear juego buscaminas   */

/* Se pedirá al usuario el tamaño del tablero y las minas a colocar. La validación de
datos consistirá en:
o */

let filas = parseInt(prompt('Introduce el número de filas'));
let columnas = parseInt(prompt('Introduce el número de columnas'));
let minas = parseInt(prompt('Introduce el número de minas'));

/* La entrada de datos serán números enteros superiores o iguales a 2.
o Las filas y/o columnas no podrán ser superiores a 20.
o El número de minas nunca podrá ser igual o superior a columnas x filas /2.  */
function validarDatos(filas, columnas, minas) {
    if (filas < 2 || columnas < 2 || minas < 2) {
        return false;
    }
    if (filas > 20 || columnas > 20) {
        return false;
    }
    if (minas >= (filas * columnas) / 2) {
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

/* Una función ponerMinas() que reciba el tablero y el número de minas a poner.*/
function ponerMinas(tablero, minas) {
    let contador = 0;
    while (contador < minas) {
        let fila = Math.floor(Math.random() * filas);
        let columna = Math.floor(Math.random() * columnas);
        if (tablero[fila][columna] != 'Mina') {
            tablero[fila][columna] = 'Mina';
            contador++;
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

/* Una función nMinasPos() que reciba el array del tablero y una posición en él.
Devolverá las minas alrededor de esa posición. */
function nMinasPos(tablero, fila, columna) {
    let contador = 0;
    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            if (i >= 0 && i < filas && j >= 0 && j < columnas) {
                if (tablero[i][j] == 'Mina') {
                    contador++;
                }
            }
        }
    }
    return contador;
}


/* Una función ponerNumeros() que reciba el tablero y ponga el número de minas alrededor de cada posición. */
function ponerNumeros(tablero) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (tablero[i][j] != 'Mina') {
                tablero[i][j] = nMinasPos(tablero, i, j);
                /* Si alrededor no hay ninguna mina lo dejamos en blanco */
                if(tablero[i][j]==0){
                    tablero[i][j]='';
                }
            }
        }
    }
    return tablero;
}

/* Ejecutar codigo */
if (validarDatos(filas, columnas, minas)) {
    let tablero = crearTablero(filas, columnas); //Creamos el tablero
    tablero = ponerMinas(tablero, minas); //ponemos las minas
    tablero = ponerNumeros(tablero); //ponemos el numero de minas que tiene alrededor
    dibujarTablero(tablero); // dibujamos en la pagina web
}else{
    alert('Datos incorrectos, intentalo de nuevo');
}