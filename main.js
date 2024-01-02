const btnTexto= document.getElementById("btn-texto")
const btnImg=document.getElementById("btn-img")
const panelImg = document.getElementById("panel-img")
const panelTexto = document.getElementById("panel-texto")


btnImg.addEventListener('click', ()=> {
    panelImg.style.display = 'flex';
    panelTexto.style.display = 'none';
});

btnTexto.addEventListener('click', ()=> {
    panelImg.style.display = 'none';
    panelTexto.style.display = 'flex';
});