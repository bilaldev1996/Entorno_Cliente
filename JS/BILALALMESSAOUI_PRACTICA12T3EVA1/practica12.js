/* Realizar una aplicación que muestre en diferentes cuadros de diálogo la solución a los
ejercicios 22, 23, 24, 25. */

/* 22 . Valida un cuadro de diálogo donde se solicite al usuario su nombre y apellidos, todo ello en
el mismo cuadro. */

let reg1 = /^([A-zÁÉÍÓÚáéíóúÑñ]+\s?[A-zÁÉÍÓÚáéíóúÑñ]+\s[A-zÁÉÍÓÚáéíóúÑñ]+)$/
let nombreCompleto = ''

do{

    nombreCompleto = prompt('22 - Introduce nombre y apellidos')
    if(nombreCompleto == null) break

}while(!reg1.test(nombreCompleto))

/* 23 - Realiza una aplicación web que pida al usuario una fecha con el formato dd/mm/aaaa. De no
ser escrita correctamente se volverá a solicitar. */

let reg2 = /^(?:3[01]|[12][0-9]|0?[1-9])([\/])(0?[1-9]|1[1-2])\1\d{4}$/
let fecha = ''

do{

    fecha = prompt('23 - Introduce fecha con el formato dd/mm/aaaa')
    if(fecha == null) break

}while(!reg2.test(fecha))

/* 24 - Realiza una aplicación web que pida al usuario un email. De no ser escrito correctamente se
volverá a solicitar. */

let reg3 = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
let email = ''

do{

    email = prompt('24 - Introduce tu email')
    if(email == null) break

}while(!reg3.test(email))

/* 25 - Realiza una expresión regular que valide una URL. */

let reg4 = /(^https?:\/\/)?[\w\-]+(\.[\w\-]+)+?.*$/
let url = ''

do{

    url = prompt('25 - Introduce tu url')
    if(url == null) break

}while(!reg4.test(url))

