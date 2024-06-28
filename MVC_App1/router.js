const routes = require('./controllers/homeController');

module.exports=function(app){
    app.get('/',routes.home);
    app.get('/about',routes.about);
}