const home = require('./controllers/homeControlller');
const auth = require('./controllers/authController');

module.exports=function(app){
    app.get('/',home.home)
    app.get('/login',auth.getLogin)
    app.post('/login',auth.postLogin);
}
