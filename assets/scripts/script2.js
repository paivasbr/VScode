// Case Sensitive
// nome é diferente de uma chamada Nome

//var: Escopo Global
//let: Escopo Local
//const: Escopo Global que nao muda seu valor

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Invalid Name'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Valid Name' 
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
        txtEmail.innerHTML = 'Invalid E-mail'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Valid E-mail'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML ='Text too large, type a maximum of 100 characters'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('The form was sent successfully')
    } else{
        alert('Fill in the form correctly before submitting')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}