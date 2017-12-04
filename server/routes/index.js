var expressSession = require('express-session');
var flash = require('connect-flash');
//requires controller files
var usercontroller = require('../controller/usercontroller.js');
var moviecontroller = require('../controller/moviecontroller.js');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

function expressRoutes(app){

app.use(expressSession({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
     
//callbacks the signup function in controller
app.post('/signup', usercontroller.adduser);

//callbacks the login function in controller
app.post('/login',passport.authenticate('local', {
       failureFlash: 'Invalid Username and Password',
       successFlash: "Welcome to Movie App"
    }),usercontroller.login);

//callbacks the add function in controller
app.post('/movie/add', moviecontroller.add);

//callbacks the view function in controller
app.get('/movie/view', moviecontroller.view);

//callbacks the delete function in controller
app.get('/movie/delete', moviecontroller.delete);

//callbacks the logout function in controller
app.get('/logout', usercontroller.logout);

}
module.exports=expressRoutes;
