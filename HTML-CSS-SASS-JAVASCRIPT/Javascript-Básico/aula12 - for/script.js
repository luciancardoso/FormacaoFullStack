
// for(let contador = 0; contador <= 5000; contador++){
//     document.write(`Hello World ${contador}`);
//     document.write('<br>');
// }

let opcoes;

for(let contador = 1900; contador <= 2021; contador++){
    opcoes += `<option>${contador}</option>`;
}

document.querySelector('#ano').innerHTML = opcoes;


let lista = '';

let clientes = ['Thiago', 'Lucian', 'Felipe', 'Mario', 'Andre', 'Dino'];

for(let contador = 0; contador <= clientes.length - 1; contador++){
    lista += `<li>${clientes[contador]} - ${contador}</li>`;
}

document.querySelector('#listaClientes').innerHTML = lista;


let contando = '';

for(let contador = 0; contador <= 40; contador++){
    contando += `<li>${contador}</li>`;
}

document.querySelector('#contadorTop').innerHTML = contando;


// let lista = '';

// let clientes = ['Thiago', 'Rafael', 'Fulano', 'Ciclano'];

// for(let contador = 0; contador <= clientes.length - 1; contador++){
//     lista += `<li>${clientes[contador]} - ${contador}</li>`;
// }

// document.querySelector('#listaClientes').innerHTML = lista;


let diaDaSemana = new Date().getDay();

let diaSemana;

switch(diaDaSemana){
    case 1:
        diaSemana = 'Segunda-Feira';
        break;
    case 2:
        diaSemana = 'Terça-Feira';
        break;
    case 3:
        diaSemana = 'Quarta-Feira';
        break;
    case 4:
        diaSemana = 'Quinta-Feira';
        break;
    case 5:
        diaSemana = 'Sexta-Feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break;
    case 7:
        diaSemana = 'Domingo';
        break;
    default:
        diaSemana = 'Não esse dia!! hehe =)';
        break;
}

document.write(`Hoje é: ${diaSemana}`);