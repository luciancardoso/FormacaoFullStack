let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');


if(idade >= 18){
    document.write(`Olá ${nome}, Maior de idade`);
} else if(idade < 18){
    document.write(`${nome}, menor de idade`);
}