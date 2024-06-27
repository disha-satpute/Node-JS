
const user = require('./controllers/userController');

//mapping API using routing technique


module.exports=function(app){
    app.route('/api/task')
       .get(user.getAll)
       .post(user.insert)
       .put(user.update)
       .delete(user.delete);
};

