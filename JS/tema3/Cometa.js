
class Cometa{
    constructor(diametro,temperatura,nombre){
        this.diametro = diametro;
        this.temperatura = temperatura;
        this.nombre = nombre;
    }

    getRadio(){
        return this.diametro/2;
    }

    getTemperatura(){
        /* en fahrenheit */
        return this.temperatura * 1,8 + 32;
    }
}

Cometa.prototype = {
    getDef(){
        return 'Un cometa es una bola de hielo y polvo que orbita alrededor del Sol';
    }
}

class Cometa1 extends Cometa.prototype {
    constructor(diametro,temperatura,nombre){
        super(diametro,temperatura,nombre);
    }
}





