/*  Crear juego buscaminas   */


//imagen de la mina
const mina = "<img src='./mina.png' alt='imagen mina' width='50' height='50'/>";

/* Funciton para pedir y validar filas */

function getN_Filas(){
    let filas = parseInt(prompt('Introduce el número de filas'));
    while(filas < 2 || filas > 20 || !Number.isInteger(filas)) {
        alert('El número de filas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
        filas = parseInt(prompt('Introduce el número de filas'));
    }
    return filas;
}


/* Funciton para pedir y validar columnas */

function getN_Columnas(){
    let columnas = parseInt(prompt('Introduce el número de columnas'));
    while(columnas < 2 || columnas > 20 || !Number.isInteger(columnas)) {
        alert('El número de columnas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
        columnas = parseInt(prompt('Introduce el número de columnas'));
    }
    return columnas;
}



/* Funciton para pedir y validar minas */
function getN_Minas(filas,columnas){
    let minas = parseInt(prompt('Introduce el número de minas'));
    while (minas < 2 || minas >= (filas * columnas) / 3 || minas >= (filas * columnas*2) / 3 || !Number.isInteger(minas)) {
        alert('El número de minas debe ser mayor o igual a 2 y menor a la mitad de las casillas y entero');
        minas = parseInt(prompt('Introduce el número de minas'));
    }
    
    return minas;
}


/* Una función nMinasPos() que reciba el array del tablero y una posición en él.
Devolverá las minas alrededor de esa posición. */
function nMinasPos(tablero, fila, columna,filas,columnas) {
    /* declaramos una variable contador para que nos devuelva las el número de minas que hay alrededor de la casilla */
    let contador = 0;
    /* recorremos el array del tablero, recorriendo las filas y colmnas adyacentes a cada casilla */
    for (let i = fila - 1; i <= fila + 1; i++) {
        for (let j = columna - 1; j <= columna + 1; j++) {
            /* controlamos que no salga del tablero */
            if (i >= 0 && i < filas && j >= 0 && j < columnas) {
                /* comprobar si la casilla  tiene alguna mina */
                if (tablero[i][j] == mina) {
                    contador++;
                }
            }
        }
    }
    return contador;
}

/* Una función  que reciba el tablero y ponga el número de minas alrededor de cada posición. */
function colocaRelleno(tablero,filas,columnas) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (tablero[i][j] != mina) {
                // Si no es una mina, colocar el número de minas alrededor
                tablero[i][j] = nMinasPos(tablero, i, j,filas,columnas);
                /* poner numeros de colores */
                if (tablero[i][j] == 1) {
                    tablero[i][j] = "<font color='blue' size='5'>" + tablero[i][j] + "</font>";
                }else if (tablero[i][j] == 2) {
                    tablero[i][j] = "<font color='green' size='5'>" + tablero[i][j] + "</font>";
                }else if (tablero[i][j] == 3) {
                    tablero[i][j] = "<font color='red' size='5'>" + tablero[i][j] + "</font>";
                }else if (tablero[i][j] == 4) {
                    tablero[i][j] = "<font color='purple' size='5'>" + tablero[i][j] + "</font>";
                }else if (tablero[i][j] == 5) {
                    tablero[i][j] = "<font color='orange' size='5'>" + tablero[i][j] + "</font>";
                }else if (tablero[i][j] == 6) {
                    tablero[i][j] = "<font color='black' size='5'>" + tablero[i][j] + "</font>";
                }
                /* Si alrededor no hay ninguna mina lo dejamos en blanco */
                if(tablero[i][j]==0){
                    /* si esta vacio crear una caja */
                    tablero[i][j]="<div class='caja'> </div>";
                }
            }
        }
    }
    return tablero;
}

/* Una función  que reciba el tablero y el número de minas a poner.*/
function colocaMinas(tablero, minas,filas,columnas) {
    let contador = 0;
    while (contador < minas) {
        let fila = Math.floor(Math.random() * filas);
        let columna = Math.floor(Math.random() * columnas);
        if (tablero[fila][columna] != mina) {
            tablero[fila][columna] = mina;
            contador++;
        }
    }
    return tablero;
}


//funcion que dibuja el tablero en el html
function dibujarTablero(tablero,filas,columnas) {
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

/* Funcion que crea el tablero */
function creaTablero(filas, columnas) {
    let tablero = new Array(filas);
    for (let i = 0; i < filas; i++) {
        tablero[i] = new Array(columnas);
    }
    return tablero;
}


/* Funcion que ejecuta el codigo anterior */
function buscaminas(){
    let filas = getN_Filas();
    let columnas = getN_Columnas();
    let minas = getN_Minas(filas,columnas);
    let tablero = creaTablero(filas, columnas);
    tablero = colocaMinas(tablero, minas,filas,columnas);
    tablero = colocaRelleno(tablero,filas,columnas);
    dibujarTablero(tablero,filas,columnas);    
}

buscaminas();