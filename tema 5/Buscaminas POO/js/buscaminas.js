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
        get tab(){
            return this.tablero;
        }

        set tab(tablero){
            this.tablero = tablero;
        }

        get nFilas(){
            return this.numFilas;
        }

        set nFilas(numFilas){
            this.numFilas = numFilas;
        }

        get nColumnas(){
            return this.numColumnas;
        }

        set nColumnas(numColumnas){
            this.numColumnas = numColumnas;
        }

        get nMinas(){
            return this.minas;
        }

        set nMinas(minas){
            this.minas = minas;
        }

        /* funciones */

        getN_Filas(){
            let filas = parseInt(prompt('Introduce el número de filas'));
            while (filas < 2 || filas > 20 || !Number.isInteger(filas)) {
                alert('El número de filas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
                filas = parseInt(prompt('Introduce el número de filas'));
            }
            return filas;
        }

        getN_Columnas(){
            let columnas = parseInt(prompt('Introduce el número de columnas'));
            while (columnas < 2 || columnas > 20 || !Number.isInteger(columnas)) {
                alert('El número de columnas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
                columnas = parseInt(prompt('Introduce el número de columnas'));
            }
            return columnas;
        }

        getN_Minas(filas,columnas){
            let minas = parseInt(prompt('Introduce el número de minas'));
            while (minas < 2 || minas >= (filas * columnas) / 3 || minas >= (filas * columnas*2) / 3 || !Number.isInteger(minas)) {
                alert('El número de minas debe ser mayor o igual a 2 y menor o igual a ' + filas * columnas + ' y entero');
                minas = parseInt(prompt('Introduce el número de minas'));
            }
            return minas;
        }

        crearTablero(filas, columnas){
            let tablero = new Array(filas);
            for(let i = 0; i < filas; i++){
                tablero[i] = new Array(columnas);
            }
            return tablero;
        }
        nMinasPos(tablero,fila,columna){
            let nMinas = 0;
            for(let i = fila - 1; i <= fila + 1; i++){
                for(let j = columna - 1; j <= columna + 1; j++){
                    if(i >= 0 && i < this.nFilas && j >= 0 && j < this.nColumnas){
                        if(tablero[i][j] == mina){
                            nMinas++;
                        }
                    }
                }
            }
            return nMinas;
        }

        colocaRelleno(tablero){
            for (let i = 0; i < this.nFilas; i++) {
                for (let j = 0; j < this.nColumnas; j++) {
                    if (tablero[i][j] != mina) {
                        // Si no es una mina, colocar el número de minas alrededor
                        tablero[i][j] = this.nMinasPos(tablero, i, j);
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
        }

        colocaMinas(tablero,minas){
            /* colocar minas */
            for (let i = 0; i < minas; i++) {
                let fila = Math.floor(Math.random() * this.nFilas);
                let columna = Math.floor(Math.random() * this.nColumnas);
                if (tablero[fila][columna] != mina) {
                    tablero[fila][columna] = mina;
                } else {
                    i--;
                }
            }
            return tablero;
        }

        dibujarTableroWeb(tablero){
            let tabla = "<table>";
            for (let i = 0; i < this.nFilas; i++) {
                tabla += "<tr>";
                for (let j = 0; j < this.nColumnas; j++) {
                    tabla += "<td>" + tablero[i][j] + "</td>";
                }
                tabla += "</tr>";
            }
            tabla += "</table>";
            document.write(tabla);
        }
        iniciar(){
            this.nFilas = this.getN_Filas();
            this.nColumnas = this.getN_Columnas();
            this.nMinas = this.getN_Minas(this.nFilas,this.nColumnas);
            let tablero = this.crearTablero(this.nFilas,this.nColumnas);
            this.colocaMinas(tablero,this.minas);
            this.colocaRelleno(tablero);
            this.dibujarTableroWeb(tablero);
        }


}

let buscaminas = new Buscaminas();
buscaminas.iniciar();


