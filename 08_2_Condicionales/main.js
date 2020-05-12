
//Estructrura base

// if(condicion){
//     Bloque de codigo si la condicion se cumple
// }else{
//     Bloque de codigo si no se cumple la condicion
// }

let num = 15

// if(num === 10){
//     console.log('Es verdad')
// }else{
//     console.log('Es falso')
// }

//Investigar que es el MODULO
// Decir si un numero es par o impar

// let pregunta = Number(prompt('Ingrese su numero'))


// if(pregunta % 2 === 0){
//     console.log(pregunta + ' ' + 'Es par')
// }else if(pregunta % 2 === 1){
//     console.log(pregunta + ' ' + 'Es impar')
// }else{
//     console.error('Datos incorrectos')
// }

// let edad = Number(prompt('Ingresa tu edad'))

// if(edad >= 18 && edad <= 80){
//     console.log('Puedes conducir')
// }else if(edad === 16 || edad === 17){
//     console.log('Puedes sacar tu permiso')
// }else if (edad > 0 || edad < 16 || edad > 81  ){
//     console.log('No puedes conducir')
// }else {
//     console.error('Ingresa los datos de nuevo')
// }

// Hacer el juego de piedra papel o Tijera
// Jugador 1 y jugador 2


let player1 = prompt('Elegie piedra papel o tijera').toLowerCase()
let player2 = prompt('Elegie piedra papel o tijera').toLowerCase()


//pasar a minusculas
//.toLoweCase()

//pasar a mayusculas
//.toUpperCase()


if(player1 === player2){
    console.log('Empate')
}else if(player1 === 'piedra' && player2 === 'tijera' || player1 === 'papel' && player2 === 'piedra' || player1 === 'tijera' && player2 === 'papel'){
    console.log("Gana player 1")
}else if(player2 === 'piedra' && player1 === 'tijera' || player2 === 'papel' && player1 === 'piedra' || player2 === 'tijera' && player1 === 'papel'){
    console.log('gana player2')
}else{
    console.error('Datos incorrectos')
}