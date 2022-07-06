const ProductsModel = require('../models/products')

async function get(req, res){

    const { id } = req.params

    // refatorando o if
    // let obj = {}

    // if(id){
    //     obj._id = id
    // }

    // if ternario aqui se eu tiver um objeto quero que atribuia a um objeto
    // esse objeto vai ter um (_id: id) caso contrario eu quero que seja null
    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)

}

async function post(req, res){
    const {
        name,
        brand,
        price,
    } = req.body

    const products = new ProductsModel({
        name,
        brand,
        price,
    })

    products.save()
    res.send({
        message: 'sucesso'
    })
}

module.exports = {
    get,
    post,
}