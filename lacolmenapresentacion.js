var grupo = ['Abraham', 'Paola', 'Edward', 'Juan Carlos', 'Angelo', 'Antonio'];
function presenta(músico) {
    console.log(`Hola, me llamo ${músico} y soy integrante de La Colmena. Soy ${puesto} del grupo.`)
};
var puesto;
function listado() {
    for (var i = 0; i < grupo.length;) {
        presenta(grupo[i]);
    if (i == 0) {
        puesto = 'el guitarrista';
    } else if (i == 1) {
        puesto = 'la vocalista';
    } else if (i == 2) {
        puesto = 'el bajista';
    } else if (i == 3) {
        puesto = 'el cantante principal';
    } else if (i == 4) {
        puesto = 'el primer percusionista';
    } else if (i == 5) {
        puesto = 'el segundo percusionista';
    } 
    i++
    }
}
