
let botaoTeste = document.querySelector('#botaoTeste')

let count = 0

// botaoTeste.addEventListener('click', function(){

//     console.log('Mensagem 1')
// })

function cliqueBotao(){
    count++;
    console.log('mensagem 1')

    if(count >= 4){
        botaoTeste.removeEventListener('click', cliqueBotao)
    }
}

botaoTeste.addEventListener('click', cliqueBotao)