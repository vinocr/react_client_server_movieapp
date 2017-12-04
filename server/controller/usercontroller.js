const User = require('../models/authenschema');

var userController = {
    adduser: function(req, res) {
        var newUser = new User({username: req.body.username, password: req.body.password});

        newUser.save().then((doc) => {
            res.send(doc);
        }, (err) => {
            console.log(err);
            res.send(err);
        });
    },
    
    login: function(req, res) {
       res.json({responseText:'authenticated'});
    },
    
    logout: function(req, res) {
        req.session.destroy(function(err) {
          if (err) {
            console.log("Error");
          } else {
            res.send("success");
          }
        });
    }

};

module.exports = userController;
