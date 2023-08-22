    
const passport = require('passport');
const googleStrategy= require('passport-google-oauth20').Strategy;
const crypto = require('crypto');
const User = require('../models/users');

console.log('In Passport Google Oauth');

    // Tell Passport to use goole Oauth for logging in
    passport.use(new googleStrategy(
        {
            clientID: '',
            clientSecret:'',
            callbackURL: 'http://localhost:3700/users/auth/google/callback',
            scope : ['profile', 'email'],
            // state: true
        },

            function(accessToken, refreshToken, profile, done){
                // Find a User
                //console.log(profile);
               
                User.findOne({email:profile.emails[0].value}).then(function(user){
                    
                   console.log(profile);
                   console.log('##########',accessToken);
                    if(user){
                        // If user is found, then set it as req.user
                        return done(null,user);
                    }else{
                        // if not found, then create the user and set it as req.user, req.user means sign in that
                        // Particular user
                        User.create(
                            {
                                name:profile.displayName,
                                email:profile.emails[0].value,
                                password:crypto.randomBytes(20).toString('hex')
                            }                          
                            ).then(function(user){                               
                                         
                                    return done(null, user);
                                
                            }).catch(function(err){
                                console.log('Error in creating User using GoogleOauth ', err);return; 
                            });
                    }
                }).catch(function(err){
                      console.log('Error in logging in using GoogleOauth ', err);return; 
                });
            }
        ));

        module.exports = passport;


