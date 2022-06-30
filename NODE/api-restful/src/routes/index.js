const router = require('express').Router()

router.get('/clientes', (req, res) => {
    res.send({
        OK: 123
    })
})

module.exports = router