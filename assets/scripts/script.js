// Case Sensitive
// nome é diferente de uma chamada Nome

//var: Serve para o Escopo Global
//let: Serve para o Escopo Local
//const: Serve para o Escopo Global

function click(){
    alert(" You clicked the button")
}

let nome = window.document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")

function send(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("!!All Dields are Mandatory!!")
    }
    alert("Hello" + nome.value + "! Your Email Has Been Sent Successfully!")
}