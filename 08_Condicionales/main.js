

// if(condindicion){
//     accion que se ejecuta si se cumple la condicion
// }else{
//     accion que se ejecuta si no se cumple la condicion
// }

let num1 = 10

if(num1 !== '10'){
    // console.log('Es verdadero')
}else{
    console.log('Es Falso')
}

//Comparar si un numero es par o impar
//------------> Modulo

// let numero = Number(prompt('Ingresa un numero'))

// if( numero % 2 === 0 ){
//     console.log(numero + ' ' + 'es par')
// }else if (numero % 2 === 1){
//     console.log(numero + ' ' + 'es impar')
// }else{
//     console.error('Error')
// }


//Challenge Licencia

// let edad = Number(prompt('Ingresa tu edad!'))

// if(edad >= 18 && edad <= 80){
//     console.log('Puedes conducir')
// }else if ( edad < 16 || edad > 80 ){
//     console.log('No puedes conducir')
// }else if (edad === 16 || edad === 17){
//     console.log('Puedes sacar tu permiso')
// }else{
//     console.error('Datos incorrectos-- Ingresa solo numeros')
// }

//Challenge
// Juego de piedra papel o tijera

//toUpperCase
//toLowerCase

let p1 = prompt('Elige algo')

let player1 = p1.toUpperCase()

console.log(p1)
console.log(player1)