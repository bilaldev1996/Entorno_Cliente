let dni = prompt('Introduce su número de DNI')

if(dni == null || dni==0){
    alert('Se ha cancelado o se ha introducido un 0')
}else{
    let letraDni = dni.substring(8,9)
    let numeroDni = parseInt(dni.substring(0,8))

    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    let letraCorrecta = letras[numeroDni%23]


    const reg = /^\d{8}[a-z A-Z]$/

    if(reg.test(dni) === true){
        
        if(letraDni.toUpperCase() !== letraCorrecta){
            document.write('DNI introducido incorrecto');
        }else{
            document.write('DNI introducido correcto');
        }
    }else{
        document.write('Formato no válido');
    }
}


