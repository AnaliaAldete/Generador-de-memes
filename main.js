const btnTexto= document.getElementById("btn-texto")
const btnImg=document.getElementById("btn-img")
const panelImg = document.getElementById("panel-img")
const panelTexto = document.getElementById("panel-texto")
const btnCambiarModo=document.getElementById("btn-cambiar-modo")
const body = document.body


btnImg.addEventListener('click', ()=> {
    panelImg.style.display = 'flex'
    panelTexto.style.display = 'none'
});

btnTexto.addEventListener('click', ()=> {
    panelImg.style.display = 'none'
    panelTexto.style.display = 'flex'
})

btnCambiarModo.addEventListener('click', ()=> {
    body.classList.toggle('modo-oscuro')
    body.classList.toggle('modo-claro')
})



const cambiarTextoModo = () => {
    let modoActual= btnCambiarModo.getAttribute("data-modo")

    if (modoActual === "oscuro") {
      btnCambiarModo.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo claro'
      btnCambiarModo.setAttribute("data-modo", "claro")
    } else {
      btnCambiarModo.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro'
      btnCambiarModo.setAttribute("data-modo", "oscuro")
    }
  }

 cambiarTextoModo() //  ¿porque tengo que llamarla?? si le borro esta linea la primera vez que apreto no se cambia el texto y despues si, lo que hace que me quede invertido

  btnCambiarModo.addEventListener('click', cambiarTextoModo)
  






