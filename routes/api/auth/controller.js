const jwt = require('jsonwebtoken')

/*
    POST /api/auth/register
    {
        username,
        password
    }
*/
exports.token = (req, res) => {
    const secret = req.app.get('jwt-secret')
    const {key} = req.body
    
    res.send(key)
    
    res.send('this router is working')
res.json({a:12});
    // jwt.sign({
    //     key: key
    // }, secret, (err, token) => {
    //     console.log("errord")
    //     //if (err) reject(err)
    //     //resolve(token)
    // })
    //res.send(req)
    //console.log(req.query)
}