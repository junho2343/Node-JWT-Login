const router = require('express').Router()
const controller = require('./controller')


router.get('/', (req, res) => {
    res.send("JWT Token api")
})

router.post('/token', controller.token)
router.post('/check', controller.check)

module.exports = router