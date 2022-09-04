//Puxando a URL digitada
const urlDigitada = document.querySelector("#url-digitada")

//Puxando o botão que vai executar a ação
const botao = document.querySelector("#botao-encurtar")

//Puxando os campos que vou atualizar
const urlMaior = document.querySelector("#input-url")
const urlMenor = document.querySelector("#resultado-url")

//Adiconando o evento de escuta
botao.addEventListener('click', e => {
    e.preventDefault()
    if(urlDigitada.value != '' && urlDigitada.value != null){
        encurtandoUrl(urlDigitada)
        return
    }
    alert ("Por favor, digite uma url válida para encurtar!")
  })


//Criando a função que irá consumir a API
var menor = ""
var maior = ""

  async function encurtandoUrl(){

    const url = `https://api.shrtco.de/v2/shorten?url=${urlDigitada.value}`

    fetch(url)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    
    maior = data.result.original_link;
    menor = data.result.short_link;

    urlMaior.textContent = maior;
    urlMenor.textContent = menor;
    })
}

