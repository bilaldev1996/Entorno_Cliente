/* Ejercicio 8.- Usando un “array de arrays” o array bidimensional, vamos a crear una aplicación que pida 5
notas para tres alumnos. Funcionaría así:
1) Nuestro array principal tendrá tres elementos de tipo array. Guardarán la información de los alumnos.
2) Cada una de estas posiciones será un array de 6 elementos.
3) En la posición 0 guardaremos el nombre de cada alumno que será proporcionado por el usuario.
4) Las posiciones de la 1 a la 5 guardarán las notas de cada alumno, también introducidas por el usuario.
El programa pide notas en el formato “Introduce nota x para el alumno y:”
5) Por último, usando el método document.write() mostrará en el documento web las 5 notas de
cada alumno en formato */

let alumnos = new Array(3)
let notas = ''

let alumno1 = prompt('Introduce alumno 1')
let alumno2 = prompt('Introduce alumno 2')
let alumno3 = prompt('Introduce alumno 3')

for(let i=0;i<3;i++){
    alumnos[i] = new Array(6)
}

alumnos[0][0] = alumno1
alumnos[1][0] = alumno2
alumnos[2][0] = alumno3


for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 5; j++) {
        notas = prompt(`Introduce nota ${j+1} para el alumno ${i+1}:`)
            alumnos[i][j] = Number(notas)
    }
}


