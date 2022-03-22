// let idade = 18;

// if(idade >= 18){
//     document.write('OK, você é maior de idade!');
// } else if(idade === 15){
//     document.write('você tem 15 anos!');
// } else {
//     document.write('você não pode acessar!');
// }


let nome = prompt('Digite seu nome');

if(nome === 'Thiago' || nome === 'thiago') {
    document.write(`Olá ${nome}, Seja Bem vindo!`);
} else {
    document.write('você não tem permissão de administrador');
}