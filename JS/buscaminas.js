/* Crear una aplicación web que muestre un mapa del popular juego Buscaminas.
Entrada:
✓ Se pedirá al usuario el tamaño del tablero y las minas a colocar. La validación de
datos consistirá en:
o La entrada de datos serán números enteros superiores o iguales a 2.
o Las filas y/o columnas no podrán ser superiores a 20.
o El número de minas nunca podrá ser igual o superior a columnas x filas /2. */

let filas = parseInt(prompt('Introduce numero de filas.'))
let columnas = parseInt(prompt('Introduce numero de columnas'))

while ((filas < 2) | (columnas < 2) | (filas > 20) | (columnas > 20)) {
    alert('Datos incorrectos, vuelve a intentarlo')
    filas = parseInt(prompt('Introduce numero de filas.'))
    columnas = parseInt(prompt('Introduce numero de columnas.'))
}


/* Una función dibujaTablero() que dibuje el tablero en una página web. Recibe como
argumentos las filas y columnas. Rellenará el tablero de ceros o falses. */

/* function pintarTablero(numFilas, numColumnas){

    document.write('<table>')
    for(let f=0; f<numFilas; f++){
        document.write('<tr>')
        for(let c=0; c<numColumnas; c++){
            document.write(`<td>${1}</td>`)
        }
        document.write('</tr>')
    }
    document.write('<table>')
} */


function dibujaTablero(filas,columnas){
    let tablero = new Array(filas)
    document.write('<table>')
    for (let i = 0; i < filas; i++) {
        document.write('<tr>')
        tablero[i] = new Array(columnas)
        for (let j = 0; j < columnas; j++) {
            document.write(`<td></td>`)
        }
        document.write('</tr>')
    }
    document.write('<table>')
    //console.log(tablero);
    return tablero
}


//console.log(tablero);

/* Una función insertaMinas() a la que le pasemos el tablero buscaminas (sería un
array de dos dimensiones) y coloque en él de manera aleatoria las minas. */
let minas = Number(prompt('Introduce minas'));

while (minas>Math.floor((columnas*filas/2))) {
    alert('Datos incorrectos, vuelve a intentarlo')
    minas = Number(prompt('Introduce minas'))
    
}

function insertaMinas(tablero){
    for (let i = 0; i < tablero.length; i++) {
        let fila = Math.floor(Math.random() * minas)
        let columna = Math.floor(Math.random() * minas);
        for (let j = 0; j < tablero.length; j++) {
            tablero[fila][columna] = 'Mina';
            tablero[i][j] = ''
        }
    }
    return tablero
}

let tablero = dibujaTablero(columnas,filas)
let tableroMinas = insertaMinas(tablero);

document.write('<table>')
for (let i = 0; i < filas; i++) {
    document.write('<tr>')
    for (let j = 0; j < columnas; j++) {
        document.write(`<td>${tableroMinas[i][j]}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')

