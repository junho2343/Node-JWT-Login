/* =======================
    LOAD THE DEPENDENCIES
==========================*/
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
//const mongoose = require('mongoose')

/* =======================
    LOAD THE CONFIG
==========================*/
const config = require('./config')
const port = process.env.PORT || 3000 

/* =======================
    EXPRESS CONFIGURATION
==========================*/
const app = express()

// parse JSON and url-encoded query
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// print the request log on console
app.use(morgan('dev'))

// set the secret key variable for jwt
app.set('jwt-secret', config.secret)

// set view template
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);




// open the server
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
})

// routers
require('./routes/main')(app);

/* =======================
    CONNECT TO MONGODB SERVER
==========================*/
// mongoose.connect(config.mongodbUri)
// const db = mongoose.connection
// db.on('error', console.error)
// db.once('open', ()=>{
//     console.log('connected to mongodb server')
// })