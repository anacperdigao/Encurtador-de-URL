//Puxando o botao de copiar
const botaoCopia = document.querySelector("#botao-copia")

//Chamando o evento de escuta
botaoCopia.addEventListener("click", copiarLink)


function copiarLink(){
    //Puxando o valor do texto que quero copiar
    let textoCopia = document.querySelector("#resultado-url").textContent

    navigator.clipboard.writeText(textoCopia)
    botaoCopia.innerHTML = "Copiado!"
    botaoCopia.style.background = "hsl(257, 27%, 26%)"
}

