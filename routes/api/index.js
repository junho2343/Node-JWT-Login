const router = require('express').Router()
const auth = require('./auth')


router.get('/', (req, res) => {
    res.send("JWT Token api")
})

router.use('/auth', auth)

module.exports = router