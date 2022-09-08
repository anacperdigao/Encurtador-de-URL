//Importando funcao do modulo "funcao-copia.js"
import {copiarLink} from './funcao-copia.js'

// No carregamento da pagina, vou puxar o que tem no localStorage
window.onload = urlsGravadas

//Puxando a URL digitada
const urlDigitada = document.querySelector("#url-digitada")

//Puxando o botão que vai executar a ação
const botao = document.querySelector("#botao-encurtar")


//Adicionando o evento de escuta para o botao
botao.addEventListener('click', e => {
    e.preventDefault()
    
    if(urlDigitada.value != '' && urlDigitada.value != null){
        encurtandoUrl(urlDigitada)
        return
    }
    alert ("Por favor, digite uma url válida para encurtar!")
  })



//Criando a função que irá consumir a API e criando as divs com as informações da API
async function encurtandoUrl(){

    const url = `https://api.shrtco.de/v2/shorten?url=${urlDigitada.value}`
    let menor = ""
    let maior = ""

    fetch(url)
    .then(res => res.json())
    .then((data) => {
    
    maior = data.result.original_link
    menor = data.result.short_link

    //Criando as divs que vou guardar as informações da API
    const pInput = document.createElement("p")
    pInput.setAttribute("class","input-url")
    pInput.textContent = maior
   
    const pResultado = document.createElement("p")
    pResultado.setAttribute("class","resultado-url")
    pResultado.textContent = menor
    
    const botaoCopia = document.createElement("button")
    botaoCopia.setAttribute("class","botao-copia")
    botaoCopia.innerHTML = "Copiar"
    botaoCopia.addEventListener("click",copiarLink)
    
    const divResultado = document.createElement("div")
    divResultado.setAttribute("class","container__urls-resultados")
    
    const sectionResultados = document.querySelector(".container__input-resultados")
    
    divResultado.appendChild(pInput)
    divResultado.appendChild(pResultado)
    divResultado.appendChild(botaoCopia)
    sectionResultados.appendChild(divResultado)

    // Guardando no sessionStorage
    let keyMaior = "keyMaior"
    let keyMenor = "keyMenor"
    sessionStorage.setItem(keyMaior, maior)    
    sessionStorage.setItem(keyMenor, menor)    

    })

    urlDigitada.value = ""
}

//----------------------------------------------------------------------------------------------------------

function urlsGravadas(){
  
  if (sessionStorage.getItem("keyMaior") === "" || sessionStorage.getItem("keyMenor") === ""){
    
    // Pegando no sessionStorage
    let keyMaior = "keyMaior"
    let keyMenor = "keyMenor"
    sessionStorage.getItem(keyMaior)    
    sessionStorage.getItem(keyMenor)
    

    //Refazendo a DIV para a informação do localStorage
    const pInput = document.createElement("p")
    pInput.setAttribute("class","input-url")
    pInput.textContent = sessionStorage.getItem(keyMaior) 
    
    const pResultado = document.createElement("p")
    pResultado.setAttribute("class","resultado-url")
    pResultado.textContent = sessionStorage.getItem(keyMenor)
    
    const botaoCopia = document.createElement("button")
    botaoCopia.setAttribute("class","botao-copia")
    botaoCopia.innerHTML = "Copiar"
    botaoCopia.addEventListener("click",copiarLink)
    
    const divResultado = document.createElement("div")
    divResultado.setAttribute("class","container__urls-resultados")
    
    const sectionResultados = document.querySelector(".container__input-resultados")
    
    divResultado.appendChild(pInput)
    divResultado.appendChild(pResultado)
    divResultado.appendChild(botaoCopia)
    sectionResultados.appendChild(divResultado)
  }
}