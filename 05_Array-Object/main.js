

//Array o arreglo
            //   0         1        2         3    
var colores = ["azul", "rojo", "amarillo", "verde"]
// console.log(colores)
// console.log(colores[0])
// console.log(colores[4])

colores[4] = "Morado"
// console.log(colores)
// console.log(colores[4])
// console.log(colores[6])
//push ----> Suma un elemento al final de arreglo
colores.push("rosa")
colores.push("cafe")
colores.push()
// console.log(colores)


//pop -----> Borra el ultimo elemento

colores.pop()
// console.log(colores)

//splice ----- borra elementos especificos

colores.splice(4, 0) 
// console.log(colores)

//----- cosas nuevas
//----------- pocision , elemento a borrar, sustituirlo
colores.splice(2, 1 , "cafe")
// console.log(colores)


//Objetos - Object

var persona = {
    nombre : "Ricardoñ",
    edad : "22",
    telefono : "5512316846354",
    direcion : "CDMX",
    musica : ["rock", "regeton", "salsa", "k-pop"],
    peliculas : {
        accion : ["MI", "Ronnig", "DdM"],
        drama : ["titanic", "Match point"],
        romcom : ["la propuesta", "Yo antes de ti", "one day", "cassanovias"],
        terror : {
            gore : "Destino final",
            slasher : "halloween",
            vampiros : ["crepusculo" , "VH"]
        }
    }
}


console.log(persona.nombre)
console.log(persona.musica[3])
console.log(persona.peliculas.accion[2])
console.log(persona.peliculas.terror.vampiros[0])


