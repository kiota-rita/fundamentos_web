let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = '#C11F25'
    }
    else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = '#03421E'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = '#C11F25'
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = '#03421E'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto excedeu 100 caracteres'
        txtAssunto.style.color = '#C11F25'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar(){

    if(nomeOk == true && emailOk == true && assuntoOk == true){
    alert('Seu formulário foi enviado com sucesso!')
    }
    else{
        alert('Por favor, observe se os campor estão preenchidos corretamente')
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
