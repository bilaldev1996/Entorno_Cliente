'use strict';

/* La clave introducida por el usuario debe ser un número válido que no sea inferior a 1
ni superior a (por ejemplo) 1000000.
✓ El programa pedirá al usuario la clave hasta que sea un número válido o bien hasta
que pulse Cancelar.
✓ Acto seguido el usuario introduce el texto a cifrar.
✓ En ningún caso se admitiría una cadena vacía (pulsar Aceptar sin introducir nada).
Recuerda que JavaScript asume que la cadena vacía es false. */

let clave = prompt('Introduce la clave');
let texto = prompt('Introduce el texto a cifrar');

/* Validar clave */
while (clave == '' || clave == null || isNaN(clave) || clave < 1 || clave > 1000000) {
    clave = prompt('Introduce la clave');
}

/* Validar datos */
while (texto == '' || texto == null) {
    texto = prompt('Introduce el texto a cifrar');
}

/* cifrar frase mediante unicode */

let cifrado = '';
for (let i = 0; i < texto.length; i++) {
    cifrado += String.fromCharCode(texto.charCodeAt(i) + Number(clave[i % clave.length]));
    //console.log(String.fromCharCode(texto.charCodeAt(i) + Number(clave[i % clave.length])));
    console.log(clave[i--]);
}

console.log(cifrado);


