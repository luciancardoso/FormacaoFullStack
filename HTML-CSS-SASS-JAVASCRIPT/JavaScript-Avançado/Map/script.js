/**
 * Map
 */

const clientes = [
    { name: 'Fulano', lastname: 'Da Silva'},
    { name: 'Ciclano', lastname: 'santos'},
    { name: 'Beltrano', lastname: 'Costa'},
]

let clientesFinal = []

clientes.forEach(function(cliente){
    clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)


// MAP ele sempre vai montar uma Arrys , ele e um metodo que serve pra pecorrer
// uma arrys e montar uma arrys.

const clientesFinalMap = clientes.map((cliente) => {
    return cliente.name + ' ' + cliente.lastname
})

console.log(clientesFinalMap)