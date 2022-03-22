// caso queira remover o New Date e colocar o valor de 0 a 6 para exibir os outro dias.
let diaSemana = new Date().getDay();

let nomeDiaSemana;

// switch(diaSemana) {
//     case 0:
//         document.write('Hoje é domingo');
//         break;
//     case 1:
//         document.write('Hoje é segunda-feira');
//         break;
//     case 2:
//         document.write('Hoje é terça-feira');
//         break;
//     case 3:
//         document.write('Hoje é quarta-feira');
//         break;
//     case 4:
//         document.write('Hoje é quinta-feira');
//         break;
//     case 5:
//         document.write('Hoje é sexta-feira');
//         break;
//     case 6:
//         document.write('Hoje é Sábado');
//         break;
//     default:
//         document.write('Ta doido esse dia não existe');
//         break;
// }

switch(diaSemana) {
    case 0:
        nomeDiaSemana = 'domingo';
        break;
    case 1:
        nomeDiaSemana = 'segunda-feira';
        break;
    case 2:
        nomeDiaSemana = 'terça-feira';
        break;
    case 3:
        nomeDiaSemana = 'quarta-feira';
        break;
    case 4:
        nomeDiaSemana = 'quinta-feira';
        break;
    case 5:
        nomeDiaSemana = 'sexta-feira';
        break;
    case 6:
        nomeDiaSemana = 'sábado';
        break;
    default:
        nomeDiaSemana = 'Ta doido esse dia nem existe';
        break;
}

document.write(`Dia da semana é: ${nomeDiaSemana}`);