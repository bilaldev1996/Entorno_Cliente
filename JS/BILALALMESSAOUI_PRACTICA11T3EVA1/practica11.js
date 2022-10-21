/* Realizar una aplicación que muestre en diferentes cuadros de diálogo la solución a los
    ejercicios 13, 14, 15, 17. -->
    <!-- Cada ventana deberá mostrar el número de ejercicio cuya expresión vamos a
    comprobar.
    ✓ El usuario introducirá una cadena de caracteres e irá probando el funcionamiento de
    la expresión regular correspondiente. -->
    <!-- Solo pasará al siguiente ejercicio cuando la cadena introducida coincida con la
    expresión regular o cuando pulse Cancelar.  */

/* 13.Realiza una aplicación que solicite un nombre de usuario exigiendo que únicamente pueda
estar compuesto por letras minúsculas, mayúsculas y números. */

let reg1 = /^[A-Za-z0-9]+$/
let nombreUsuario = ''

do{
    nombreUsuario = prompt('13 --- Introduce tu nombre de usuario')
    if(nombreUsuario == null) break

}while(!reg1.test(nombreUsuario))

/* 14 Realiza una expresión regular para validar un DNI tanto español como extranjero, */

let reg2 = /^[KLXYZklxyz]?\d{5,8}[TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke]$/
let dni = '';

do{
    dni = prompt('14 -- Introduce tu dni')
    if(dni == null) break
}while(!reg2.test(dni))

/* 15. Verificar codigo postal español --> 01000 al 52999. */

let reg3 = /(^[1-4][0-9]{4}$)|(^[5][0-2][0-9]{3}$)|(^[0][1-9][0-9]{3}$)/
let codigoPostal = 0;

do{
    codigoPostal = prompt('15 --- Introduce tu codigo postal')
    if(codigoPostal == null) break
}while(!reg3.test(codigoPostal))

/* 16. Verificar Ip */

let reg4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

let ip = 0;

do{
    ip = prompt('16 --- Introduce tu direccion ip')
    if(ip == null ) break

}while(!reg4.test(ip))
