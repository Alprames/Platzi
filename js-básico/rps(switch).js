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
    switch (play) {
        case o0, o2:
        case o1, o0:
        case o2, o1:
            console.log('Ganaste');
            break;
        case o0, o0:
        case o1, o1:
        case o2, o2:
            console.log('Empate');
            break;
        default: 
            console.log('Perdiste');
            break;
    }
    reset()
}