
// let menuMobile = document.querySelector('.menuMobile');
// let botaoMenu = document.querySelector('.botaoMenu')

// let aberto = false // flag 

// function abrirOuFecharBotao(){

//     if(aberto === true){
//         aberto = false
//         menuMobile.classList.remove('aberto')
//         botaoMenu.innerText = 'Abrir Menu'
//     } else if(aberto === false){
//         aberto = true
//         menuMobile.classList.add('aberto')
//         botaoMenu.innerText = 'Fechar Menu'
//     }
// }

let menuMobile = document.querySelector('.menuMobile');
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false

function abrirOuFecharBotao(){

    if(aberto === true){
        aberto = false;
        menuMobile.classList.remove('aberto');
        botaoMenu.innerText = 'abrir menu';
    } else if(aberto === false){
        aberto = true;
        menuMobile.classList.add('aberto');
        botaoMenu.innerText = 'fechar menu';
    }
}


let titulo = document.querySelectorAll('h1')

titulo.forEach(function(elemento){ // callback
    
    elemento.innerHTML = 'dropando no teste kk';
})


let pessoas = [
    {
        Nome: 'Lucian',
        Idade: '27',
        Linguagens: ['C#', 'PHP', 'JavaScript']
    },

    {
        Nome: 'Fulando',
        Idade: '30',
        Linguagens: ['PHP', 'C#']
    }
]

let htmlExibir = '';

for(pessoa of pessoas){

    let dadosPessoa = '';
    for(jedi of pessoa.Linguagens){
        dadosPessoa += `<li>${jedi}</li>`
    }

    htmlExibir += `
        <ul>
            <b>Nome:</b> ${pessoa.Nome}<br>
            <b>Idade:</b> ${pessoa.Idade}
            <b>Linguagens:</b><br>
            <ul>
                ${dadosPessoa}
            </ul>
        </ul>
    `
}

document.querySelector('.dados').innerHTML = htmlExibir;