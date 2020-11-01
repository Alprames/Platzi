var yo = {
    nombre: 'Abraham',
    edad: 18,
    estatura: 1.71,
    cedula: 30378901,
    status: 'soltero',
    mePresento: function(){
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años de edad y mido ${this.estatura}m, estoy ${this.status} y mi número de cédula es ${this.cedula}`);
    }
};