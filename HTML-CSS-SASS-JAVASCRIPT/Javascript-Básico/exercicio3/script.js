function exibir(){

    let nome = prompt('Digite seu nome');
    let idade = prompt('Digite sua idade');

    let inputIdade = parseInt(idade);

    let maiorOuMenor

    if(inputIdade >= 18){
        maiorOuMenor = 'Maior';
    } else if(inputIdade < 18){
        maiorOuMenor = 'Menor';
    }

    let mensagemPersonalizada = '';

    if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
        mensagemPersonalizada = 'Você é personagem do filme The Matrix!';
    }

    let saudacao = `Olá ${nome}, você é ${maiorOuMenor} de idade!`;

    document.querySelector('#titulo').innerHTML = saudacao;
    document.querySelector('#subtitulo').innerHTML = mensagemPersonalizada;
}