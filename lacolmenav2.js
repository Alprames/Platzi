var grupo = ['Abraham', 'Paola', 'Edward', 'Juan Carlos', 'Angelo', 'Antonio'];
function presenta(músico) {
    console.log(`Hola, me llamo ${músico} y soy integrante de La Colmena. Soy ${puesto} del grupo.`)
};
var puesto = ['el guitarrista', 'la vocalista', 'el bajista', 'el cantante principal', 'el primer percusionista', 'el segundo percusionista'];
function listado() {
    for (var músico of grupo){
        presenta(músico);
    }
}