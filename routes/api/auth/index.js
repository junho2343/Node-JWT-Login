const router = require('express').Router()
const controller = require('./controller')


router.get('/', (req, res) => {
    res.send("JWT Token api")
})

router.post('/token', controller.token)

module.exports = router