// Case Sensitive
// nome é diferente de uma chamada Nome

//var: Escopo Global
//let: Escopo Local
//const: Escopo Global que nao muda seu valor

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'

function send(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("!!All Dields are Mandatory!!")
    }
    alert("Hello" + nome.value + "! Your Email Has Been Sent Successfully!")
} 

