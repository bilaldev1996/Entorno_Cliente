'use strict';

let regUsuario = new RegExp('[a-z]+[0-9]+')
let regPass = new RegExp('[A-Z]*[a-z]*[0-9].+\W*')

let usuario = prompt('Introduce nombre de usuario')

let password = prompt('Introduce su contraseña')

if(!usuario || !password){
    document.write('La aplicación ha finalizado\n')
}


if(regUsuario.test(usuario)){
    document.write('Se ha almacenado correctamente la información de usuario');
}

if(regPass.test(password)){
    document.write('Se ha almacenado correctamente la contraseña');
}else{
    document.write('La contraseña introducida no es correcta');
}




