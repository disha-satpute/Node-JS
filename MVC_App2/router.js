const routes = require('./controllers/homeControlller');

module.exports=function(app){
    app.get('/',routes.profile);
}