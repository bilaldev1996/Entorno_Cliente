/* Ejercicio 4.- Pares e impares
Realicemos una variante del ejercicio de paridad usando "clases" y objetos para averiguar si un número
es par o impar (y alguna cosita más). Usaremos funciones anónimas dentro del constructor. Tendremos:
✓ Un constructor o clase llamado ParImpar que recibe como argumento el número.
✓ Una propiedad x que recogerá dicho argumento.
✓ Un método error() que muestre por consola “Dato erróneo” (puedes usar console.error) si
no se ha recibido un número o "Dato correcto" en caso contrario.
✓ Un método llamado resuelve() que, mediante un cuadro de diálogo, devuelva la palabra “par” si
el número es par e “impar” en caso contrario. Usaremos el operador ternario (condición ? true :
false ).
✓ Un método es() que devuelva la cadena de caracteres "par" o "impar". usaremos el operador
flecha.
✓ Un método muestraRandom() que escriba en el documento 10 números aleatorios del 1 al
10000 y que a su lado se diga si es par o impar gracias al método anterior.
o Haz un fichero externo script.js usando un constructor ParImpar() y otro scriptClass.js
usando clases.
o Prueba el funcionamiento con datos erróneos y correctos usando cada script. */

class ParImpar{
    constructor(x){
        this.x = x;
    }

    error(){
        if (isNaN(this.x)){
            console.error("Dato erróneo");
        }else{
            console.log("Dato correcto");
        }
    }

    resuelve = function(){
        return this.x % 2 == 0 ? alert('par') : alert('impar');
    }

    es = (x) => x%2 == 0 ? 'Par' : 'Impar';
    
    muestraRandom = function(){
        for(let i=0; i<10; i++){
            let numero = Math.floor(Math.random() * 10000);
            document.write(numero + ' ' + this.es(numero) + '<br>');
        }
    }


}

let parImpar = new ParImpar(5);

if(isNaN(parImpar.x)){
    parImpar.error();
}else{
    parImpar.resuelve();
    parImpar.muestraRandom();
}


