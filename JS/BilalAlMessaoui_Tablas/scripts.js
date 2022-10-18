'use strict';

let body = document.getElementsByTagName('body')[0]; 
let celda = Number(prompt('Introduce numero de celdas'))
let columna = Number(prompt('Introduce numero de columnas'))

let tabla = document.createElement('table');
let tbody = document.createElement('tbody');

for (let i = 0; i < celda; i++) {
    let tr = document.createElement('tr');

    for (let j = 0; j < columna; j++) {
        let td = document.createElement('td');

        /* let textoCelda = document.createTextNode('celda en la hilera'+i+", columna "+j)
        
        td.appendChild(textoCelda); */
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

    tabla.appendChild(tbody);

    body.appendChild(tabla);

    tabla.setAttribute('border', '1px solid black');


