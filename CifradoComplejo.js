'use strict';


let texto='Hola Caracola carambola'
let clave = 22345;




for (let i = 0; i < texto.length; i++){
    console.log(String.fromCharCode(texto.charCodeAt(i)+ Number(clave[i % clave.length])));
}

console.log(arrCompleto);

