
// seletor por ID
document.querySelector('#titulo').innerHTML = 'Exemplo';

/**
 * temos o seletor para TAG também como ancora
 */
document.querySelector('a').innerText = '<b>teste aconras</b>'


// Selecionado mais de 1 item por TAG

let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // chamado de função anonima / callback
    // console.log(elemento);
    elemento.innerHTML = 'teste';
})


// selecionando mais de 1 item por CLASS
// pra exbir os numero dos box crei duas formas de contadores usando count / index

let boxes  = document.querySelectorAll('.box')

// let count = 0;
boxes.forEach(function(box, index){
    // count++;
    // box.innerHTML = 'box ' + count
    box.innerHTML = 'box ' + (index + 1);
})