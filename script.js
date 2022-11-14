let imagem = document.querySelector(".starbucks")
let circulo = document.querySelector(".circulo")

function trocaImgg(endereço){
    imagem.src = endereço
}

function trocaCor(cor){
    circulo.style.background = cor
}