/* Ejercicio 3.- Sigamos ampliando. Añade el código para crear un array con tantos objetos Coche como
quiera el usuario. Funcionará así:
o Creamos un objeto Coche.
o Le pedimos al usuario los datos.
o Con estos datos completamos el objeto.
o Lo introducimos en un array.
o Preguntamos al usuario si quiere seguir introduciendo datos.
o De no ser así mostraremos el resultado
Muestra los resultados por consola. Y ya que estamos... mediante una tabla por pantalla. */

class Coche{
    constructor(marca, modelo, color, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }

    getMarca(){
        return this.marca;
    }

    getModelo(){
        return this.modelo;
    }

    getColor(){
        return this.color;
    }

    getPrecio(){
        return this.precio;
    }

    muestraCoche(){
        return "Marca: " + this.marca + " Modelo: " + this.modelo + " Color: " + this.color + " Precio: " + this.precio;
    }
}

var coches = new Array();

var marca = prompt("Introduce la marca del coche");
var modelo = prompt("Introduce el modelo del coche");
var color = prompt("Introduce el color del coche");
var precio = prompt("Introduce el precio del coche");

var coche = new Coche(marca, modelo, color, precio);

coches.push(coche);

var seguir = prompt("¿Quieres seguir introduciendo datos?");

while(seguir == "si"){
    var marca = prompt("Introduce la marca del coche");
    var modelo = prompt("Introduce el modelo del coche");
    var color = prompt("Introduce el color del coche");
    var precio = prompt("Introduce el precio del coche");

    var coche = new Coche(marca, modelo, color, precio);

    coches.push(coche);

    var seguir = prompt("¿Quieres seguir introduciendo datos?");
}

for(var i = 0; i < coches.length; i++){
    console.log(coches[i].muestraCoche());
}

/* imprimir en una tabla */
var tabla = document.createElement("table");
var tr = document.createElement("tr");
var th = document.createElement("th");


th.innerHTML = "Marca";
tr.appendChild(th);
th = document.createElement("th");
th.innerHTML = "Modelo";
tr.appendChild(th);
th = document.createElement("th");
th.innerHTML = "Color";
tr.appendChild(th);
th = document.createElement("th");
th.innerHTML = "Precio";
tr.appendChild(th);
tabla.appendChild(tr);

for(var i = 0; i < coches.length; i++){
    tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = coches[i].getMarca();
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = coches[i].getModelo();
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = coches[i].getColor();
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = coches[i].getPrecio();
    tr.appendChild(td);
    tabla.appendChild(tr);
}


document.body.appendChild(tabla);