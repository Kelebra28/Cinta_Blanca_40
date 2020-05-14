//Inputs
let preguntaNombre = document.getElementById('preguntaNombre')
let preguntaDireccion = document.getElementById('preguntaDireccion')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
//Card-- respuetas
let textoNombre = document.getElementById('textoNombre')
let textoDireccion = document.getElementById('textoDireccion')
let textoTelefono = document.getElementById('textoTelefono')
let textoPizza = document.getElementById('textoPizza')
//Boton
let boton = document.getElementById('botonOrdenar')
//Card
let card = document.getElementById('card')



const ordenar = () => {

    textoNombre.innerHTML = 'Nombre: ' + preguntaNombre.value
    textoDireccion.innerHTML = 'Direccion : ' + preguntaDireccion.value
    textoTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
    textoPizza.innerHTML =  'Piña o no: ' +  preguntaPizza.value

    card.classList.remove('none')

} 

botonOrdenar.addEventListener('click', ordenar)