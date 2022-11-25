/* realizar todo el programa anterior orientado a objetos */


class Buscaminas{
    
    constructor(tablero,numFilas,numColumnas,minas){
        this.tablero=tablero;
        this.numFilas=numFilas;
        this.numColumnas=numColumnas;
        this.minas=minas;
    }
    
    /* get y set */
    get tablero(){
        return this._tablero;
    }

    set tablero(tablero){
        this._tablero=tablero;
    }

    get numFilas(){
        return this._numFilas;
    }

    set numFilas(numFilas){
        this._numFilas=numFilas;
    }

    get numColumnas(){
        return this._numColumnas;
    }

    set numColumnas(numColumnas){
        this._numColumnas=numColumnas;
    }

    get minas(){
        return this._minas;
    }

    set minas(minas){
        this._minas=minas;
    }

    /* funciones */

    // método para devolver la imagen de la mina
    getImagenMina(){
        return "<img src='mina.png' width='50px' height='50px'>";
    }

    // obtenemos el número de filas introducido por el usuario
    getN_Filas(){
        this.numFilas = parseInt(prompt('Introduce el número de filas'));
        while(this.numFilas < 2 || this.numFilas > 20 || !Number.isInteger(this.numFilas)) {
            alert('El número de filas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
            this.numFilas = parseInt(prompt('Introduce el número de filas'));
        }
        return this.numFilas;
    }

    // obtenemos el numero de columnas introducido por el usuario
    getN_Columnas(){
        this.numColumnas = parseInt(prompt('Introduce el número de columnas'));
        while(this.numColumnas < 2 || this.numColumnas > 20 || !Number.isInteger(this.numColumnas)) {
            alert('El número de columnas debe ser mayor o igual a 2 y menor o igual a 20 y entero');
            this.numColumnas = parseInt(prompt('Introduce el número de columnas'));
        }
        return this.numColumnas;
    }

    // obtenemos el numero de minas introducido por el usuario
    getN_Minas(){
        this.minas = parseInt(prompt('Introduce el número de minas'));
        while (this.minas < 2 || this.minas >= (this.numFilas * this.numColumnas) / 3 || !Number.isInteger(this.minas)) {
            alert('El número de minas debe ser mayor o igual a 2 y menor a la mitad de las casillas y entero');
            this.minas= parseInt(prompt('Introduce el número de minas'));
        }
        
        return this.minas;
    }

    // creamos el tablero bidimensional
    crearTablero(){
        let tablero = new Array(this.numFilas);
        for(let i=0; i<this.numFilas; i++){
            tablero[i] = new Array(this.numColumnas);
        }
        return tablero;
    }


    // colocamos las minas en el tablero
    colocarMinas(){
        let minasColocadas = 0;
        while(minasColocadas < this.minas){
            let fila = Math.floor(Math.random() * this.numFilas);
            let columna = Math.floor(Math.random() * this.numColumnas);
            if(this.tablero[fila][columna] != this.getImagenMina()){
                this.tablero[fila][columna] = this.getImagenMina();
                minasColocadas++;
            }
        }
    }


    // comprobamos cuantas minas hay alrededor de la casilla
    nMinasPos(tablero,fila,columna){
        let nMinas = 0;
        for(let i=fila-1; i<=fila+1; i++){
            for(let j=columna-1; j<=columna+1; j++){
                if(i>=0 && i<this.numFilas && j>=0 && j<this.numColumnas){
                    if(tablero[i][j] == this.getImagenMina()){
                        nMinas++;
                    }
                }
            }
        }
        return nMinas;
    }


    // colocamos el relleno en el tablero

    colocaRelleno(tablero,filas,columnas){
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (tablero[i][j] != this.getImagenMina()) {
                    // Si no es una mina, colocar el número de minas alrededor
                    tablero[i][j] = this.nMinasPos(tablero, i, j);
                    /* poner numeros de colores */
                    if (tablero[i][j] == 1) {
                        tablero[i][j] = "<font color='blue' size='7'>" + tablero[i][j] + "</font>";
                    }else if (tablero[i][j] == 2) {
                        tablero[i][j] = "<font color='green' size='7'>" + tablero[i][j] + "</font>";
                    }else if (tablero[i][j] == 3) {
                        tablero[i][j] = "<font color='red' size='7'>" + tablero[i][j] + "</font>";
                    }else if (tablero[i][j] == 4) {
                        tablero[i][j] = "<font color='purple' size='7'>" + tablero[i][j] + "</font>";
                    }else if (tablero[i][j] == 5) {
                        tablero[i][j] = "<font color='orange' size='7'>" + tablero[i][j] + "</font>";
                    }else if (tablero[i][j] == 6) {
                        tablero[i][j] = "<font color='black' size='7'>" + tablero[i][j] + "</font>";
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

    // dibujamos el tablero en el html
    dibujarTablero(){
        let tabla = "<table>";
        for (let i = 0; i < this.numFilas; i++) {
            tabla += "<tr>";
            for (let j = 0; j < this.numColumnas; j++) {
                tabla += "<td>" + this.tablero[i][j] + "</td>";
            }
            tabla += "</tr>";
        }
        tabla += "</table>";
        document.write(tabla);
    }


    // inicializamos el juego
    iniciar(){
        // al llamar a iniciar se crea el tablero
        // utilizamos los metodos setters para cambiar el valor de las propiedades
        this.numFilas = this.getN_Filas();
        this.numColumnas = this.getN_Columnas();
        this.minas = this.getN_Minas();
        this.tablero = this.crearTablero();
        this.colocarMinas();
        this.tablero = this.colocaRelleno(this.tablero,this.numFilas,this.numColumnas);
        this.dibujarTablero();
    }
}

let juego = new Buscaminas();
juego.iniciar();