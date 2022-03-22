let menos = document.querySelector('#menos')
let mais = document.querySelector('#mais')
let mostraNumero = document.querySelector('#mostraNumero')

let contador = 0

menos.onclick = function(){
    contador--
    mostraNumero.innerText = contador
}

mais.onclick = function(){
    contador++
    mostraNumero.innerText = contador
}