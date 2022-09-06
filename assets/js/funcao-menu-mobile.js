const botaoMenu = document.querySelector('.icone-menu')
//const imagem = document.querySelector(".container__informacoes-imagem")
const menu = document.querySelector('.menu-lateral-mobile')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-mobile--ativo')
})