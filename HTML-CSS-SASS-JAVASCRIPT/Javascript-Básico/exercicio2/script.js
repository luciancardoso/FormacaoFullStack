let nome = prompt('Digite seu nome');
let idade = prompt('Digite sua idade');

if(idade >= 18 && nome === 'Thomas Anderson' || nome === 'thomas anderson'){
    document.write(`Olá ${nome}, você é MAIOR de idade. Você é personagem do filme The Matrix!`);
} else if(idade >= 18){
    document.write(`Olá ${nome}, Maior de idade`);
} else {
    document.write(`${nome}, menor de idade`);
}