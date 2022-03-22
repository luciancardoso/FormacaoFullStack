
let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    
     // metodo para previnir o comportamento padrão do formulario
    evento.preventDefault()

    let temError = false

    let inputNome = document.forms['formCadastro']['nome']

    if(!inputNome.value){
        temError = true
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Digite o nome corretamente'
    } else {

        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value){

        temError = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = 'Digite o e-mail corretamente'
    } else {

        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectCidade.value){

        temError = true
        selectCidade.classList.add('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = 'Selecione a cidade corretamente'
    } else {

        selectCidade.classList.remove('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerText = ''
    }

    // console.log('ok')

    if(!temError){
        formulario.submit()
    }

}