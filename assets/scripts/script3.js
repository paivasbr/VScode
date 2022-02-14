// let divTempo document.getElementById('tempo')
let divTime = document.querySelector('#tempo')
let divSpace = document.querySelector('#espaco')

//Função de Tempo
function msgTempo() {
    setTimeout("insertHtml()", 3000) //1seg = 1000 milliseconds
}

function insertHtml() {
    divTime.innerHTML = "Inserted Content"
}

//Função URL
function msgSpace() {
    let location = window.location.href
    divSpace.innerHTML = location
}

// Função da Imagem
function answer(){
    alert("Messagem disparada pelo evento onMouseOver da imagem")
}