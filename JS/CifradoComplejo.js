'use strict';


let texto='Hola Caracola carambola'
let clave = 22345;


let myArr = String(clave).split("").map((clave)=>{
    return Number(clave)
})


let copia = [];
let array3 = [];
let array4 = [];

function añadir(copia){
    let array = []
    for(let i=0; i<texto.length; i++){
        array = myArr.concat(copia);
        array[i]
    }
    return array
}

let arrCompleto = []

for (let i = 0; i < texto.length; i++) {
    //console.log(texto.charCodeAt(i)+2);
    if(myArr[i] != undefined){
        copia.push(myArr[i]);
        //console.log(copia);
    }
    /* if(myArr[i] == undefined) {
        array3 = myArr.concat(copia);
    }
    
    if(array3[i] == undefined) {
        array4 = array3.concat(copia);
    } */

    arrCompleto = (añadir(copia));
    //console.log(String.fromCharCode(texto.charCodeAt(i)+array3[i]));
    
}

console.log(texto.length);
console.log(myArr.length);

for (let i = 0; i < texto.length; i++){
    console.log(String.fromCharCode(texto.charCodeAt(i)+arrCompleto[i]));
}

