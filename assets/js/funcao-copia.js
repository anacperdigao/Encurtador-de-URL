//Puxando o botao de copiar
const botaoCopia = document.querySelectorAll(".botao-copia")

//Chamando o evento de escuta
for(let i = 0; i < botaoCopia.length; i++){
    botaoCopia[i].addEventListener("click", copiarLink)
}


export function copiarLink(event){

    const alvoEvento = event.target
    const irmaoEvento = alvoEvento.previousSibling

    navigator.clipboard.writeText(irmaoEvento.textContent)
    alvoEvento.innerHTML = "Copiado!"
    alvoEvento.style.background = "hsl(257, 27%, 26%)"

}

