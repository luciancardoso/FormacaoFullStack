let clientes = [
    {
        nome: 'Lucian',
        idade: 27,
        linguagens: ['C#','PHP','python']
    },
    {
        nome: 'Thiago',
        idade: 34,
        linguagens: ['C#', 'JAVA', 'PHP']
    },
    {
        nome: 'Felipe',
        idade: 21,
        linguagens: ['C#', 'JAVA BASIC']
    }
]

let htmlClientes = '';

for(let cliente of clientes){

    let listaLinguagens = '';

    for(let linguagem of cliente.linguagens){
        listaLinguagens += `<li>${linguagem}</li>` /* aqui e usando string literal */
    }

    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade} <br>
            <b>Linguagens</b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes;


/**
 * segundo for
 */


let produtos = [
    {
        produto: 'Telefone',
        marca: 'Apple Inc.',
        descricao: 'Iphone XR 64GB iOS 15.',
        acessorios: ['Carregador Fast 4.0', 'Adesivo Apple', 'Manual de Instruções', 'Garantia de 5 anos']
    },
    {
        produto: 'Telefone',
        marca: 'Samsung',
        descricao: 'Galaxy Note 9',
        acessorios: ['Carregador 2.0', 'Manual de Instruções', 'Garantia de 2 anos']
    }
]

let = htmlProdutos = '';

for(let telefonia of produtos){

    let listaTelefonia = '';
    for(lista of telefonia.acessorios){
        listaTelefonia += `<li>${lista}</li>`
    }

    htmlProdutos += `
        <li>
            <b>Produto:</b> ${telefonia.produto}<br>
            <b>Marca:</b> ${telefonia.marca}<br>
            <b>Descrição:</b> ${telefonia.descricao}<br>
            <b>Acessórios:</b> <br>
            <ul>
                ${listaTelefonia}
            </ul>
        </li>
    `
}

document.querySelector('#listaProdutos').innerHTML = htmlProdutos;


/**
 * apenas colocando em praticar para não esquecer....
 */

let exibir = '';

for(let contador = 1900; contador <= 2021; contador++){
    exibir += `<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = exibir;


let diaDaSemana = new Date().getDay();

let diaSemana;

switch(diaDaSemana){
    case 1:
        diaDaSemana = 'Segunda-Feira';
        break;
    case 2:
        diaDaSemana = 'Terça-feira';
        break;
    case 3:
        diaDaSemana = 'Quarta-Feira';
        break;
    case 4:
        diaDaSemana = 'Quinta-Feira';
        break;
    case 5:
        diaDaSemana = 'Sexta-Feira';
        break;
    case 6:
        diaDaSemana= 'Sábado';
        break;
    default:
        diaDaSemana = 'Caraiii esse dia nem existe kk =)';
        break;
}

document.write(`Hoje é: ${diaDaSemana}`);


/**
 * outro for
 */

let pessoas = [
    {
        nome: 'João',
        idade: '18',
        acao: ['andar', 'sentar', 'correr', 'falar']
    },
    {
        nome: 'Fulano',
        idade: '18',
        acao: ['andar', 'sentar', 'correr', 'falar']
    },
    {
        nome: 'Ciclano',
        idade: '18',
        acao: ['andar', 'sentar', 'correr', 'falar']
    }
]

let htmlPeople = '';

for(let pessoa of pessoas){

    let listaVip = '';
    for(let listaV of pessoa.acao){
        listaVip += `<li>${listaV}</li>`;
    }

    htmlPeople += `
        <li>
            <b>Nome:</b> ${pessoa.nome}<br>
            <b>Idade:</b> ${pessoa.idade}<br>
            <b>Ação:</b><br>
            <ul>
                ${listaVip}
            </ul>
        </li>
    `;
}

document.querySelector('#listaPessoasTop').innerHTML = htmlPeople;



let peoples = [
    {
        Name: 'Khan',
        Age: '32',
        Linguage: ['EN', 'PT', 'BR']
    },
    {
        Name: 'Rhyle',
        Age: '27',
        Linguage: ['EN', 'BR']
    }
]

let htmlFistBlood = '';

for(let people of peoples){

    let listLinguages = '';
    for(let linguages of people.Linguage){
        listLinguages += `<li>${linguages}</li>`
    }

    htmlFistBlood += `
        <li>
            <b>Name:</b> ${people.Name}<br>
            <b>Age:</b> ${people.Age}<br>
            <b>Linguage:</b>
            <ul>
                ${listLinguages}
            </ul>
        </li>
    `;
}

document.querySelector('#pessoas').innerHTML = htmlFistBlood;