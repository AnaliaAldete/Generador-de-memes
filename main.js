const body = document.body
//PANELES
const btnTexto = document.getElementById("btn-texto")
const btnImg = document.getElementById("btn-img")
const panelImg = document.getElementById("panel-img")
const panelTexto = document.getElementById("panel-texto")
const btnCambiarModo = document.getElementById("btn-cambiar-modo")
//MEME
const containerMeme = document.getElementById("container-meme")
const imgMeme = document.getElementById("img-meme")
const btnDescargarMeme = document.getElementById("boton-descargar-meme")

// ELEMENTOS DE PANEL IMG
const inputUrl = document.getElementById("input-url")
const inputCargarImg = document.getElementById("input-cargar-img")
const inputFondo = document.getElementById("input-fondo")
const selectTipoFondo = document.getElementById("select-tipo-fondo")

//Filtros
const inputBrillo = document.getElementById("input-brillo")
const inputOpacidad = document.getElementById("input-opacidad")
const inputContraste = document.getElementById("input-contraste")
const inputDesenfoque = document.getElementById("input-desenfoque")
const inputEscalaGrises = document.getElementById("input-escala-grises")
const inputSepia = document.getElementById("input-sepia")
const inputHue = document.getElementById("input-hue")
const inputSaturado = document.getElementById("input-saturado")
const inputNegativo = document.getElementById("input-negativo")
const btnFiltros = document.getElementById("btn-filtros")

//ELEMENTOS DE PANEL TEXTO
const inputTextoArriba = document.getElementById("input-texto-arriba")
const inputTextoAbajo = document.getElementById("input-texto-abajo")
const textoSuperior = document.getElementById("texto-superior")
const textoInferior = document.getElementById("texto-inferior")
const spanColorFondoImg = document.getElementById("span-color-fondo-img")
const inputQuitarTextoSuperior = document.getElementById("quitar-texto-superior")
const inputQuitarTextoInferior = document.getElementById("quitar-texto-inferior")
const selectFuente = document.getElementById("seleccionar-fuente")
const inputTamanioLetra = document.getElementById("input-tamanio-letra")
const btnAlineacionIzquierda = document.getElementById("alineacion-izquierda")
const btnAlineacionCentro = document.getElementById("alineacion-centro")
const btnAlineacionDerecha = document.getElementById("alineacion-derecha")
const inputColorLetra = document.getElementById("input-color-letra")
const spanColorLetra = document.getElementById("span-color-letra")
const inputColorFondo = document.getElementById("input-color-fondo")
const spanColorFondoTexto = document.getElementById("span-color-fondo-texto")
const inputFondoTransparente = document.getElementById("input-fondo-transparente")
const inputEspaciado = document.getElementById("input-espaciado")
const selectInterlineado = document.getElementById("seleccionar-interlineado")
const btnSinContorno = document.getElementById("btn-sin-contorno")
const btnContornoClaro = document.getElementById("btn-contorno-claro")
const btnContornoOscuro = document.getElementById("btn-contorno-oscuro")

// CAMBIAR PANEL
btnImg.addEventListener('click', () => {
  panelImg.style.display = 'flex'
  panelTexto.style.display = 'none'

});

btnTexto.addEventListener('click', () => {
  panelImg.style.display = 'none'
  panelTexto.style.display = 'flex'
})

// CAMBIAR MODO Y TEXTO DEL BOTON
btnCambiarModo.addEventListener('click', () => {
  body.classList.toggle('modo-oscuro')
  body.classList.toggle('modo-claro')
})

const cambiarTextoModo = () => {
  let modoActual = btnCambiarModo.getAttribute("data-modo")

  if (modoActual === "oscuro") {
    btnCambiarModo.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo claro'
    btnCambiarModo.setAttribute("data-modo", "claro")

  } else {
    btnCambiarModo.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Modo oscuro'
    btnCambiarModo.setAttribute("data-modo", "oscuro")
  }
}

cambiarTextoModo() //llamo a la funcion sino me aparece invertido el texto en cada modo

btnCambiarModo.addEventListener('click', cambiarTextoModo)

//AJUSTAR EL ALTO DEL DIV SEGUN LA PANTALLA

window.visualViewport.addEventListener("resize", () => {
  if (window.visualViewport.width < 600) {
    containerMeme.style.height = `${window.visualViewport.width - 30}px`
    containerMeme.style.width = `${window.visualViewport.width - 30}px`
  } else {
    containerMeme.style.height = "350px"
    containerMeme.style.width = "350px"
  }
})

if (window.visualViewport.width < 600) {
  containerMeme.style.height = `${window.visualViewport.width - 30}px`
  containerMeme.style.width = `${window.visualViewport.width - 30}px`
} else {
  containerMeme.style.height = "350px"
  containerMeme.style.width = "350px"
}

// INICIO PANEL IMAGEN

// CARGA IMAGEN DEL MEME CON LA URL
inputUrl.addEventListener('input', () => {
  imgMeme.style.background = `url(${inputUrl.value}) center/cover no-repeat`
})

//CARGA IMG DE LA COMPU

inputCargarImg.addEventListener("change", (e) => {
  const archivo = e.target.files[0]
  if (archivo) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imgMeme.style.backgroundImage = `url(${e.target.result})`
    }
    reader.readAsDataURL(archivo)
  }
})

//DESCARGAR MEME

btnDescargarMeme.addEventListener("click", () => {
  domtoimage.toBlob(containerMeme).then((blob) => {
    window.saveAs(blob, "meme.png")
  })
})

//CAMBIA COLOR FONDO DEL MEME y actualiza el span con el color
inputFondo.addEventListener('input', () => {
  let colorFondo = inputFondo.value
  imgMeme.style.backgroundColor = colorFondo
  spanColorFondoImg.innerText = colorFondo
})

//CAMBIA TIPO DE FONDO DEL MEME
selectTipoFondo.addEventListener('change', () => {
  imgMeme.style.backgroundBlendMode = selectTipoFondo.value
})

// CAMBIA FILTROS

const aplicarFiltros = () => {
  imgMeme.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}) contrast(${inputContraste.value}%) blur(${inputDesenfoque.value}px) grayscale(${inputEscalaGrises.value}%) sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturado.value}%) invert(${inputNegativo.value})`
}

inputBrillo.addEventListener("input", aplicarFiltros);
inputOpacidad.addEventListener("input", aplicarFiltros);
inputContraste.addEventListener("input", aplicarFiltros);
inputDesenfoque.addEventListener("input", aplicarFiltros);
inputEscalaGrises.addEventListener("input", aplicarFiltros);
inputSepia.addEventListener("input", aplicarFiltros);
inputHue.addEventListener("input", aplicarFiltros);
inputSaturado.addEventListener("input", aplicarFiltros);
inputNegativo.addEventListener("input", aplicarFiltros);

//REESTABLECER FILTROS
const reestablecerFiltros = () => {
  inputBrillo.value = 1
  inputOpacidad.value = 1
  inputContraste.value = 100
  inputDesenfoque.value = 0
  inputEscalaGrises.value = 0
  inputSepia.value = 0
  inputHue.value = 0
  inputSaturado.value = 100
  inputNegativo.value = 0
aplicarFiltros()
}

btnFiltros.addEventListener("click", reestablecerFiltros)

//FIN PANEL IMAGEN

// INICIO PANEL TEXTO

//ACTUALIZAR TEXTOS DE PARRAFOS

const actualizarTexto = () => {
  textoSuperior.innerText = inputTextoArriba.value
  textoInferior.innerText = inputTextoAbajo.value
}

inputTextoArriba.addEventListener("input", actualizarTexto)
inputTextoAbajo.addEventListener("input", actualizarTexto)

//QUITAR PARRAFOS

const quitarParrafos = () => {
  if (inputQuitarTextoSuperior.checked) {
    textoSuperior.style.display = 'none'
  } else {
    textoSuperior.style.display = 'block'
  }
  if (inputQuitarTextoInferior.checked) {
    textoInferior.style.display = 'none'
  } else {
    textoInferior.style.display = 'block'
  }
}

inputQuitarTextoSuperior.addEventListener("change", quitarParrafos)
inputQuitarTextoInferior.addEventListener("change", quitarParrafos)

//CAMBIAR FUENTE DE PARRAFOS

selectFuente.addEventListener('change', () => {
  let fuente = selectFuente.value
  textoSuperior.style.fontFamily = fuente
  textoInferior.style.fontFamily = fuente
})

//CAMBIAR TAMAÑO LETRA DE PARRAFOS

inputTamanioLetra.addEventListener("change", () => {
  textoSuperior.style.fontSize = `${inputTamanioLetra.value}px`
  //textoSuperior.style.display = 'flex';
  //textoSuperior.style.justifyContent = 'center';
  //textoSuperior.style.alignItems = 'center'
  textoInferior.style.fontSize = `${inputTamanioLetra.value}px`
  //   textoInferior.style.display = 'flex';
  //   textoInferior.style.justifyContent = 'center';
  //   textoInferior.style.alignItems = 'center'
}
)

//CAMBIAR ALINEACION DEL PARRAFOS

btnAlineacionIzquierda.addEventListener("click", () => {
  textoSuperior.style.textAlign = "left"
  textoInferior.style.textAlign = "left"

})

btnAlineacionCentro.addEventListener("click", () => {
  textoSuperior.style.textAlign = "center"
  textoInferior.style.textAlign = "center"
})

btnAlineacionDerecha.addEventListener("click", () => {
  textoSuperior.style.textAlign = "right"
  textoInferior.style.textAlign = "right"
})

//CAMBIAR COLOR DE LETRA DE PARRAFOS y actualiza el span con el color

inputColorLetra.addEventListener("input", () => {
  textoSuperior.style.color = inputColorLetra.value
  textoInferior.style.color = inputColorLetra.value
  spanColorLetra.innerText = inputColorLetra.value
})

//CAMBIAR COLOR DE FONDO DE PARRAFOS y actualiza el span con el color

inputColorFondo.addEventListener("input", () => {
  textoSuperior.style.backgroundColor = inputColorFondo.value
  textoInferior.style.backgroundColor = inputColorFondo.value
  spanColorFondoTexto.innerText = inputColorFondo.value
})

//FONDO TRANSPARENTE

const fondoTransparente = () => {
  if (inputFondoTransparente.checked) {
    textoSuperior.style.backgroundColor = inputFondo.value
    textoInferior.style.backgroundColor = inputFondo.value
  } else {
    textoSuperior.style.backgroundColor = inputColorFondo.value
    textoInferior.style.backgroundColor = inputColorFondo.value
  }
}

inputFondoTransparente.addEventListener("change", fondoTransparente)

//CAMBIAR CONTORNO DEL TEXTO

btnSinContorno.addEventListener("click", () => {
  textoSuperior.style.textShadow = "none"
  textoInferior.style.textShadow = "none"
})

btnContornoClaro.addEventListener("click", () => {
  textoSuperior.style.textShadow = "2px 2px 2px white"
  textoInferior.style.textShadow = "2px 2px 2px white"

})

btnContornoOscuro.addEventListener("click", () => {
  textoSuperior.style.textShadow = "2px 2px 2px black"
  textoInferior.style.textShadow = "2px 2px 2px black"

})

//CAMBIAR ESPACIADO

inputEspaciado.addEventListener("input", () => {
  textoSuperior.style.padding = `${inputEspaciado.value}px 10px`
  textoInferior.style.padding = `${inputEspaciado.value}px 10px`
})

//CAMBIAR INTERLINEADO

selectInterlineado.addEventListener("change", () => {
  textoSuperior.style.lineHeight = selectInterlineado.value
  textoInferior.style.lineHeight = selectInterlineado.value
})

//FIN PANEL DE TEXTO