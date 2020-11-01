var miGuitarra = {
    marca: 'Gibson',
    modelo: 'Les Paul',
    año: 1959,
    presentacion: function(){
        console.log(`Es una guitarra marca ${this.marca}, modelo ${this.modelo} del año ${this.año}. En excelentes condiciones`);
    }
};

//constructora
function guitar(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
var nuevaGuitarra = new guitar('Fender', 'Stratocaster', 1980);

/*Reto 
    Generar función constructora en base a un loop para poder crear una lista de 30 carros que se construyan solos*/

//Ejemplo 
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }
