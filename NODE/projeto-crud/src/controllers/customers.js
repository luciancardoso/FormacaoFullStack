const CustomersModel = require('../model/customers')
const { crypto } = require('../utils/password')

const defaultTitle = 'Cadastro de Clientes'

function index(req, res){
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password,
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age,
        email,
        password: passwordCrypto,
    })

    register.save();
    res.render('register', {
        title: 'Cadastro de Clientes',
        message: 'Cadastro realizado com sucesso'
    })
    // res.send('cadastro realizado');
}

async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'Listagem de Usuários',
        users,
    })
}

module.exports = {
    index,
    add,
    listUsers,
}