//Inputs
let preguntaNombre = document.getElementById('preguntaNombre')
let preguntaDireccion = document.getElementById('preguntaDireccion')
let preguntaTelefono = document.getElementById('preguntaTelefono')
let preguntaPizza = document.getElementById('preguntaPizza')
//Card-- respuetas
let textoNombre = document.getElementById('textoNombre')
let textoDireccion = document.getElementById('textoDireccion')
let textoTelefono = document.getElementById('textoTelefono')

//Boton
let boton = document.getElementById('botonOrdenar')
//Card
let card = document.getElementById('card')
//Imagenes
let peperoni = document.getElementById('peperoni')
let hawaiana = document.getElementById('hawaiana')
let incorrecto = document.getElementById('incorrecto')



const ordenar = () => {



    textoNombre.innerHTML = 'Nombre: ' + preguntaNombre.value
    textoDireccion.innerHTML = 'Direccion : ' + preguntaDireccion.value
    textoTelefono.innerHTML = 'Telefono: ' + preguntaTelefono.value
    
    // Aparece la card
    card.classList.remove('none')

    let pizzaReal = preguntaPizza.value
    let compararPizza = pizzaReal.toLowerCase()


    if(compararPizza === 'si'){
        hawaiana.classList.remove('none')
        peperoni.classList.add('none')
        incorrecto.classList.add('none')
    }else if(compararPizza === 'no'){
        peperoni.classList.remove('none')
        hawaiana.classList.add('none')
        incorrecto.classList.add('none')
    }else{
       incorrecto.classList.remove('none')
       hawaiana.classList.add('none')
       peperoni.classList.add('none')
    }



} 

botonOrdenar.addEventListener('click', ordenar)