const btnTexto = document.getElementById("btn-texto")
const btnImg = document.getElementById("btn-img")
const panelImg = document.getElementById("panel-img")
const panelTexto = document.getElementById("panel-texto")
const btnCambiarModo = document.getElementById("btn-cambiar-modo")
const body = document.body
const containerImgMeme = document.getElementById("container-img-meme")
// const imgMeme=document.getElementById("img-meme")
const inputUrl = document.getElementById("input-url")
const inputFondo = document.getElementById("input-fondo")
const selectTipoFondo = document.getElementById("select-tipo-fondo")
const inputBrillo = document.getElementById("input-brillo")
const inputOpacidad = document.getElementById("input-opacidad")
const inputContraste = document.getElementById("input-contraste")
const inputDesenfoque = document.getElementById("input-desenfoque")
const inputEscalaGrises = document.getElementById("input-escala-grises")
const inputSepia = document.getElementById("input-sepia")
const inputHue = document.getElementById("input-hue")
const inputSaturado = document.getElementById("input-saturado")
const inputNegativo = document.getElementById("input-negativo")
const btnFiltros= document.getElementById("btn-filtros")
const inputCargarImg = document.getElementById("input-cargar-img")
const btnDescargarMeme = document.getElementById("boton-descargar-meme")
const inputTextoArriba=document.getElementById("input-texto-arriba")
const inputTextoAbajo=document.getElementById("input-texto-abajo")
const textoSuperior= document.getElementById("texto-superior")
const textoInferior= document.getElementById("texto-inferior")


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
    containerImgMeme.style.height = `${window.visualViewport.width - 30}px`
    containerImgMeme.style.width = `${window.visualViewport.width - 30}px`
  } else {
    containerImgMeme.style.height = "400px"
    containerImgMeme.style.width = "400px"
  }
})

if (window.visualViewport.width < 600) {
  containerImgMeme.style.height = `${window.visualViewport.width - 30}px`
  containerImgMeme.style.width = `${window.visualViewport.width - 30}px`
} else {
  containerImgMeme.style.height = "400px"
  containerImgMeme.style.width = "400px"
}

// INICIO PANEL IMAGEN

// CARGA IMAGEN DEL MEME CON LA URL
inputUrl.addEventListener('input', () => {

  let urlCargada = inputUrl.value

  // imgMeme.src = urlCargada
  containerImgMeme.style.background = `url(${urlCargada})`
  containerImgMeme.style.backgroundSize="contain"


}

  // containerImgMeme.style.backgroundImage=`url(${urlCargada})`}
)

//CARGA IMG DE LA COMPU

inputCargarImg.addEventListener("change", (e) => {
  const archivo = e.target.files[0];
  if (archivo) {
    const reader = new FileReader();
    reader.onload = (e) => {
      containerImgMeme.style.backgroundImage = `url(${e.target.result})`;
    };
    reader.readAsDataURL(archivo);
  }
});

//DESCARGAR MEME

btnDescargarMeme.addEventListener("click", () => {
  domtoimage.toBlob(containerImgMeme).then((blob) => {
    window.saveAs(blob, "meme.png");
  });
});

//CAMBIA COLOR FONDO DEL MEME
inputFondo.addEventListener('input', () => {
  let colorFondo = inputFondo.value
  containerImgMeme.style.backgroundColor = colorFondo
})

//CAMBIA TIPO DE FONDO DEL MEME
selectTipoFondo.addEventListener('change', () => {
  let tipoFondo = selectTipoFondo.value
  containerImgMeme.style.backgroundBlendMode = tipoFondo
})

// CAMBIA FILTROS

const aplicarFiltros=()=> {

  containerImgMeme.style.filter = `brightness(${inputBrillo.value}) opacity(${inputOpacidad.value}) contrast(${inputContraste.value}%) blur(${inputDesenfoque.value}px) grayscale(${inputEscalaGrises.value}%) sepia(${inputSepia.value}%) hue-rotate(${inputHue.value}deg) saturate(${inputSaturado.value}%) invert(${inputNegativo.value})`

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
const reestablecerFiltros=()=>{
  inputBrillo.value=1
  inputOpacidad.value=1
  inputContraste.value=100
  inputDesenfoque.value=0
  inputEscalaGrises.value=0
  inputSepia.value=0
  inputHue.value=0
  inputSaturado.value=100
  inputNegativo.value=0

}

btnFiltros.addEventListener("click",reestablecerFiltros)

//FIN PANEL IMAGEN

// INICIO PANEL TEXTO

//ACTUALIZAR TEXTOS DE PARRAFOS

const actualizarTexto=()=>{
  textoSuperior.innerText= inputTextoArriba.value
  textoInferior.innerText= inputTextoAbajo.value
  
}

inputTextoArriba.addEventListener("input", actualizarTexto)
inputTextoAbajo.addEventListener("input", actualizarTexto)

