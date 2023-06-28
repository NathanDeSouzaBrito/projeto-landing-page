var setaDireita =  window.document.getElementById("direita")
var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    samanta.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:50px "
}

function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    samanta.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}