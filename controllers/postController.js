
const Post = require('../models/post');



module.exports.create = function(req, res){

    Post.create({
        content:req.body.content,
        user: req.body._id
    }, function(err){
        if(err){console.log(err); return}
        return res.redirect('back');
    });


}