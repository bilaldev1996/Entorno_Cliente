/* realizar todo el programa anterior orientado a objetos */

const mina = "<img src='./mina.png' alt='imagen mina' width='50' height='50'/>";

class Buscaminas {
    constructor(tablero, numFilas, numColumnas, minas) {
        this.tablero = tablero;
        this.numFilas = numFilas;
        this.numColumnas = numColumnas;
        this.minas = minas;
    }

        /* get y set */
        get tablero(){
            return this._tablero;
        }

        set tablero(tablero){
            this._tablero = tablero;
        }

        get numFilas(){
            return this._numFilas;
        }

        set numFilas(numFilas){
            this._numFilas = numFilas;
        }

        get numColumnas(){
            return this._numColumnas;
        }

        set numColumnas(numColumnas){
            this._numColumnas = numColumnas;
        }

        get minas(){
            return this._minas;
        }

        set minas(minas){
            this._minas = minas;
        }


        /* funciones */
        getN_Filas = function () {
            let filas = parseInt(prompt('Introduce el número de filas'));
            while (filas < 2 || filas > 20 || !Number.isInteger(filas)) {
                alert('El número de filas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
                filas = parseInt(prompt('Introduce el número de filas'));
            }
            this.numFilas = filas;
            return filas;
        };

        getN_Columnas = function () {
            let columnas = parseInt(prompt('Introduce el número de columnas'));
            while (columnas < 2 || columnas > 20 || !Number.isInteger(columnas)) {
                alert('El número de columnas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
                columnas = parseInt(prompt('Introduce el número de columnas'));
            }
            this.numColumnas = columnas;
            return columnas;
        };

        getN_Minas = function (filas, columnas) {
            let minas = parseInt(prompt('Introduce el número de minas'));
            while (minas < 2 || minas > filas * columnas || !Number.isInteger(minas)) {
                alert('El número de minas debe ser mayor o igual a 2 y menor o igual a filas*columnas y entero');
                minas = parseInt(prompt('Introduce el número de minas'));
            }
            this.minas = minas;
            return minas;
        };

        creaTablero = function (filas, columnas) {
            let tablero = new Array(filas);
            for (let i = 0; i < filas; i++) {
                tablero[i] = new Array(columnas);
            }
            this.tablero = tablero;
            return tablero;
        };

        nMinasPos = function (tablero, fila, columna) {
            console.log(this.minas)
            /* declaramos una variable contador para que nos devuelva las el número de minas que hay alrededor de la casilla */
            let contador = 0;
            /* recorremos el array del tablero, recorriendo las filas y colmnas adyacentes a cada casilla */
            for (let i = fila - 1; i <= fila + 1; i++) {
                for (let j = columna - 1; j <= columna + 1; j++) {
                    /* controlamos que no salga del tablero */
                    if (i >= 0 && i < this.numFilas && j >= 0 && j < this.numColumnas) {
                        /* comprobar si la casilla  tiene alguna mina */
                        if (tablero[i][j] == mina) {
                            contador++;
                        }
                    }
                }
            }
            return contador;
        };

        colocaRelleno = function (tablero, filas, columnas) {
            for (let i = 0; i < filas; i++) {
                for (let j = 0; j < columnas; j++) {
                    if (tablero[i][j] != mina) {
                        // Si no es una mina, colocar el número de minas alrededor
                        tablero[i][j] = this.nMinasPos(tablero, i, j, filas, columnas);
                        /* poner numeros de colores */
                        if (tablero[i][j] == 1) {
                            tablero[i][j] = "<font color='blue' size='7'>" + tablero[i][j] + "</font>";
                        } else if (tablero[i][j] == 2) {
                            tablero[i][j] = "<font color='green' size='7'>" + tablero[i][j] + "</font>";
                        } else if (tablero[i][j] == 3) {
                            tablero[i][j] = "<font color='red' size='7'>" + tablero[i][j] + "</font>";
                        } else if (tablero[i][j] == 4) {
                            tablero[i][j] = "<font color='purple' size='7'>" + tablero[i][j] + "</font>";
                        } else if (tablero[i][j] == 5) {
                            tablero[i][j] = "<font color='orange' size='7'>" + tablero[i][j] + "</font>";
                        } else if (tablero[i][j] == 6) {
                            tablero[i][j] = "<font color='black' size='7'>" + tablero[i][j] + "</font>";
                        }
                        /* Si alrededor no hay ninguna mina lo dejamos en blanco */
                        if (tablero[i][j] == 0) {
                            /* si esta vacio crear una caja */
                            tablero[i][j] = "<div class='caja'> </div>";
                        }
                    }
                }
            }
            return tablero;
        };

        colocaMinas = function (tablero, filas, columnas, minas) {
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
        };

        dibujarTablero = function (tablero, filas, columnas) {
            let tabla = "<table>";
            for (let i = 0; i < filas; i++) {
                tabla += "<tr>";
                for (let j = 0; j < columnas; j++) {
                    tabla += "<td>" + tablero[i][j] + "</td>";
                }
                tabla += "</tr>";
            }
            tabla += "</table>";
            document.write(tabla);
        };


        iniciarTablero = function (tablero,filas,columnas) {
            filas = this.getN_Filas();
            columnas = this.getN_Columnas();
            let minas = this.getN_Minas(filas, columnas);
            tablero = this.creaTablero(filas, columnas);
            tablero = this.colocaMinas(tablero, filas, columnas, minas);
            tablero = this.colocaRelleno(tablero, filas, columnas);
            this.dibujarTablero(tablero, filas, columnas);
        };
}

let juego = new Buscaminas();

juego.iniciarTablero();


