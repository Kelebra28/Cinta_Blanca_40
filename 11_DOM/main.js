// document.getElementById() es para mandar un elemente de html por un ID
let titulo = document.getElementById('titulo') 
let parrafo = document.getElementById('parrafo')
let boton = document.getElementById('boton')
let texto = document.getElementById('texto')
let respuesta = document.getElementById('respuesta')



const cambio = () => {

    //innerHTML pinta el valor en html
    titulo.innerHTML = 'Titulo Cambiado'
    parrafo.innerHTML = 'Parrafo cambiado'
    //.value me permite accedder al valor de mi input
    respuesta.innerHTML = texto.value 

}

// addEventListener es un echuchador de enventos
// las etiquedas tienen eventos propios
boton.addEventListener('click', cambio)
