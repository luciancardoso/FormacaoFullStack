/*
    Arrow Function
*/

// retorno implicito
const soma = (soma1, soma2) => soma1 + soma2
const resultado = soma(2, 3)
console.log(resultado)

// quando tem 1 paramento pode remover o parentese
const teste = params1 => params1
console.log(teste('ok'))

const botao = document.querySelector('#botao')
botao.onclick = () => {
    console.log(this)
}


