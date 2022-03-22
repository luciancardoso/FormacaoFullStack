let menos = document.querySelector('#menos')
let mais = document.querySelector('#mais')
let mostraNumero = document.querySelector('#mostraNumero')

let contador = 0

let incrementoInterval
let decrementoInterval

menos.onclick = function(){

    clearInterval(incrementoInterval)

    menos.classList.add('active-red')
    mais.classList.remove('active-green')

    decrementoInterval = setInterval(function(){
        contador--
        mostraNumero.innerText = contador
    }, 100)
}

mais.onclick = function(){
    clearInterval(decrementoInterval)

    mais.classList.add('active-green')
    menos.classList.remove('active-red')

    incrementoInterval = setInterval(function(){
        contador++
        mostraNumero.innerText = contador
    }, 100)
}