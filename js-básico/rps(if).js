//Variables
var o0 = 'piedra';
var o1 = 'papel';
var o2 = 'tijera';

    //Azar
var ox = [o0,o1,o2];
var x;
function reset() {
    x = ox[Math.floor(Math.random()*ox.length)];
};
reset();
//Funcion 
function play(player, cpu) {
    console.log(`Tú jugaste ${player}, y CPU jugó ${cpu}`);
    if ((player === o0 && cpu === o2) || (player === o1 && cpu === o0) || (player === o2 && cpu === o1)) {
        console.log(`Ganaste con ${player}, hijueputa`);
    }
    else if (player == cpu) {
        console.log(`Empataron con ${player}, hijueputa`);
    }
    else {
        console.log(`Perdiste, no tenías que jugar ${player}, hijueputa`)
    }
    reset();
}

/* Para jugar este juego primero necesitas saber que cada opción (Piedra, papel o tijera) tiene un valor asignado de o0, o1 y o2 respectivamente. Teniendo esto en cuenta, para poder jugar contra la computadora solamente necesitas escribir debajo de esta línea la palabra play, abrir paréntesis, colocar tu opción, luego una coma y luego una x para después cerrar paréntesis. 

Como ejemplo, si yo quisiera jugar papel, escribiría
    play(o1,x)

y luego solo daría enter */