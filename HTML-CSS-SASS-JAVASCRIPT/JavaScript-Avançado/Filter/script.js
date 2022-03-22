/**
 * Filter
 */

const clientes = [
    { name: 'Fulano', lastname: 'Da Silva', age: 14},
    { name: 'Ciclano', lastname: 'santos', age: 18},
    { name: 'Beltrano', lastname: 'Costa', age: 20},
]

const clientesMaiores = clientes.filter(cliente => {
    // let retorno = false;

    // if(cliente.age >= 18){
    //     retorno = true;
    // }

    // return retorno;

    /*
        mais simples de fazer
    */

        return cliente.age >= 18 ? true : false
})

console.log(clientesMaiores)