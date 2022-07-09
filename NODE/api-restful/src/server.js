const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes')

const app = express()

// conexão com o bando de dados
db.connect()

// habilita CORS
// app.use(cors())

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br',
]

// aqui estou permitindo apenas um endereço caso eu queira permitir mais de um endereço preciso
// preciso criar uma arrays de strings e jogar dentro da arrays os endereços que quero permitir
// app.use(cors({
//     origin: 'http://www.nossaaplicacao.com.br'
// }))

app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        // mobile app
        if(!origin) allowed = true

        // se não estiver dentro 
        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

// habilita server para receber dados json
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening at port ${port}`))