
const lib = require('../lib')

module.exports = app => {
    
    app.get('/', (req, res) => {
        res.render("index", lib)
    })
    
    app.use('/api', require('./api'))
}


//module.exports = router

// module.exports = function(app)
// {
//      app.get('/',function(req,res){
//         res.render('index.html')
//      });
//      app.get('/about',function(req,res){
//         res.render('about.html');
//     });
// }

//app.use('/', require("./routes/view"))

//app.use('/api', require("./routes/api"));