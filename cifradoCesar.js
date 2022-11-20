'use strict';


let texto = ''
let clave = 0

do{
    texto = prompt('Introduce un texto');
    if(texto == null || texto == ''){
        texto = prompt('Introduce un texto válido');
    }
    clave = parseInt(prompt('Introduce clave'));
}while(texto == '')


if(clave >=1 && clave <=100){

    for (let i = 0; i < texto.length; i++) {
        //console.log(texto.charCodeAt(i)+2);
        document.write(String.fromCharCode(texto.charCodeAt(i)+clave).toUpperCase());
    }
}else{
    document.write('Clave no válida')
}


