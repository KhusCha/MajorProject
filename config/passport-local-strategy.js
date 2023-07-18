const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/users');


// Authentication Using Passport
passport.use(new LocalStrategy({

    usernameField: 'email'
},
    function(email, password,done){
       // find a user & establish the Identity
       User.findOne({email:email}, function(err,user){
        if(err){
            console.log('Error in finding the User -> to Passport.js');
            return done(err);
        }
        if(!user || user.password!=password){
            console.log('Invalid UserId/Password Combo');
            return done(null, false);
        }
        return done(null, user);
       });

        

    }    

));

// Serializing the user, to decide which key need to be kept in the cookies


passport.serializeUser(function(user, done){
    done(null, user.id);
});

// Deserializing the user from the key in the cookies

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding the User -> to Passport.js');
            return done(err);
        }
        return done(null, user);
    })
});

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