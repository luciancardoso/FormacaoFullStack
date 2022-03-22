let valor = prompt('Digite qual tabuada você quer saber!');

let tabuada = parseInt(valor);

for(let contador = 1; contador <= 10; contador++){
    let resultado = tabuada * contador;

    let mensagem = `${tabuada} X ${contador} = ${resultado} <br>`
    document.write(mensagem);
}