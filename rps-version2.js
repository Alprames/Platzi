var a = 'piedra'
var b = 'papel'
var c = 'tijera'

var all = [a, b, c];
var x;
function reset() {
    x = all[Math.floor(Math.random() * all.length)];
}
reset();

function play(you,cpu) {
    console.log(`Ve, tú tiraste ${you}, y la computadora lanzó ${cpu}, por lo tanto...`);
    if ((you === a && cpu === c)||(you === b && cpu === a)||(you === c && cpu === b)) {
        console.log(`... ganaste lanzando ${you}, eres un genio.`);
    } else if (you == cpu) {
        console.log(`...¿ves?, ambos lanzaron ${you}, empataron.`);
    } else {
        console.log(`...no debiste lanzar ${you}, ahora perdiste weje.`);
    }
    reset();
}