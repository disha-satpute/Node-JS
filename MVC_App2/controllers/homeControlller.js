const dal = require('../models/dal');

exports.profile = (req, res) => {

    // Controller logic for handling profile request
  let model = dal.getPersonDetails();

    res.render('profile', model); // Assuming 'profile.ejs' is your EJS template file
};