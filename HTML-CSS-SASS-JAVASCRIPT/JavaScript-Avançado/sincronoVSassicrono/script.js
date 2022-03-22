/**
 * SINCRONO vs ASSINCRONO
 */

function primeira(){
    console.log('Primeira');
}

function segunda(){
    console.log('Segunda');
}

setTimeout(primeira, 2000); // Assincrono

// primeira();

segunda();