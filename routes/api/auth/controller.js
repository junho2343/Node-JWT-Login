const jwt = require('jsonwebtoken')

exports.token = async (req, res) => {
    const secret = req.app.get('jwt-secret')
    const {key} = req.body
    
    const Get_Token = _ => {
        return new Promise( (resolve, reject) => {
            jwt.sign({key}, secret, {}, 
                (err, token) => {
                    if(err) reject(err)
                    resolve(token)
                })    
        })
        
    }
    
    const respond = token => {
        res.json({
            success: true,
            token
        })
    }

    const onError = error => {
        res.status(403).json({
            success: false,
            message: error.message 
        })
    }

    try {
        respond(await Get_Token())
    }
    catch (error) {
        onError(error)
    }

}

exports.check = async (req, res) => {
    
    const {token} = req.body

    if (!token) {
        res.status(403).json({
            success: false,
            message: "not exists token"
        })
    }

    const Check_Token = _ => {
        return new Promise( (resolve, reject) => {
            console.log(token, req.app.get('jwt-secret'))
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            })
        } )
    }

    const respond = token => {
        res.json({
            success: true,
            token
        })
    }

    const onError = error => {
        
        res.status(403).json({
            success: false,
            message: error.message 
        })
    }

    try {
        respond(await Check_Token())
    }
    catch (error) {
        onError(error)
    }
}