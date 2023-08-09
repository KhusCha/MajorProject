

    module.exports.setFlash = function(req, res, next){

        res.locals.flash = {
            'successForLogIn': req.flash('logInSuccess'),
            'errorForLogIn': req.flash('error'),
            'successForLogOut' : req.flash('logOutSuccess'),
            'errorForLogOut': req.flash('error')
        }
        next();
    }