const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');


// Authentication Using Passport
passport.use(new LocalStrategy({

    usernameField: 'email'
},
    function(email, password,done){
       // find a user & establish the Identity
       User.findOne({email:email}).then( function(user){
       
        if(!user || user.password!=password){
            console.log('Invalid UserId/Password Combo');
            return done(null, false);
        }
        return done(null, user);
       }).catch(function(err){        
            console.log('Error in finding the User -> to Passport.js');
            return done(err);
        
       });

        

    }    

));

// Serializing the user, to decide which key need to be kept in the cookies


passport.serializeUser(function(user, done){
    done(null, user.id);
});

// Deserializing the user from the key in the cookies

passport.deserializeUser(function(id, done){
    User.findById(id).then( function( user){
        
        return done(null, user);
    }).catch(function(err){        
            console.log('Error in finding the User -> to Passport.js');
            return done(err);
        
    })
});


//check if the user is authenticated

passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/users/signIn');
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie
        // and we are sending this to the locals for the views
        res.locals.user = req.user;
    }
    next();
}

module.exports= passport;







// comments from the function with email, password and done as the parameter

 //find a user and establish the Identity
        // User.findOne({email:email}).then((user)=>{

        //     if(!user || user.password != password){
        //         console.log("User Name/Id and Password combo didn't Match");
        //         return done(null, false);
        //     }

        //     return done(null, user);
        // }).catch((err)=>{
        //     console.log('Error in finding the user -> Passport');
        //     return done(err);
        // });